import React, { Component } from 'react'
import "bulma/css/bulma.css"

class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mpg: 1,
      weeklyMiles: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState
    ({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <div>
          <div class="columns is-centered">
            <div class="box is-light label">Weekly miles:</div>
            <br></br>
          </div>
          <div class="columns is-centered">
            <input
              class="column is-half has-text-centered"
              type="text"
              placeholder="Text input"
              name="weeklyMiles"
              type="number"
              min="0"
              value={this.state.weeklyMiles}
              onChange={this.handleInputChange} />
          </div>

          <br></br>
        
          <div class="columns is-centered">
            <div class="box is-light label">Car MPG:</div>
            <br></br>
          </div>
          <div class = "columns is-centered">
            <input class="column is-half has-text-centered" type="text" placeholder="Text input"
              name="mpg"
              type="number"
              min="1"
              value={this.state.mpg}
              onChange={this.handleInputChange} />
          </div>
          <div>
            {
            ((this.state.weeklyMiles/this.state.mpg) * 19.60) <= 19.60 ?
              <div class="notification is-info"> Congrats! You don't drive that many miles per week. <br></br> You do not put a lot of pollution into the air. <br></br>Pounds of CO2 released per week: {((this.state.weeklyMiles/this.state.mpg) * 19.60).toFixed(2)}</div> :
              <div class="notification is-info"> Sorry, you are driving too many miles per week. <br></br> You put a lot of pollution into the air. <br></br>Pounds of CO2 released per week: {((this.state.weeklyMiles/this.state.mpg) * 19.60).toFixed(2)}</div> }
            
          </div>
        </div>
      </div>
    );
  }
} 

export default DataForm;