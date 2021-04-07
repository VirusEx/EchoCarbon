import React, { Component } from 'react'
import { WorldMap } from "react-svg-worldmap"
import { Link } from 'react-router-dom';

class Map extends React.Component {
  data =
    [
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
      { country: "us", value: 331883986 },  // united states
      { country: "id", value: 264935824 },  // indonesia
      { country: "pk", value: 210797836 },  // pakistan
      { country: "br", value: 210301591 },  // brazil
      { country: "ng", value: 208679114 },  // nigeria
      { country: "bd", value: 161062905 },  // bangladesh
      { country: "ru", value: 141944641 },  // russia
      { country: "mx", value: 127318112 }   // mexico
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
          <WorldMap color="green" title="Top 10 Populous Countries" value-suffix="people" size="xxl" data={this.data} />
        </div>
      );
    }
} 

export default Map;