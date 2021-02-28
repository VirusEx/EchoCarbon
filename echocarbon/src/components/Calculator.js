import React, { Component } from 'react'

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleType: 'DIESEL',
      weeklyMiles: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({vehicleType: event.target.vehicleType});
  }

  handleSubmit(event) {
    alert('YOUR VEHICLE TYPE: ' + this.state.vehicleType);
    event.preventDefault();
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your type of vehicle:
            <select vehicleType={this.state.vehicleType} onChange={this.handleChange}>
              <option vehicleType="DIESEL">DIESEL</option>
              <option vehicleType="PETROL">PETROL</option>
              <option vehicleType="ELETRIC">ELETRIC</option>
            </select>
          </label>
          <br></br>
          <label>
            Miles driven weekly:
            <input type="text" monday={this.state.monday} onChange={this.handleChange} />
          </label>
          <input type="submit" vehicleType="Submit" />
        </form>
      );
    }
}

export default DropDown;