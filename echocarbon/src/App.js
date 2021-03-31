import './App.css';
import "bulma/css/bulma.css"
import Calculator from './components/Calculator'
import NavBar from './components/NavBar'
import React from 'react';
import LinkButtons from './components/LinkButtons'
import House from './components/House'
import Map from './components/Map'
import Meme from './components/Meme'
import Questions from './components/Questions'
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify, { Interactions } from 'aws-amplify';
import awsconfig from './aws-exports';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EcoBot from './components/EcoBot';

Amplify.configure(awsconfig);

export default withAuthenticator(App);

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="App" id="body">
        
        {/* <div style={ margin: 0; padding: 0; height: 100%; width: 100%; background-color: green;  }> */}
        <div>
          <LinkButtons/>
          <Switch>
            <Route path="/calculator" component={Calculator}/>
            <Route path="/chatbot" component={EcoBot}/>
            <Route path="/house" component={House}/>
            <Route path="/map" component={Map}/>
            <Route path="/meme" component={Meme}/>
            <Route path="/questions" component={Questions}/>
          </Switch>
          {/* <Calculator/> */}
        
        </div>
      </div>
    </Router>
  );
}