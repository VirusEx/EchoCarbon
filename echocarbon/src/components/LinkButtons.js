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
        <div className="">
          
          {/* <div class="columns"> */}
            <div class="column">
              <Link to='/calculator'><button class="button is-large is-fullwidth is-success">Carbon Footprint Calculator</button></Link>
            </div>
            <div class="column">
              <Link to='/house'><button class="button is-large is-fullwidth is-success">House Carbon Footprint Calculator</button></Link>
            </div>
            <div class="column">
              <Link to='/map'><button class="button is-large is-fullwidth is-success">Environmentally Friendly Countries Map</button></Link>
            </div>
            <div class="column">
            <Link to='/chatbot'><button class="button is-large is-fullwidth is-success">Chatbot</button></Link>
            </div>
            <div class="column">
            <Link to='/meme'><button class="button is-large is-fullwidth is-success">Meme Generator</button></Link>
            </div>
            <div class="column">
            <Link to='/questions'><button class="button is-large is-fullwidth is-success">Ask Questions</button></Link>
            </div>
          </div>
        // </div>
      );
    }
} 

export default LinkButtons;