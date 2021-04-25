import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Volunteer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapChoice: 0
      
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
            <h1 class="title is-1">Volunteer</h1>
          </div>
          <div>
            Content
          </div>
      
        </div>
      );
    }
} 

export default Volunteer;