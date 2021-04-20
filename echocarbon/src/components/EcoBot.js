import React, { Component } from 'react'
import { AmplifyChatbot } from '@aws-amplify/ui-react';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';

class EcoBot extends React.Component {
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
        <AmplifyChatbot
            botName="BookTrip_echo"
            botTitle="EchoBot"
            welcomeMessage="Hello, how can I help you?"
        />
      );
    }
} 

export default EcoBot;