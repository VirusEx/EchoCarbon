import React, { Component } from 'react'
import "bulma/css/bulma.css"

class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mpg: 10,
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
            <div class="box is-light label">WEEKLY MILES:</div>
            <br></br>
          </div>
          <div class="columns is-centered">
            <input
              type="number"
              class="column is-half has-text-centered"
              placeholder="Weekly Miles"
              name="weeklyMiles"
              min="0"
              value={this.state.weeklyMiles}
              onChange={this.handleInputChange} />
          </div>

          <br></br>
        
          <div class="columns is-centered">
            <div class="box is-light label">CAR MPG:</div>
            <br></br>
          </div>
          <div class = "columns is-centered">
            <input class="column is-half has-text-centered"
              type="number"
              placeholder="Car MPG"
              name="mpg"
              min="1"
              value={this.state.mpg}
              onChange={this.handleInputChange} />
          </div>
          <div>
            {
            ((this.state.weeklyMiles/this.state.mpg) * 19.60) <= 200 ?
              <div class="notification is-info"> Congrats! You pollute less than the average driver, nice. <br></br>Pounds of CO2 released per week: <p class="is-family-code">{((this.state.weeklyMiles/this.state.mpg) * 19.60).toFixed(2)}</p></div> :
              <div class="notification is-info"> Sorry. You pollute more than the average driver, nice. <br></br>Pounds of CO2 released per week: <p class="is-family-code">{((this.state.weeklyMiles/this.state.mpg) * 19.60).toFixed(2)}</p></div> }
          </div>
        </div>
      </div>
    );
  }
} 

export default DataForm;