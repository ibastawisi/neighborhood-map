import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}></Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDkr51-HI0Ko88nYe0xka9-243WPgZqBGk')
})(MapContainer)
