import React, { Component } from 'react'
import { WorldMap } from "react-svg-worldmap"
import { Link } from 'react-router-dom';

class Map extends React.Component {
  data =
    [
      { country: "cn", value: 28 }, // china
      { country: "in", value: 7 }, // india
      { country: "us", value: 15 },  // united states
      { country: "ru", value: 5 },  // russia
      { country: "jp", value: 3 },  // Japan
      { country: "de", value: 2 },  // Germany
      { country: "ir", value: 2 },  // Iran
      { country: "kr", value: 2 },  // South Korea
      { country: "sa", value: 2 },  // Saudi Arabia
      { country: "id", value: 2 },  // indonesia
      { country: "ca", value: 2 },  // Canada
      { country: "mx", value: 1 },  // Mexico
      { country: "za", value: 1 },  // South Africa
      { country: "br", value: 1 },  // Brazil
      { country: "tr", value: 1 },  // Turkey
      { country: "au", value: 1 },  // Alstralia
      { country: "gb", value: 1 },  // United Kingdom
      { country: "pl", value: 1 }  // poland
      // { country: "pk", value: 210797836 },  // pakistan
      // { country: "br", value: 210301591 },  // brazil
      // { country: "ng", value: 208679114 },  // nigeria
      // { country: "bd", value: 161062905 },  // banglades
    ];

  constructor(props) {
    super(props);
    this.state = {
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({vehicleType: event.target.vehicleType});
  }

  handleSubmit(event) {
    //alert('YOUR VEHICLE TYPE: ' + this.state.vehicleType);
    event.preventDefault();
  }

  

  render() {

      return (

        <div className="">
          <div class="box">
            <h1 class="title is-1">Map</h1>
          </div>
          <div class="buttons has-addons">
            <div class="column">
              <button class="button is-medium is-fullwidth is-warning">Map #1</button>
            </div>
            <div class="column">
              <button class="button is-medium is-fullwidth is-warning">Map #2</button>
            </div>
            <div class="column">
              <button class="button is-medium is-fullwidth is-warning">Map #3</button>
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-three-quarters">
              <WorldMap color="red" title="The Percentage of Each Country's Carbon Emissions in the World (> 1%)" valueSuffix="%" size="xxl" data={this.data} />
            </div>
          </div>
        </div>
      );
    }
} 

export default Map;