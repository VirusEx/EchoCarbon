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
import Volunteer from './components/Volunteer'
import Timer from './components/Timer'
import Alarm from './components/Alarm'
import Weather from './components/Weather'
import Quiz from './components/Quiz'
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Auth from '@aws-amplify/auth'
import Amplify, { auth0SignInButton, Interactions } from 'aws-amplify';
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
        {Auth.user.user}
        {/* <div style={ margin: 0; padding: 0; height: 100%; width: 100%; background-color: green;  }> */}
        <div>
        <script src="https://unpkg.com/react-rangeslider/umd/rangeslider.min.js"></script>
          <LinkButtons/>
          <Switch>
            <Route path="/calculator" component={Calculator}/>
            <Route path="/chatbot" component={EcoBot}/>
            <Route path="/house" component={House}/>
            <Route path="/map" component={Map}/>
            <Route path="/meme" component={Meme}/>
            <Route path="/questions" component={Questions}/>
            <Route path="/quiz" component={Quiz}/>
            <Route path="/volunteer" component={Volunteer}/>
            <Route path="/alarm" component={Alarm}/>
            <Route path="/timer" component={Timer}/>
            <Route path="/weather" component={Weather}/>
          </Switch>

          {/* <Calculator/> */}
        
        </div>
      </div>
    </Router>
  );
}