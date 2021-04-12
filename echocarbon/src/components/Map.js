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

    data2 =
    [
      { country: "cn", value: 0 }, // china
      { country: "in", value: 0 }, // india
      { country: "us", value: 0 },  // united states
      { country: "ru", value: 0 },  // russia
      { country: "jp", value: 0 },  // Japan
      { country: "de", value: 0 },  // Germany
      { country: "ir", value: 0 },  // Iran
      { country: "kr", value: 0 },  // South Korea
      { country: "sa", value: 0 },  // Saudi Arabia
      { country: "id", value: 0 },  // indonesia
      { country: "ca", value: 0 },  // Canada
      { country: "mx", value: 0 },  // Mexico
      { country: "za", value: 0 },  // South Africa
      { country: "br", value: 0 },  // Brazil
      { country: "au", value: 0 },  // Alstralia
      { country: "gb", value: 0 },  // United Kingdom
      { country: "pl", value: 0 }  // poland
      // { country: "pk", value: 210797836 },  // pakistan
      // { country: "br", value: 210301591 },  // brazil
      // { country: "ng", value: 208679114 },  // nigeria
      // { country: "bd", value: 161062905 },  // banglades
    ];

    data3 =
    [
      { country: "cn", value: 500 }, // china
      { country: "in", value: 500 }, // india
      { country: "us", value: 500 },  // united states
      { country: "ru", value: 500 },  // russia
      { country: "jp", value: 500 },  // Japan
      { country: "de", value: 500 },  // Germany
      { country: "ir", value: 500 },  // Iran
      { country: "kr", value: 500 },  // South Korea
      { country: "sa", value: 500 },  // Saudi Arabia
      { country: "id", value: 500 },  // indonesia
      { country: "ca", value: 500 },  // Canada
      { country: "mx", value: 500 },  // Mexico
      { country: "za", value: 500 },  // South Africa
      { country: "br", value: 500 },  // Brazil
      { country: "tr", value: 500 },  // Turkey
      { country: "au", value: 500 },  // Alstralia
      { country: "gb", value: 500 },  // United Kingdom
      { country: "pl", value: 500 }  // poland
      // { country: "pk", value: 210797836 },  // pakistan
      // { country: "br", value: 210301591 },  // brazil
      // { country: "ng", value: 208679114 },  // nigeria
      // { country: "bd", value: 161062905 },  // banglades
    ];

    dataMain = [];

  constructor(props) {
    super(props);
    this.state = {
      mapChoice: 1
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
      
  //   });
  // }
  

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
              <button class="button is-medium is-fullwidth is-warning" onClick={() => this.setState({mapChoice: 1})}>Map #1</button>
            </div>
            <div class="column">
              <button class="button is-medium is-fullwidth is-warning" onClick={() => this.setState({mapChoice: 2})}>Map #2</button>
            </div>
            <div class="column">
              <button class="button is-medium is-fullwidth is-warning" onClick={() => this.setState({mapChoice: 3})}>Map #3</button>
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-three-quarters">
            {this.state.mapChoice == 1 && <WorldMap color="red" title="The Percentage of Each Country's Carbon Emissions in the World (> 1%)" valueSuffix="%" size="xxl" data={this.data} />}
            {this.state.mapChoice == 2 && <WorldMap color="red" title="The Percentage of Each Country's Carbon Emissions in the World (> 1%)" valueSuffix="%" size="xxl" data={this.data2} />}
            {this.state.mapChoice == 3 && <WorldMap color="red" title="The Percentage of Each Country's Carbon Emissions in the World (> 1%)" valueSuffix="%" size="xxl" data={this.data3} />}
            </div>
          </div>
      
        </div>
      );
    }
} 

export default Map;