import React from 'react';
import { Map, Marker} from 'yandex-map-react';

export default function ContactMap (props) {
    render ()
    {
        return (
            <Map onAPIAvailable={function () { console.log('API loaded'); }} center={[55.754734, 37.583314]} zoom={10}>
                <Marker lat={this.props.lat} lon={this.props.lon} />
            </Map>
        );
    }
}