import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import escapeRegExp from 'escape-string-regexp'
import MapContainer from './MapContainer'
import Nav from './Nav';

class App extends Component {
  state = {
    locations: [],
    query: '',
    filteredlocs: [],
    selectedloc: '',
    lat: 27.5,
    lng: 31.5,
    zoom: 6,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }
  componentDidMount() {
    fetch('loc.json')
      .then(response => response.json()).then(locations => this.setState({
        locations: [...locations],
        filteredlocs: [...locations]
      }))
  }

  filter = (query) => {
    const match = new RegExp(escapeRegExp(query), 'i')
    this.setState({
      query,
      filteredlocs: this.state.locations.filter((location) => match.test(location.name)) || this.state.locations
    })
  }

  onLocClicked = (loc) => {
    this.filter(loc.textContent)
    this.setState({
      selectedloc: loc.textContent
    })
  }
  onMarkerClick = (props, marker, e) => {
    this.filter(props.name)
    this.setState({
      lat: props.position.lat,
      lng: props.position.lng,
      zoom: 8,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
    // console.log(props)
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        lat: 27.5,
        lng: 31.5,
        zoom: 6,
        showingInfoWindow: false,
        activeMarker: null,
        selectedloc: null,
        query: '',
        filteredlocs: this.state.locations
      })
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row flex-column flex-lg-row">
          <Nav locations={this.state.filteredlocs} query={this.state.query} filter={this.filter} onLocClicked={this.onLocClicked} />
          <MapContainer google={this.props.google} locations={this.state.filteredlocs} selectedloc={this.state.selectedloc}
            onMapClicked={this.onMapClicked} onMarkerClick={this.onMarkerClick} showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker} selectedPlace={this.state.selectedPlace} lat={this.state.lat}
            lng={this.state.lng} zoom={this.state.zoom} />
        </div>
      </div>
    )
  }
}

export default App;