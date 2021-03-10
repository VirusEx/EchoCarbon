import './App.css';
import "bulma/css/bulma.css"
import Login from './components/Login'
import Calculator from './components/Calculator'
import DataForm from './components/DataForm'
import Emailer from './components/Emailer'
import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

export default withAuthenticator(App);

function App() {
  return (
    <div className="App">
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

      <header className="App-header">
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
              
                {/* <Emailer /> */}
              </div>
          </div>
        </div>


      </header>
    </div>
  );
}