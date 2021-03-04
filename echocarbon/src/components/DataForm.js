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
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Weekly miles:
          <input
            name="weeklyMiles"
            type="number"
            value={this.state.weeklyMiles}
            onChange={this.handleInputChange} />
        </label>
        {this.state.weeklyMiles <= 500 ? <h2>good</h2> : <h2>bad</h2>}

      </form>
    );
  }
} 

export default DataForm;