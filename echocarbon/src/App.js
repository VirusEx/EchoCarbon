import logo from './logo.svg';
import './App.css';


import React from "react";
import "bulma/css/bulma.css"

function App() {
  return (
    <div className="App">
      <a class="button is-primary">
        Button
      </a>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EchoCarbon
        </p>
      </header>
    </div>
    
  );
}

export default App;
