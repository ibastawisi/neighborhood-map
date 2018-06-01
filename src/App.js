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
    filteredlocs: []
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
  render() {
    return (
      <div className="container-fluid">
        <div className="row flex-column flex-lg-row">
          <Nav locations={this.state.filteredlocs} query={this.state.query} filter={this.filter} />
          <MapContainer google={this.props.google} locations={this.state.filteredlocs || this.state.locations} />
        </div>
      </div>
    )
  }
}

export default App;