import './App.css';
import "bulma/css/bulma.css"
import Login from './components/Login'
import Calculator from './components/Calculator'
import DataForm from './components/DataForm'
import Emailer from './components/Emailer'
import EcoBot from './components/EcoBot'
import NavBar from './components/NavBar'
import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, { Interactions } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifyChatbot } from '@aws-amplify/ui-react';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

Amplify.configure(awsconfig);

export default withAuthenticator(App);

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <Calculator/>
      </div>
    </Router>
    
  );
}