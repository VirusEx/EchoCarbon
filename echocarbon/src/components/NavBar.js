import React, { Component } from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

class NavBar extends React.Component {
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
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            <div class="title is-1 has-text-black">EchoCarbon</div>
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>
            {/* <a class="navbar-item">
              Calculators
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <a class="navbar-item">
              About
            </a> */}
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="box has-background-success">
                    <header class="title is-7 has-text-green ">
                      Authenticated.
                    </header>
              </div>
            </div>
            <div class="navbar-item">
              <div class="buttons">
                <AmplifySignOut />
              </div>
            </div>
          </div>
        </div>
      </nav>
      );
    }
} 

export default NavBar;