import React, { Component } from 'react'
import "bulma/css/bulma.css"
import emailjs from "emailjs-com"
import Emailer from './Emailer'



// function sendEmail(e){
//         e.preventDefault();

//         emailjs.sendForm('service_2wmow6p', 'template_9xqgkef', e.target, 'user_JHjDXIrrcTdmB9Wa4RcC4')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//         e.target.reset()
//     }

var data


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
        {this.state.metricChoice ? <button class="button has-background-danger" onClick={ () => this.ToggleButton() }>METRIC</button> : <button class="button has-background-danger" onClick={ () => this.ToggleButton() }>IMPERIAL</button>}
                
        <br></br>Sorry, you are driving too many miles per week. 
        <br></br> You put a lot of pollution into the air.
        {this.state.metricChoice ? 
        <div>
            <br></br>Kilograms of CO2 released per week:
            <br></br>
            {numGasMetric.toFixed(2) }
            {localStorage.setItem("carbonNumber",  numGasMetric.toFixed(2) + " kg")}
        </div> :
        <div>
            <br></br>Pounds of CO2 released per week:
            <br></br>
            {numGasImperial.toFixed(2) }
            {localStorage.setItem("carbonNumber", numGasImperial.toFixed(2) + " lbs")}
        </div>}
        {/* <Emailer carb={this.state.numGasImperial}/> */}
        <Emailer />
        </div>
      );

    }
    else if(numGasImperial <= 200 && numGasImperial >= 150) {
      return (
        <div class="notification is-info"> 
        
        {this.state.metricChoice ? <button class="button has-background-danger" onClick={ () => this.ToggleButton() }>METRIC</button> : <button class="button has-background-danger" onClick={ () => this.ToggleButton() }>IMPERIAL</button>}

        <br></br>You don't drive that many miles per week. 
        <br></br> You do not put a lot of pollution into the air. 
        {this.state.metricChoice ? 
        <div>
            <br></br>Kilograms of CO2 released per week:
            <br></br>
            {numGasMetric.toFixed(2) }
            {localStorage.setItem("carbonNumber",  numGasMetric.toFixed(2) + " kg")}
        </div> :
        <div>
            <br></br>Pounds of CO2 released per week:
            <br></br>
            {numGasImperial.toFixed(2) }
            {localStorage.setItem("carbonNumber", numGasImperial.toFixed(2) + " lbs")}
        </div>}
        {/* <Emailer carb={this.state.numGasImperial}/> */}
        <Emailer />
        </div>
      );

    }
    else
    {
      return (
        <div class="notification is-info"> 
        {this.state.metricChoice ? <button class="button has-background-danger" onClick={ () => this.ToggleButton() }>METRIC</button> : <button class="button has-background-danger" onClick={ () => this.ToggleButton() }>IMPERIAL</button>}
                
        <br></br>Congrats! You are Earth's best friend. 
        <br></br> You do not put a lot of pollution into the air. 
        {this.state.metricChoice ? 
        <div>
            <br></br>Kilograms of CO2 released per week:
            <br></br>
            {numGasMetric.toFixed(2) }
            {localStorage.setItem("carbonNumber",  numGasMetric.toFixed(2) + " kg")}
        </div> :
        <div>
            <br></br>Pounds of CO2 released per week:
            <br></br>
            {numGasImperial.toFixed(2) }
            {localStorage.setItem("carbonNumber", numGasImperial.toFixed(2) + " lbs")}
        </div>}
        
        {/* <Emailer carb={this.state.numGasImperial}/> */}
        <Emailer />
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
    localStorage.setItem("carbonNumber", data);

    console.log(localStorage.getItem("carbonNumber"))

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
            <div class="box is-light label has-background-warning">Weekly miles:</div>
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
              onChange={this.handleInputChange}/>
          </div>

          <br></br>
        
          <div class="columns is-centered">
            <div class="box is-light label has-background-warning">Car MPG:</div>
            <br></br>
          </div>
          <div class = "columns is-centered">
            <input class="column is-half has-text-centered" type="text" placeholder="Text input"
              name="mpg"
              type="number"
              min="1"
              value={this.state.mpg}
              onChange={this.handleInputChange}/>
          </div>
          <div>
            
            {/* {((this.state.weeklyMiles/this.state.mpg) * 19.60) <= 200 ?
              <div class="notification is-info"> Congrats! You don't drive that many miles per week. <br></br> You do not put a lot of pollution into the air. <br></br>Pounds of CO2 released per week: {((this.state.weeklyMiles/this.state.mpg) * 19.60).toFixed(2)}</div> :
              <div class="notification is-info"> Sorry, you are driving too many miles per week. <br></br> You put a lot of pollution into the air. <br></br>Pounds of CO2 released per week: {((this.state.weeklyMiles/this.state.mpg) * 19.60).toFixed(2)}</div> } */}

            
            <EcoTier metricCondition={this.state.metricChoice} numMPG={this.state.mpg} numMILES={this.state.weeklyMiles} />
          </div>
        </div>

        {/* <div>
            <form onSubmit={sendEmail}>
                <div class="columns is-centered">
                    <div>
                        <input type = "text" className="form-control column is-half has-text-centered" placeholder="Name" name="name"/>
                        <br></br>
                        <input type = "email" className="form-control column is-half has-text-centered" placeholder="Email Address" name="email"/>
                        <br></br>
                        <input type = "text" className="form-control column is-half has-text-centered" placeholder="Subject" name="subject"/>
                        <br></br>
                        <textarea className="form-control column is-half has-text-centered" id="" cols="30" rows="8" placeholder="Your message" name = "message" defaultValue="
                          My personal goal on my Carbon Emission score is: 
                          Personal Notes: 
                          ...
                        "></textarea>
                        <br></br>
                        <input type = "submit" className="btn btn-info column is-half has-text-centered" value="Send message"/>
                        <br></br>
                    </div>
                </div>
            </form>
        </div> */}


      </div>
    );
  }
} 

export default DataForm;