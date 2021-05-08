import React, { Component } from 'react'
import DataForm from './DataForm'
import EcoBot from './EcoBot'


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({vehicleType: event.target.vehicleType});
  }

  handleSubmit(event) {
    //alert('YOUR VEHICLE TYPE: ' + this.state.vehicleType);
    event.preventDefault();
  }

  render() {
      return (
        <header className="">
        <div class="container is-widescreen">
          <div class="notification is-success">
            <div class="title is-1">
              {localStorage.getItem('lang') === null && "Carbon Footprint Calculator"}
              {localStorage.getItem('lang') === 'en' && "Carbon Footprint Calculator"}
              {localStorage.getItem('lang') === 'chi' && "碳足迹计算器"}
              {localStorage.getItem('lang') === 'spa' && "Calculadora de Huella de Carbono"}
            </div>
              <article class="message is-success">
                <div class="message-body">
                  
                  {localStorage.getItem('lang') === null && "Hello! Welcome to our carbon footprint calculator. Please enter the following information about your driving habits."}
                  {localStorage.getItem('lang') === 'en' && "Hello! Welcome to our carbon footprint calculator. Please enter the following information about your driving habits."}
                  {localStorage.getItem('lang') === 'chi' && "你好！欢迎使用我们的碳足迹计算器。请输入以下有关您的驾驶习惯的信息"}
                  {localStorage.getItem('lang') === 'spa' && "¡Hola! Bienvenido a nuestra calculadora de huella de carbono. Introduzca la siguiente información sobre sus hábitos de conducción."}
                </div>
              </article>
              {/* <Login />
              <Calculator /> */}
              <div>
                <DataForm /> 
                {/* <EcoBot/> */}
                
              
                {/* <Emailer /> */}
              </div>
          </div>
        </div>
        


      </header>
      );
    }
} 

export default Calculator;