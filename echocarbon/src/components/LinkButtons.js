import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LinkButtons extends React.Component {
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
         <div class="buttons has-addons">
            <div class="column">
              <Link to='/calculator'><button class="button is-medium is-fullwidth is-success is-outlined">Carbon Footprint Calculator</button></Link>
            </div>
            <div class="column">
              <Link to='/house'><button class="button is-medium is-fullwidth is-success is-outlined">House Carbon Footprint Calculator</button></Link>
            </div>
            <div class="column">
              <Link to='/map'><button class="button is-medium is-fullwidth is-success is-outlined">Worldwide Map View</button></Link>
            </div>
            <div class="column">
              <Link to='/chatbot'><button class="button is-medium is-fullwidth is-success is-outlined">Chatbot</button></Link>
            </div>
            <div class="column">
              <Link to='/meme'><button class="button is-medium is-fullwidth is-success is-outlined">Environmental Meme Generator</button></Link>
            </div>
            <div class="column">
              <Link to='/questions'><button class="button is-medium is-fullwidth is-success is-outlined">Customer Ticket Creator</button></Link>
            </div>
            <div class="column">
              <Link to='/quiz'><button class="button is-medium is-fullwidth is-success is-outlined">Quiz</button></Link>
            </div>
            <div class="column">
              <Link to='/volunteer'><button class="button is-medium is-fullwidth is-success is-outlined">Volunteer</button></Link>
            </div>
            <div class="column">
              <Link to='/timer'><button class="button is-medium is-fullwidth is-success is-outlined">Timer</button></Link>
            </div>
            <div class="column">
              <Link to='/alarm'><button class="button is-medium is-fullwidth is-success is-outlined">Shower Timer</button></Link>
            </div>
            <div class="column">
              <Link to='/weather'><button class="button is-medium is-fullwidth is-success is-outlined">Weather</button></Link>
            </div>
          </div>

      );
    }
} 

export default LinkButtons;