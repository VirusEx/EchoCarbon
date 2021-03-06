import React, { Component } from 'react'
import "bulma/css/bulma.css"

class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      weeklyMiles: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    
  }

  render() {
    return (
      <form>
        <label>
          {/* Is going: */}
          {/* <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /> */}
        </label>
        <div class="columns is-centered">
          <div class="box is-light label ">Weekly miles:</div>
          <br></br>
        </div>
        <div class = "columns is-centered">
        <input class="column is-half has-text-centered" type="text" placeholder="Text input"
          name="weeklyMiles"
          type="number"
          value={this.state.weeklyMiles}
          onChange={this.handleInputChange} />
          </div>
        {this.state.weeklyMiles <= 150 ?
        <div class="notification is-info">Congrats! You don't drive that many miles per week. <br></br> You do not put a lot of pollution into the air.</div> : <div class="notification is-info">Sorry, you are driving too many miles per week. <br></br> You put a lot of pollution into the air.</div>}
      </form>
    );
  }
} 

export default DataForm;