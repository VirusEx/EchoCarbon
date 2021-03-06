import React, { Component } from 'react'

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
        <br />
        <label>
          Weekly miles:
          <br></br>
          <input
            name="weeklyMiles"
            type="number"
            value={this.state.weeklyMiles}
            onChange={this.handleInputChange} />
        </label>
        {this.state.weeklyMiles <= 150 ? <h2>Congrats! You don't drive that many miles per week.</h2> : <h2>Sorry, you are driving too many miles per week. <br></br> Try to reduce this amount if possible.</h2>}

      </form>
    );
  }
} 

export default DataForm;