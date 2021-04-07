import React, { Component } from 'react'
import emailjs from "emailjs-com"
import { Link } from 'react-router-dom';

class Questions extends React.Component {
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

  sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_gy667yu', 'template_py26dfq', e.target, 'user_VZ5P3vcuhc1OYWRMpNR1h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
}

  render() {
      return (
        <div className="">
          <div class="box">
          <h1 class="title is-1">Ask Questions</h1>
          </div>
          <div>
            <br></br>
        <form onSubmit={this.sendEmail}>

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
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                      <input className="form-control has-text-centered textarea" id="" cols="30" rows="8" placeholder="Goal" name = "message" defaultValue="My carbon emission goal is "></input>
                </div>
            </div>

          



            <br></br>
            <div class="field">
                <div class="control">
                    <input type = "submit" className="btn btn-info has-text-centered button is-link" value="Create goal"/>
                </div>
            </div>


        </form>

    </div>
        </div>
      );
    }
} 

export default Questions;