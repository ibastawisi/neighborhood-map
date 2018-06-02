import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

    UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log(nextProps, this.props)
        if (nextProps.selectedloc) {
            if (nextProps.selectedloc !== this.props.selectedloc) {
                // console.log(nextProps.selectedloc)
                // console.log({...this.refs}[nextProps.selectedloc])
                this.props.onMarkerClick({ ...this.refs }[nextProps.selectedloc].props, { ...this.refs }[nextProps.selectedloc].marker)
            }
        }
        if (nextProps.locations.length !== this.props.locations.length) {
            this.props.onMapClicked(nextProps)
        }
    }

    render() {
        const locations = this.props.locations
        const { lat, lng, zoom } = this.props
        return (
            <Map className="col-lg-9 map-container" google={this.props.google} initialCenter={{
                lat: lat,
                lng: lng
            }}
                center={{
                    lat: lat,
                    lng: lng
                }} zoom={zoom} onClick={this.props.onMapClicked}>
                {locations.map(location =>
                    <Marker ref={location.name}
                        key={location.id}
                        onClick={this.props.onMarkerClick}
                        name={location.name}
                        title={location.name}
                        position={{ lat: location.pos[0], lng: location.pos[1] }} />
                )}
                <InfoWindow
                    marker={this.props.activeMarker}
                    visible={this.props.showingInfoWindow}>
                    <div>
                        <h5>{this.props.selectedPlace.name}</h5>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDkr51-HI0Ko88nYe0xka9-243WPgZqBGk')
})(MapContainer)
