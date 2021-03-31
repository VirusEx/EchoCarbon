import React, { Component } from 'react'
import DataForm from './DataForm'
import EcoBot from './EcoBot'


class Calculator extends React.Component {
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
        <header className="">
        <div class="container is-widescreen">
          <div class="notification is-success">
            <div class="title is-1">Carbon Footprint Calculator</div>
              <article class="message is-success">
                <div class="message-body">
                  Hello! Welcome to our carbon footprint calculator. Please enter the following information about your driving habits.
                </div>
              </article>
              {/* <Login />
              <Calculator /> */}
              <div>
                <DataForm /> 
                {/* <EcoBot/> */}
                
              
                {/* <Emailer /> */}
              </div>
          </div>
        </div>
        


      </header>
      );
    }
} 

export default Calculator;