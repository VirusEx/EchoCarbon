import './App.css';
import "bulma/css/bulma.css"
import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'DIESEL'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('YOUR VEHICLE TYPE: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your type of vehicle:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="DIESEL">DIESEL</option>
            <option value="PETROL">PETROL</option>
            <option value="ELETRIC">ELETRIC</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <p class = "is-size-1">EchoCarbon</p>
        <div class="container is-widescreen">
          <div class="notification is-success">
            Carbon Footprint Calculator
            <progress class="progress" value="60" max="100">60%</progress>
              <article class="message is-success">
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
                
              </article>
              <DropDown />
              <input class="input is-success" type="text" placeholder="Type here!"></input>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
