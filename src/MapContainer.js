import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    state = {
        lat: 27.5,
        lng: 31.5,
        zoom: 6.3,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) => {
        this.setState({
            lat: props.position.lat,
            lng: props.position.lng,
            zoom: 8,
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                lat: 27.5,
                lng: 31.5,
                zoom: 6.3,
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        const locations = this.props.locations
        const { lat, lng, zoom } = this.state
        return (
            <Map className="col-lg-9 map-container" google={this.props.google} initialCenter={{
                lat: lat,
                lng: lng
            }}
                center={{
                    lat: lat,
                    lng: lng
                }} zoom={zoom} onClick={this.onMapClicked}>
                {locations.map(location =>
                    <Marker
                        key={location.id}
                        onClick={this.onMarkerClick}
                        name={location.name}
                        title={location.name}
                        position={{ lat: location.pos[0], lng: location.pos[1] }} />
                )}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h5>{this.state.selectedPlace.name}</h5>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDkr51-HI0Ko88nYe0xka9-243WPgZqBGk')
})(MapContainer)
