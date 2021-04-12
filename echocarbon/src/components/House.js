import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Slider from 'react-rangeslider';

class House extends React.Component {


  constructor(props){
    super(props);
    this.state={

    }
}

  

  componentDidMount() {
    this.setState({
      water: 50,
      gas: 25,
      electricity: 1,
      waterScore: 50 / 2500,
      gasScore: 25 / 5800,
      electricityScore: 1 / 890,
      solar: false
    });
  }

  handleChange(event) {
    console.log(this.state.solar);
    this.setState({solar: !event.target.solar});
  }

  Toggle() {
    console.log("solar" + this.state.solar);
    this.setState((currentState) => ({
      solar: !currentState.solar, 
      electricity: 1
    }));
  }


  

  render() {
      return (
        <div className="">
          <div class="box is-static">
          <h1 class="title is-1">House Carbon Footprint Calculator</h1>
          </div>

          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Do you use energy from the grid (not solar)?</h2>
              <label class="checkbox">
                <input
                type="checkbox"
                value={this.state.solar}
                onChange={() => this.Toggle()}/>
              </label>
              
            </div>
          </div>


          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Water: {this.state.water} gallons per month</h2>
              <Slider
                    min={1}
                    max={5000}
                    step={1}
                    value={this.state.water}
                    onChange={(newVal) => {
                      console.log('Sliding...' + this.state.water);
                      this.setState({
                        water: newVal,
                        waterScore: newVal / 2500
                      });
                      }
                    }
                  />
            </div>
          </div>
    
          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Natural Gas: {this.state.gas} cubic ft per month</h2>
              <Slider
                    min={1}
                    max={10000}
                    step={1}
                    value={this.state.gas}
                    onChange={(newVal) => {
                      console.log('Sliding..');
                      this.setState({
                        gas: newVal,
                        gasScore: newVal / 5800
                      });
                      }
                    }
                  />
            </div>
          </div>

          {(this.state.solar)?(<div class="columns is-centered">
            <div class="column is-half">
              <h2>Electricity: {this.state.electricity} kWh per month</h2>
              <Slider
                    min={1}
                    max={2000}
                    step={1}
                    value={this.state.electricity}
                    onChange={(newVal) => {
                      console.log('Sliding..');
                      this.setState({
                        electricity: newVal,
                        electricityScore: newVal / 890
                      });
                      }
                    }
                  />
            </div>
          </div>):(<div/>)}

          
          


          <div class="columns is-centered">
            <div class="column is-half">
            <h1 class="title is-3">Household Score: {((100 - (this.state.waterScore + this.state.gasScore + this.state.electricityScore)/3*100)).toFixed(2)}% Eco Friendly</h1>
            <h2 class="title is-3">Water Score: {(100 - (this.state.waterScore * 100)).toFixed(2)}% Eco Friendly</h2>
            <h2 class="title is-3">Gas Score: {(100 - (this.state.gasScore * 100)).toFixed(2)}% Eco Friendly</h2>
            {(this.state.solar)?(<h2 class="title is-3">Electricity Score: {(100 - (this.state.electricityScore * 100)).toFixed(2)}%</h2>):(<div/>)}
            
            </div>
          </div>

        </div>
      );
    }
} 


export default House;