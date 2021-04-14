import React, { Component } from 'react'
import Slider from 'react-rangeslider';

class House extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.setState({
      water: 50,
      gas: 25,
      electricity: 0,
      waterScore: 100 - 50 / 2500 * 100,
      gasScore: 100 - 25 / 5800 * 100,
      electricityScore: 100 - 1 / 890 * 100,
      avgScore: 100 - (50 / 2500 + 1 / 890 + 1 / 890) / 3 * 100,
      solar: true //CHANGE TO FALSE WHEN USING CHECKBOX
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
      electricity: 0
    }));
    this.updateScores();
  }

  updateScores() {
    this.setState((currentState) => ({
      waterScore: 100 - currentState.water / 2500 * 100,
      gasScore: 100 - currentState.gas / 5800 * 100,
      electricityScore: 100 - currentState.electricity / 890 * 100,
      avgScore: (currentState.waterScore + currentState.gasScore + currentState.electricityScore) / 3
    }));
  }

  render() {
      return (
        <div className="">
          <div class="box is-static">
          <h1 class="title is-1">House Carbon Footprint Calculator</h1>
          </div>

          {/* <div class="columns is-centered">
            <div class="column is-half">
              <h2>Do you use energy from the grid (not solar)?</h2>
              <label class="checkbox">
                <input
                type="checkbox"
                value={this.state.solar}
                onChange={(newVal) => {
                      console.log('Sliding...' + this.state.water);
                      this.setState((currentState) => ({
                        solar: !currentState.solar, 
                        electricity: 0
                      }));
                      this.updateScores();
                      }
                    }/>
              </label>
              
            </div>
          </div> */}

          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Water: {this.state.water} gallons per month</h2>
              <Slider
                    min={0}
                    max={5000}
                    step={1}
                    value={this.state.water}
                    onChange={(newVal) => {
                      console.log('Sliding...' + this.state.water);
                      this.setState({
                        water: newVal
                      });
                      this.updateScores()
                      }
                    }
                  />
            </div>
          </div>
    
          <div class="columns is-centered">
            <div class="column is-half">
              <h2>Natural Gas: {this.state.gas} cubic ft per month</h2>
              <Slider
                    min={0}
                    max={10000}
                    step={1}
                    value={this.state.gas}
                    onChange={(newVal) => {
                      console.log('Sliding..');
                      this.setState({
                        gas: newVal
                      });
                      this.updateScores()
                      }
                    }
                  />
            </div>
          </div>

          {(this.state.solar)?(<div class="columns is-centered">
            <div class="column is-half">
              <h2>Electricity: {this.state.electricity} kWh per month</h2>
              <Slider
                    min={0}
                    max={2000}
                    step={1}
                    value={this.state.electricity}
                    onChange={(newVal) => {
                      console.log('Sliding..');
                      this.setState({
                        electricity: newVal
                      });
                      this.updateScores()
                      }
                    }
                  />
            </div>
          </div>):(<div/>)}


          <div class="columns is-centered">
            <div class="column is-half">
              
            { this.state.avgScore <= 100 && this.state.avgScore >= 80 && <h1 class="title is-2">Eco Grade: 🌲 Eco Hero!</h1> }
            { this.state.avgScore < 80 && this.state.avgScore >= 20 && <h1 class="title is-2">Eco Grade: 😃 Eco Aware</h1> }
            { this.state.avgScore < 20 && this.state.avgScore >= -15 && <h1 class="title is-2">Eco Grade: 😮 Average Earthling</h1> }
            { this.state.avgScore < -15 && this.state.avgScore >= -30 && <h1 class="title is-2">Eco Grade: 🥵 Watch Out</h1> }
            { this.state.avgScore < -30  &&  <h1 class="title is-2">Eco Grade: 💀 Help Earth! You can become Earth's Hero</h1> }

            { this.state.waterScore <= 100 && this.state.waterScore >= 80 && <h1 class="title is-4">Water: 🌲</h1> }
            { this.state.waterScore < 80 && this.state.waterScore >= 20  && <h2 class="title is-4">Water: 😃</h2> }
            { this.state.waterScore < 20 && this.state.waterScore >= -15 && <h2 class="title is-4">Water: 😮</h2> }
            { this.state.waterScore < -15  && this.state.waterScore >= -30 && <h2 class="title is-4">Water: 🥵</h2> }
            { this.state.waterScore < -30  &&  <h1 class="title is-4">Water: 💀</h1> }
            
            { this.state.gasScore <= 100 && this.state.gasScore >= 80 && <h1 class="title is-4">Gas: 🌲</h1> }
            { this.state.gasScore < 80 && this.state.gasScore >= 20  && <h2 class="title is-4">Gas: 😃</h2> }
            { this.state.gasScore < 20 && this.state.gasScore >= -15 && <h2 class="title is-4">Gas: 😮</h2> }
            { this.state.gasScore < -15  && this.state.gasScore >= -30 && <h2 class="title is-4">Gas: 🥵</h2> }
            { this.state.gasScore < -30  &&  <h1 class="title is-4">Gas: 💀</h1> }

            { this.state.electricityScore <= 100 && this.state.electricityScore >= 80 && <h1 class="title is-4">Electricity: 🌲</h1> }
            { this.state.electricityScore < 80 && this.state.electricityScore >= 20  && <h2 class="title is-4">Electricity: 😃</h2> }
            { this.state.electricityScore < 20 && this.state.electricityScore >= -15 && <h2 class="title is-4">Electricity: 😮</h2> }
            { this.state.electricityScore < -15  && this.state.electricityScore >= -30 && <h2 class="title is-4">Electricity: 🥵</h2> }
            { this.state.electricityScore < -30  &&  <h1 class="title is-4">Electricity: 💀</h1> }


            {/* {(this.state.solar)?(<h2 class="title is-3">Electricity Score: {(this.state.electricityScore * 1).toFixed(2)}%</h2>):(<div/>)} */}
            
            </div>
          </div>

        </div>
      );
    }
} 
//🌲😃😮🥵💀

export default House;