import React, { Component } from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom';

class Nav extends React.Component {
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
        <nav>
            <h3>LOGO</h3>
            <ul className="nav-links">
                <Link to='/home'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/calculator'>
                    <li>Calculator</li>
                </Link>
                
            </ul>
        </nav>
      );
    }
} 

export default Nav;