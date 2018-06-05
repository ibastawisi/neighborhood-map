import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.selectedloc) {
            if (nextProps.selectedloc !== this.props.selectedloc) {
                this.props.onMarkerClick({ ...this.refs }[nextProps.selectedloc].props, { ...this.refs }[nextProps.selectedloc].marker)
            }
        }
        if (nextProps.locations.length !== this.props.locations.length) {
            this.props.onMapClicked(nextProps)
        }
    }

    render() {
        const locations = this.props.locations
        return (
            <Map className="col-lg-9 map-container"
                google={this.props.google}
                initialCenter={this.props.position}
                center={this.props.position}
                zoom={this.props.zoom}
                onClick={this.props.onMapClicked}>
                {locations.map(location =>
                    <Marker ref={location.name}
                        key={location.id}
                        onClick={this.props.onMarkerClick}
                        name={location.name}
                        title={location.name}
                        position={location.position}
                        icon={this.props.markericon} />
                )}
                <InfoWindow
                    marker={this.props.activeMarker}
                    visible={this.props.showingInfoWindow}>
                    <div>
                        <h2 className='h5 text-center p-1'>{this.props.selectedPlace.name}</h2>
                        {this.props.photos.map(photo =>
                        <img key={photo.id} className="img-thumbnail mx-1" src={photo.farm?`https://farm${photo.farm}.static.flickr.com/${
                        photo.server}/${photo.id}_${photo.secret}_t.jpg`:"https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png"}
                        alt={photo.title}/>)}
                        <p className='text-right pt-2 m-0'>Images fetched using Flicker API</p>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDkr51-HI0Ko88nYe0xka9-243WPgZqBGk')
})(MapContainer)
