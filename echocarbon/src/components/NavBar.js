import React, { Component } from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Auth from '@aws-amplify/auth'
import LangSelect from './LangSelect';

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
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <div class="title is-1 has-text-black">EchoCarbon</div>
          </a>
        </div>
        
        <div className="navbar-menu">
          <div className="navbar-start">
            {/* <a className="navbar-item">
              Home
            </a> */}
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

          <div className="navbar-end">
            <div className="navbar-item">
              <div>
                  <LangSelect/>
              </div>
            </div>
            <div className="navbar-item">
              <div>
                  {localStorage.getItem('lang') === null && "Hello, " + Auth.user.username}
                  {localStorage.getItem('lang') === 'en' && "Hello, " + Auth.user.username}
                  {localStorage.getItem('lang') === 'chi' && "你好, " + Auth.user.username}
                  {localStorage.getItem('lang') === 'spa' && "Hola, " + Auth.user.username}
              </div>
            </div>
            
            <div className="navbar-item">
              <div className="box has-background-success">
                    <header className="title is-7 has-text-green ">
                      {localStorage.getItem('lang') === null && "Authenticated"}
                      {localStorage.getItem('lang') === 'en' && "Authenticated"}
                      {localStorage.getItem('lang') === 'chi' && "已认证"}
                      {localStorage.getItem('lang') === 'spa' && "Autenticado"}
                    </header>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons">
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