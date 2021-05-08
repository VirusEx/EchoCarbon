import React, { Component } from 'react'
import "bulma/css/bulma.css"
import Emailer from './Emailer'


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
                
        <br></br>
        {localStorage.getItem('lang') === null &&  "Sorry, you are driving too many miles per week. " }
        {localStorage.getItem('lang') === 'en' &&  "Sorry, you are driving too many miles per week. " }
        {localStorage.getItem('lang') === 'chi' && "抱歉，您每周行驶的里程过多。" }
        {localStorage.getItem('lang') === 'spa' && "Lo siento, está conduciendo demasiadas millas por semana." }
        <br></br> 
        {localStorage.getItem('lang') === null &&  "You put a lot of pollution into the air." }
        {localStorage.getItem('lang') === 'en' &&  "You put a lot of pollution into the air." }
        {localStorage.getItem('lang') === 'chi' && "您向空气中排放了很多污染物。" }
        {localStorage.getItem('lang') === 'spa' && "Pones mucha contaminación en el aire." }
        {this.state.metricChoice ? 
        <div>
            <br></br>
            {localStorage.getItem('lang') === null &&  "Kilograms of CO2 released per week:" }
            {localStorage.getItem('lang') === 'en' &&  "Kilograms of CO2 released per week:" }
            {localStorage.getItem('lang') === 'chi' && "每周释放的二氧化碳千克：" }
            {localStorage.getItem('lang') === 'spa' && "Kilogramos de CO2 liberados por semana:" }
            <br></br>
            {numGasMetric.toFixed(2) }
            {localStorage.setItem("carbonNumber",  numGasMetric.toFixed(2) + " kg")}
        </div> :
        <div>
            <br></br>
            {localStorage.getItem('lang') === null &&  "Pounds of CO2 released per week:" }
            {localStorage.getItem('lang') === 'en' &&  "Pounds of CO2 released per week:" }
            {localStorage.getItem('lang') === 'chi' && "每周释放的二氧化碳磅：" }
            {localStorage.getItem('lang') === 'spa' && "Libras de CO2 liberadas por semana:" }
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

        <br></br> 
        {localStorage.getItem('lang') === null &&  "You don't drive that many miles per week." }
        {localStorage.getItem('lang') === 'en' &&  "You don't drive that many miles per week." }
        {localStorage.getItem('lang') === 'chi' && "您每周不会开车那么多英里。" }
        {localStorage.getItem('lang') === 'spa' && "No conduce tantas millas por semana." }
        <br></br> 
        {localStorage.getItem('lang') === null &&  "You do not put a lot of pollution into the air. " }
        {localStorage.getItem('lang') === 'en' &&  "You do not put a lot of pollution into the air. " }
        {localStorage.getItem('lang') === 'chi' && "您不会对空气造成太多污染。" }
        {localStorage.getItem('lang') === 'spa' && "No echas mucha contaminación al aire." }
        {this.state.metricChoice ? 
        <div>
            <br></br>
            {localStorage.getItem('lang') === null &&  "Kilograms of CO2 released per week:" }
            {localStorage.getItem('lang') === 'en' &&  "Kilograms of CO2 released per week:" }
            {localStorage.getItem('lang') === 'chi' && "每周释放的二氧化碳千克：" }
            {localStorage.getItem('lang') === 'spa' && "Kilogramos de CO2 liberados por semana:" }
            <br></br>
            {numGasMetric.toFixed(2) }
            {localStorage.setItem("carbonNumber",  numGasMetric.toFixed(2) + " kg")}
        </div> :
        <div>
            <br></br>
            {localStorage.getItem('lang') === null &&  "Pounds of CO2 released per week:" }
            {localStorage.getItem('lang') === 'en' &&  "Pounds of CO2 released per week:" }
            {localStorage.getItem('lang') === 'chi' && "每周释放的二氧化碳磅：" }
            {localStorage.getItem('lang') === 'spa' && "Libras de CO2 liberadas por semana:" }
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
        {this.state.metricChoice ? 
          <button class="button has-background-danger" onClick={ () => this.ToggleButton() }>
            {localStorage.getItem('lang') === null &&  "METRIC" }
            {localStorage.getItem('lang') === 'en' &&  "METRIC" }
            {localStorage.getItem('lang') === 'chi' && "公制" }
            {localStorage.getItem('lang') === 'spa' && "METRICO" }
          </button> : 
          <button class="button has-background-danger" onClick={ () => this.ToggleButton() }>
            {localStorage.getItem('lang') === null &&  "IMPERIAL" }
            {localStorage.getItem('lang') === 'en' &&  "IMPERIAL" }
            {localStorage.getItem('lang') === 'chi' && "帝王" }
            {localStorage.getItem('lang') === 'spa' && "IMPERIAL" }
          </button>}
                
        <br/><br/>
        {localStorage.getItem('lang') === null &&  "Congrats! You are Earth's best friend." }
        {localStorage.getItem('lang') === 'en' &&  "Congrats! You are Earth's best friend." }
        {localStorage.getItem('lang') === 'chi' && "恭喜！您是地球上最好的朋友。" }
        {localStorage.getItem('lang') === 'spa' && "¡Felicitaciones! Eres el mejor amigo de la Tierra." }
        <br/>
        {localStorage.getItem('lang') === null &&  "You do not put a lot of pollution into the air." }
        {localStorage.getItem('lang') === 'en' &&  "You do not put a lot of pollution into the air." }
        {localStorage.getItem('lang') === 'chi' && "您不会对空气造成太多污染。" }
        {localStorage.getItem('lang') === 'spa' && "No echas mucha contaminación al aire." }
        {this.state.metricChoice ? 
        <div>
            <br></br>              
              {localStorage.getItem('lang') === null &&  "Kilograms of CO2 released per week:" }
              {localStorage.getItem('lang') === 'en' &&  "Kilograms of CO2 released per week:" }
              {localStorage.getItem('lang') === 'chi' && "每周释放的二氧化碳千克：" }
              {localStorage.getItem('lang') === 'spa' && "Kilogramos de CO2 liberados por semana:" }
            <br></br>
            {numGasMetric.toFixed(2) }
            {localStorage.setItem("carbonNumber",  numGasMetric.toFixed(2) + " kg")}
        </div> :
        <div>
            <br></br>              
              {localStorage.getItem('lang') === null &&  "Pounds of CO2 released per week:" }
              {localStorage.getItem('lang') === 'en' &&  "Pounds of CO2 released per week:" }
              {localStorage.getItem('lang') === 'chi' && "每周释放的二氧化碳磅：" }
              {localStorage.getItem('lang') === 'spa' && "Libras de CO2 liberadas por semana:" }
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
            <div class="box is-light label has-background-warning">
              {localStorage.getItem('lang') === null && "Weekly miles:"}
              {localStorage.getItem('lang') === 'en' && "Weekly miles:"}
              {localStorage.getItem('lang') === 'chi' && "每周里程:"}
              {localStorage.getItem('lang') === 'spa' && "Millas semanales:"}
            </div>
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
            <div class="box is-light label has-background-warning">
              {localStorage.getItem('lang') === null && "Car MPG:"}
              {localStorage.getItem('lang') === 'en' && "Car MPG:"}
              {localStorage.getItem('lang') === 'chi' && "车载MPG:"}
              {localStorage.getItem('lang') === 'spa' && "MPG de coche:"}
            </div>
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