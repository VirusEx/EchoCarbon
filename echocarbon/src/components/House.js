import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Slider from 'react-rangeslider';

class House extends React.Component {


  constructor(props) {
    super();
    this.state = {
      // water: 50,
      // gas: 10,
      // electricity: 10
    };
  }

  componentDidMount() {
    this.setState({
      water: 50,
      gas: 10,
      electricity: 10,
      solar: true
    });
  }

  render() {
      return (
        <div className="">
          <div class="box is-static">
            House Carbon Footprint Calculator
          </div>


          
          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Water: {this.state.water}</h2>
              <Slider
                    min={1}
                    max={100}
                    step={1}
                    value={this.state.water}
                    onChange={(newVal) => {
                      console.log('Sliding..');
                      this.setState({
                        water: newVal
                      });
                      }
                    }
                  />
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Gas: {this.state.gas}</h2>
              <Slider
                    min={1}
                    max={100}
                    step={1}
                    value={this.state.gas}
                    onChange={(newVal) => {
                      console.log('Sliding..');
                      this.setState({
                        gas: newVal
                      });
                      }
                    }
                  />
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Electricity: {this.state.electricity}</h2>
              <Slider
                    min={1}
                    max={100}
                    step={1}
                    value={this.state.electricity}
                    onChange={(newVal) => {
                      console.log('Sliding..');
                      this.setState({
                        electricity: newVal
                      });
                      }
                    }
                  />
            </div>
          </div>


          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Solar:</h2>
              <label class="checkbox">
                <input
                type="checkbox"
                value={this.state.solar}
                onChange={this.handleInputChange}/>
              </label>
              
            </div>
          </div>
          


          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Household Score: {this.state.electricity}</h2>
            </div>
          </div>

        </div>
      );
    }
} 


export default House;