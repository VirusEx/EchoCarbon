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
      { country: "au", value: 1 },  // Australia
      { country: "gb", value: 1 },  // United Kingdom
      { country: "pl", value: 1 }  // poland
      // { country: "pk", value: 210797836 },  // pakistan
      // { country: "br", value: 210301591 },  // brazil
      // { country: "ng", value: 208679114 },  // nigeria
      // { country: "bd", value: 161062905 },  // banglades
    ];

    data2 =
    [
      { country: "cn", value: 50.5 }, // china
      { country: "in", value: 11.3 }, // india
      { country: "us", value: 8.5 },  // united states
      { country: "de", value: 3.0 },  // germany
      { country: "ru", value: 2.7 },  // russia
      { country: "jp", value: 2.5 },  // Japan
      { country: "za", value: 2.4 },  // south africa
      { country: "kr", value: 1.8 },  // south korea
      { country: "pl", value: 1.7 },  // poland
      { country: "au", value: 1.5 },  // Australia
      { country: "tr", value: 1.4 },  // turkey
      { country: "id", value: 1.2 },  // indonesia
      { country: "kz", value: 1.0 },  // Kazakhstan
      { country: "tw", value: 0.8 },  // Taiwan
      { country: "ua", value: 0.7 },  // Ukraine
      { country: "vn", value: 0.7 },  // Vietnam
      { country: "cz", value: 1 }  // Czechia
    ];

    data3 =
    [
      { country: "dk", value: 82.5 }, // denmark
      { country: "lu", value: 82.3 }, // Luxembourg
      { country: "ch", value: 81.5 },  // Switzerland
      { country: "gb", value: 81.3 },  // United Kingdom
      { country: "fr", value: 80 },  // France
      { country: "at", value: 79.6 },  // Austria
      { country: "fi", value: 78.9 },  // Finland
      { country: "se", value: 78.7 },  // Sweden
      { country: "no", value: 77.7 },  // Norway
      { country: "de", value: 77.2 },  // Germany
      { country: "nl", value: 75.3 },  // Netherlands
      { country: "jp", value: 75.1 },  // Japan
      { country: "au", value: 74.9 },  // Australia
      { country: "es", value: 74.3 },  // Spain
      { country: "be", value: 73.3 },  // Belgium
      { country: "ie", value: 72.8 },  // Ireland
      { country: "is", value: 72.3 },  // Iceland
      { country: "si", value: 72 },  // Slovenia
      { country: "nz", value: 71.3 },  // New Zealand
      { country: "ca", value: 71 }  // Canada
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
            <h1 class="title is-1">Worldwide Map View</h1>
          </div>
          <div class="buttons has-addons">
            <div class="column">
              <button class="button is-medium is-fullwidth is-warning" onClick={() => this.setState({mapChoice: 1})}>Map #1 (Carbon Emissions)</button>
            </div>
            <div class="column">
              <button class="button is-medium is-fullwidth is-warning" onClick={() => this.setState({mapChoice: 2})}>Map #2 (Coal Consumption)</button>
            </div>
            <div class="column">
              <button class="button is-medium is-fullwidth is-warning" onClick={() => this.setState({mapChoice: 3})}>Map #3 (Top Countries)</button>
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-three-quarters">
              {
                this.state.mapChoice === 1 &&
                <div>
                  <span class="tag is-large is-white">Percentage of Each Country's Carbon Emissions in the World ({'>'} 1%)</span>
                  <WorldMap color="red" title="" valueSuffix="%" size="xxl" data={this.data} />
                </div>
              }

              {
                this.state.mapChoice === 2 &&
                <div>
                  <span class="tag is-large is-white">Worldwide Percentage of Coal Consumption ({'>'} 0.5%)</span>
                  <WorldMap color="black" title="" valueSuffix="%" size="xxl" data={this.data2} />
                </div>
              }

              {
                this.state.mapChoice === 3 &&
                <div>
                  <span class="tag is-large is-white">Top 20 Environmental Performance Index Countries as of 2020</span>
                  <WorldMap color="green" title="" valueSuffix="%" size="xxl" data={this.data3} />
                </div>
              }
            </div>
          </div>
      
        </div>
      );
    }
} 

export default Map;