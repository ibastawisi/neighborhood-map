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
    selectedloc:''
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

  onLocClicked = (loc)=>{
    this.filter(loc.textContent)
  this.setState({
    selectedloc: loc.textContent  })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row flex-column flex-lg-row">
          <Nav locations={this.state.filteredlocs} query={this.state.query} filter={this.filter} onLocClicked={this.onLocClicked} />
          <MapContainer google={this.props.google} locations={this.state.filteredlocs} selectedloc={this.state.selectedloc}/>
        </div>
      </div>
    )
  }
}

export default App;