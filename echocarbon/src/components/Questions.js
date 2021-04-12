import React, { Component } from 'react'
import emailjs from "emailjs-com"
import { Link } from 'react-router-dom';


class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ticketMessage: event.target.value});
    // console.log("Change: " + event.target.value);
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    console.log("Submit: " + this.state.ticketMessage);
    var prevMess = "Sent on: " + Date().toLocaleString() + + '\n' + "Message: " + this.state.ticketMessage;
    localStorage.setItem("tM", prevMess);
    event.preventDefault();

    emailjs.sendForm('service_gy667yu', 'template_py26dfq', event.target, 'user_VZ5P3vcuhc1OYWRMpNR1h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      emailjs.sendForm('service_gy667yu', 'template_py26dfq', event.target, 'user_VZ5P3vcuhc1OYWRMpNR1h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset()
  }

  clearTicketMessage(event) {
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <div class="box">
          <h1 class="title is-1">Customer Ticker Creator</h1>
        </div>
        <div>
          <br></br>
          <form onSubmit={this.handleSubmit}>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input className="form-control has-text-centered input" type="text" name="name" placeholder="Name" />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input className="form-control has-text-centered input" type="email" placeholder="Email Address" defaultValue="" name="email"/>
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                      <textArea className="form-control has-text-centered textarea" id="" cols="30" rows="8" placeholder="Message" name="message" value={this.state.ticketMessage} onChange={this.handleChange} defaultValue=""></textArea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                    <input type = "submit" className="btn btn-info has-text-centered button is-link" value="Submit Ticket"/>
                </div>
              </div>

              <button class="button is-danger" onSubmit={this.clearTicketMessage}>Delete Previous Message</button>
              <br></br>
              Current Message:
              <br></br>
              {
                this.state.ticketMessage
              }
              <br></br>
              Previous Message:
              <br></br>
              {
                localStorage.getItem("tM")
              }
          </form>
        </div>
    </div>
      
    );
  }
}

export default Questions;