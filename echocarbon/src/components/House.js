import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class House extends React.Component {
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
          <div class="box is-static">
            House Carbon Footprint Calculator
          </div>
        </div>
      );
    }
} 

export default House;