import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer'

class App extends Component {
  render() {
    return (
      <MapContainer google={this.props.google} />)
  }
}

export default App;