import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './css/style.css';
import './css/components.css';

import Norway from './components/Norway'

class App extends Component {
  state = {
    value: "Choose a country"
  }

  selectCountryHandler = (event) => {
    this.setState({
      value: event.target.value
    });
  //let Destination = event.target.value; 
    ReactDOM.render(<Norway />, document.getElementById('places'));
  }

  render() {
    return (
      <div className="App">
        <h1>GoNorth bucketlist app</h1>
        <label>Choose a country:</label>
        <select name="countrySelect" id="countrySelect" ref="countrySelect"
          onChange={this.selectCountryHandler} >
          <option hidden disabled selected>Select a country...</option>
          <option value="Denmark">Denmark</option>
          <option value="FaroeseIslands">Faroese islands</option>
          <option value="Finland">Finland</option>
          <option value="Greenland">Greenland</option>
          <option value="Iceland">Iceland</option>
          <option value="Norway">Norway</option>
          <option value="Scotland">Scotland</option>
          <option value="Sweden">Sweden</option>
        </select>
        <button>Let's go!</button>

        <p>The selected country is {this.state.value}.</p>
        <div id="places"></div>
      </div>
    );
  }
}

export default App;
