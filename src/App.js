import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MapContainer from './MapContainer'
import Locations from './Locations';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row flex-column flex-lg-row">
          <Locations />
          <MapContainer google={this.props.google} />
        </div>
      </div>

    )
  }
}

export default App;