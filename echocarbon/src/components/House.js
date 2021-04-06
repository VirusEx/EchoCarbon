import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Slider from 'react-rangeslider';

class House extends React.Component {


  constructor(props) {
    super();
    this.state = {
      speed: 4
    };
  }

  componentDidMount() {
    this.setState({
      speed: 3
    });
  }

  render() {
      return (
        <div className="">
          <div class="box is-static">
            House Carbon Footprint Calculator
          </div>
          <h2>{this.state.speed}</h2>

        <Slider
          min={1}
          max={100}
          step={1}
          value={this.state.speed}
          onChange={(newVal) => {
            console.log('Sliding..');
            this.setState({
              speed: newVal
            });
            }
          }
        />
        </div>
      );
    }
} 


export default House;