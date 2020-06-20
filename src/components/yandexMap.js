import React from 'react';
import CreateItem from '../components/createEvent.js';
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Button,
    PanelHeaderContent,
    Avatar,
    PanelHeaderButton,
    Input,
    FormLayoutGroup,
    FormLayout, Group

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline'
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapState = {
	center: [55.76, 37.64],
	zoom: 10,
	controls: [] 
};

export default class YandexMap extends React.Component {
	state = {
	    address: [],
	    coordinates: [0, 0],
	    points: [],
	    map: {},
	    route: null
	};

	constructor(props) {
		super(props);
		this.addressInput = React.createRef();
    }

  	onYmapsLoad = ymaps => {
    	this.ymaps = ymaps;
    	navigator.geolocation.getCurrentPosition(
        	x => this.setState({coordinates: [x.coords.latitude, x.coords.longitude]})
    	)

	    this.ymaps.geocode(this.state.coordinates, {kind: "locality", results: 1})
	    .then(x => {
	        console.log(this.state.coordinates);
	        console.log(x);
	        console.log(x.geoObjects.get(0).properties.get('metaDataProperty'));
	        //this.updateRoute([x.geoObjects.get(0).properties.get('metaDataProperty').getAll()]);
	        //console.log(this.state.route);
	    });
	    
	    new this.ymaps.SuggestView(this.addressInput.current, {
	     	provider: {
	    		suggest: (request, options) => this.ymaps.suggest(request)
	    	}
	    });
  	};

	addAddress = () => {
    	const address = this.addressInput.current.value;
    	if (address) {
        	this.ymaps.geocode(address)
	        .then(x => {
	            this.setState({points: [...this.state.points, x.geoObjects.get(0).geometry.getCoordinates()]})
	        });

	        this.addressInput.current.value = "";
	        this.updateRoute([...this.state.address, address]);
	    }
  	};

	delAddress = e => {
	    const index = +e.target.dataset.index;
	    this.updateRoute(this.state.address.filter((n, i) => i !== index));
	    this.setState({points: this.state.points.filter((n, i) => i !== index)})
	};

	updateRoute = address => {
	    if (this.state.route) {
	    	this.map.geoObjects.remove(this.state.route);
	    }
	    this.setState({
	        address,
	        route: null
	    },
	    () => {
	        const address = this.state.address;
	        if (address.length > 1) {
	    	    this.ymaps
	            .route(address, {
	            	mapStateAutoApply: true
	            })
	            .then(
	            	route => {
	                	this.map.geoObjects.add(route);
	                	this.setState({ route });
	              	},
	            	error => alert(error.message)
	            );
	        }
	    });
	};

	render() {
	    return (
		    <div>
				<YMaps query={{ load: "package.full", apikey: '56aa1688-a644-474b-ae6a-9667250e4c11' }}>
		            <Map
		            	width="100%"
		                state={{center: this.state.coordinates, zoom: 9}}
		                onLoad={this.onYmapsLoad}
		                instanceRef={map => (this.map = map)}
		            >
		            <Placemark geometry={this.state.coordinates} />
		            {this.state.points.map(n => {
		                return (
		                    <Placemark geometry={n} />
		                );
		            })}
		            </Map>
		        </YMaps>
		        <FormLayoutGroup top="Рост" className = "createProfilInput">
		    		<input type="text" id="suggest" ref={this.addressInput} placeholder="адрес..." />
                	<Button size="xl" className="saveButton" onClick={this.addAddress}>Добавить</Button>    
				</FormLayoutGroup>
		        <ul>
		        	{this.state.address.map((n, i) => (
		            	<li key={i}>
		            		<span>{n}</span>
		            		<button onClick={this.delAddress} data-index={i}>X</button>
		            	</li>
		            ))}
		        </ul>
		    </div>
	    );
	}
}