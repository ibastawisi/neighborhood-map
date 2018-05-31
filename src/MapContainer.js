import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
      render() {
        return (
            <Map className="col-lg-9 map-container" google={this.props.google}initialCenter={{
                lat: 27.5,
                lng: 31.5
              }} zoom={6.3}></Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDkr51-HI0Ko88nYe0xka9-243WPgZqBGk')
})(MapContainer)
