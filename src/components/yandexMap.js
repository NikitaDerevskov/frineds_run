import React from 'react';
import {
	Button,
	FormLayoutGroup,
	Div, Slider

} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {Link} from "react-router-dom";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";


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

				</FormLayoutGroup>
		        <ul>
		        	{this.state.address.map((n, i) => (
		            	<li key={i}>
		            		<span>{n}</span>
		            		<button onClick={this.delAddress} data-index={i}>X</button>
		            	</li>
		            ))}
		        </ul>
				<Div className="buttonAddEvent">
				<Button size="xl" className="buttonMap" onClick={this.addAddress}>Добавить</Button>
					<Button size="xl" className="buttonMap">Пригласить друзей</Button>
					<p>Количество участников</p>
					<Slider
						min={10}
						max={30}
						top="Simple [10, 30]"
					/>
					<Link to="events">
				<Button className="raiting" size="xl" className="buttonMap">Продолжить</Button>
					</Link>
				</Div>
			</div>
	    );
	}
}