import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Auth from '@aws-amplify/auth'

class Volunteer extends React.Component {
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
    localStorage.setItem("tM", this.state.ticketMessage);
    localStorage.setItem("tMTime", Date());
    event.preventDefault();
      
  }

  clearTicketMessage(event) {
    // localStorage.clear();
    localStorage.setItem("tM", "");
    localStorage.setItem("tMTime", "");
    // localStorage.clear();
  }

  refreshPage() {
    window.location.reload();
    console.log(localStorage.getItem("event1"));
  }

  addEvent1() {
    localStorage.setItem("event1", "true");
    window.location.reload();
  }

  removeEvent1() {
    localStorage.setItem("event1", "false");
    window.location.reload();
  }

  addEvent2() {
    localStorage.setItem("event2", "true");
    window.location.reload();
  }

  removeEvent2() {
    localStorage.setItem("event2", "false");
    window.location.reload();
  }

  addEvent3() {
    localStorage.setItem("event3", "true");
    window.location.reload();
  }

  removeEvent3() {
    localStorage.setItem("event3", "false");
    window.location.reload();
  }

  addEvent4() {
    localStorage.setItem("event4", "true");
    window.location.reload();
  }

  removeEvent4() {
    localStorage.setItem("event4", "false");
    window.location.reload();
  }


  render() {

      return (
        <div>
        <div class="box">
          <h1 class="title is-1">Volunteering</h1>
        </div>
        <div>
          <br></br>
          <div class="columns">
            <div class="column">
              <div class="box">
                <div class="box">
                  Content
                </div>
                <button class="button" onClick={this.addEvent1}>Join Event #1</button>
              </div>
              {
                localStorage.getItem("event1") == "true" ?
                <div class="box">
                  <div>
                    test
                  </div>
                  <button class="button is-danger" onClick={this.removeEvent1}>Leave Event #1</button>
                  <br></br>
                  Current attendees:
                  <br></br>
                  {Auth.user.username}
                </div> : ""
              }
            </div>
            <div class="column">
              <div class="box">
                <div class="box">
                  Content
                </div>
                <button class="button" onClick={this.addEvent2}>Join Event #2</button>
              </div>
              {
                localStorage.getItem("event2") == "true" ?
                <div class="box">
                  <div>
                    test
                  </div>
                  <button class="button is-danger" onClick={this.removeEvent2}>Leave Event #2</button>
                  <br></br>
                  Current attendees:
                  <br></br>
                  {Auth.user.username}
                </div> : ""
              }
            </div>
            <div class="column">
              <div class="box">
                <div class="box">
                  Content
                </div>
                <button class="button" onClick={this.addEvent3}>Join Event #3</button>
              </div>
              {
                localStorage.getItem("event3") == "true" ?
                <div class="box">
                  <div>
                    test
                  </div>
                  <button class="button is-danger" onClick={this.removeEvent3}>Leave Event #3</button>
                  <br></br>
                  Current attendees:
                  <br></br>
                  {Auth.user.username}
                </div> : ""
              }
            </div>
            <div class="column">
              <div class="box">
                <div class="box">
                  Content
                </div>
                <button class="button" onClick={this.addEvent4}>Join Event #4</button>
              </div>
              {
                localStorage.getItem("event4") == "true" ?
                <div class="box">
                  <div>
                    test
                  </div>
                  <button class="button is-danger" onClick={this.removeEvent4}>Leave Event #4</button>
                  <br></br>
                  Current attendees:
                  <br></br>
                  {Auth.user.username}
                </div> : ""
              }
            </div>
          </div>
          
        </div>
    </div>
      );
    }
} 

export default Volunteer;