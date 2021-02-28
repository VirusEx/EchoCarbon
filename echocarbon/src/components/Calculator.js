import React, { Component } from 'react'

class DropDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {fuelType: 'DIESEL'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('YOUR VEHICLE TYPE: ' + this.state.fuelType);
      event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your type of vehicle:
              <select value={this.state.fuelType} onChange={this.handleChange}>
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

export default DropDown;