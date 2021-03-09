import React, { Component } from 'react'
import "bulma/css/bulma.css"

class EcoTier extends Component {

  constructor(props){
        super(props);
        this.state={
            metricChoice: false,
            textDisplay: false

        }
    }

    ToggleButton() {
      console.log("metricChoice" + this.state.metricChoice);
      this.setState((currentState) => ({
        metricChoice: !currentState.metricChoice, 
      }));
    }

    

  render() {

    var numGasImperial = ((this.props.numMILES / this.props.numMPG) * 19.60);
    var numGasMetric = ((this.props.numMILES / this.props.numMPG) * 8.89);
    
    //console.log("THE NUMBER OF GAS IS:" + numGas);
    if (numGasImperial > 200) {
      return (
        <div class="notification is-info"> 
        {this.state.metricChoice ? <button onClick={ () => this.ToggleButton() }>METRIC</button> : <button onClick={ () => this.ToggleButton() }>IMPERIAL</button>}
                
        <br></br>Sorry, you are driving too many miles per week. 
        <br></br> You put a lot of pollution into the air.

        {this.state.metricChoice ? 
        <div>
            <br></br>Kilograms of CO2 released per week: 
            {numGasMetric.toFixed(2) }
        </div> :
        <div>
            <br></br>Pounds of CO2 released per week: 
            {numGasImperial.toFixed(2) }
        </div>}
        
        </div>
      );

    }
    else if(numGasImperial <= 200 && numGasImperial >= 150) {
      return (
        <div class="notification is-info"> 
        
        {this.state.metricChoice ? <button onClick={ () => this.ToggleButton() }>METRIC</button> : <button onClick={ () => this.ToggleButton() }>IMPERIAL</button>}

        <br></br>You don't drive that many miles per week. 
        <br></br> You do not put a lot of pollution into the air. 
        {this.state.metricChoice ? 
        <div>
            <br></br>Kilograms of CO2 released per week: 
            {numGasMetric.toFixed(2) }
        </div> :
        <div>
            <br></br>Pounds of CO2 released per week: 
            {numGasImperial.toFixed(2) }
        </div>}
        </div>
      );

    }
    else
    {
      return (
        <div class="notification is-info"> 
        {this.state.metricChoice ? <button onClick={ () => this.ToggleButton() }>METRIC</button> : <button onClick={ () => this.ToggleButton() }>IMPERIAL</button>}
                
        <br></br>Congrats! You are Earth's best friend. 
        <br></br> You do not put a lot of pollution into the air. 
        {this.state.metricChoice ? 
        <div>
            <br></br>Kilograms of CO2 released per week: 
            {numGasMetric.toFixed(2) }
        </div> :
        <div>
            <br></br>Pounds of CO2 released per week: 
            {numGasImperial.toFixed(2) }
        </div>}
        </div>
      );
    }
  }
}





class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mpg: 1,
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
  //this.state.weeklyMiles/this.state.mpg) * 19.60) <= 200
  

  render() {
    return (
      <div>
        <div>
          <div class="columns is-centered">
            <div class="box is-light label">Weekly miles:</div>
            <br></br>
          </div>
          <div class="columns is-centered">
            <input
              class="column is-half has-text-centered"
              type="text"
              placeholder="Text input"
              name="weeklyMiles"
              type="number"
              min="0"
              value={this.state.weeklyMiles}
              onChange={this.handleInputChange} />
          </div>

          <br></br>
        
          <div class="columns is-centered">
            <div class="box is-light label">Car MPG:</div>
            <br></br>
          </div>
          <div class = "columns is-centered">
            <input class="column is-half has-text-centered" type="text" placeholder="Text input"
              name="mpg"
              type="number"
              min="1"
              value={this.state.mpg}
              onChange={this.handleInputChange} />
          </div>
          <div>
            
            {/* {((this.state.weeklyMiles/this.state.mpg) * 19.60) <= 200 ?
              <div class="notification is-info"> Congrats! You don't drive that many miles per week. <br></br> You do not put a lot of pollution into the air. <br></br>Pounds of CO2 released per week: {((this.state.weeklyMiles/this.state.mpg) * 19.60).toFixed(2)}</div> :
              <div class="notification is-info"> Sorry, you are driving too many miles per week. <br></br> You put a lot of pollution into the air. <br></br>Pounds of CO2 released per week: {((this.state.weeklyMiles/this.state.mpg) * 19.60).toFixed(2)}</div> } */}
            
            
            <EcoTier metricCondition={this.state.metricChoice} numMPG={this.state.mpg} numMILES={this.state.weeklyMiles} />
          </div>
        </div>
      </div>
    );
  }
} 

export default DataForm;