import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class LinkButtons extends React.Component {
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
         <div class="buttons has-addons">
            <div class="column">
              <Link to='/calculator'>
                <button class="button is-medium is-fullwidth is-success is-outlined">
                  {localStorage.getItem('lang') === null && "Carbon Footprint Calculator"}
                  {localStorage.getItem('lang') === 'en' && "Carbon Footprint Calculator"}
                  {localStorage.getItem('lang') === 'chi' && "碳足迹计算器"}
                  {localStorage.getItem('lang') === 'spa' && "Calculadora de Huella de Carbono"}
                </button>
              </Link>
            </div>
            <div class="column">
              <Link to='/house'>
                <button class="button is-medium is-fullwidth is-success is-outlined">
                  {localStorage.getItem('lang') === null && "House Carbon Footprint Calculator"}
                  {localStorage.getItem('lang') === 'en' && "House Carbon Footprint Calculator"}
                  {localStorage.getItem('lang') === 'chi' && "房屋碳足迹计算器"}
                  {localStorage.getItem('lang') === 'spa' && "Calculadora de Huella de Carbono Casero"}
                </button>
              </Link>
            </div>
            <div class="column">
              <Link to='/map'>
                <button class="button is-medium is-fullwidth is-success is-outlined">
                  {localStorage.getItem('lang') === null && "Worldwide Map View"}
                  {localStorage.getItem('lang') === 'en' && "Worldwide Map View"}
                  {localStorage.getItem('lang') === 'chi' && "全球地图视图"}
                  {localStorage.getItem('lang') === 'spa' && "Vista de Mapa Mundial"}
                </button>
              </Link>
            </div>
            <div class="column">
              <Link to='/chatbot'>
                <button class="button is-medium is-fullwidth is-success is-outlined">
                  
                  {localStorage.getItem('lang') === null && "Chatbot"}
                  {localStorage.getItem('lang') === 'en' && "Chatbot"}
                  {localStorage.getItem('lang') === 'chi' && "聊天机器人"}
                  {localStorage.getItem('lang') === 'spa' && "Chatbot"}
                </button>
              </Link>
            </div>
            <div class="column">
              <Link to='/meme'>
                <button class="button is-medium is-fullwidth is-success is-outlined">
                  {localStorage.getItem('lang') === null && "Environmental Meme Generator"}
                  {localStorage.getItem('lang') === 'en' && "Environmental Meme Generator"}
                  {localStorage.getItem('lang') === 'chi' && "环境模因发生器"}
                  {localStorage.getItem('lang') === 'spa' && "Generador de Memes Ambientales"}
                </button>
              </Link>
            </div>
            <div class="column">
              <Link to='/questions'>
                <button class="button is-medium is-fullwidth is-success is-outlined">
                  {localStorage.getItem('lang') === null && "Customer Ticket Creator"}
                  {localStorage.getItem('lang') === 'en' && "Customer Ticket Creator"}
                  {localStorage.getItem('lang') === 'chi' && "客户票务创建者"}
                  {localStorage.getItem('lang') === 'spa' && "Creador de Tickets Clientelas"}
                </button>
              </Link>
            </div>
            <div class="column">
              <Link to='/quiz'>
                <button class="button is-medium is-fullwidth is-success is-outlined">                  
                  {localStorage.getItem('lang') === null && "Quiz"}
                  {localStorage.getItem('lang') === 'en' && "Quiz"}
                  {localStorage.getItem('lang') === 'chi' && "测验"}
                  {localStorage.getItem('lang') === 'spa' && "Examen"}
                </button>
              </Link>
            </div>
            <div class="column">
              <Link to='/volunteer'>
                <button class="button is-medium is-fullwidth is-success is-outlined">                  
                  {localStorage.getItem('lang') === null && "Volunteer"}
                  {localStorage.getItem('lang') === 'en' && "Volunteer"}
                  {localStorage.getItem('lang') === 'chi' && "志愿者"}
                  {localStorage.getItem('lang') === 'spa' && "Voluntaria"}
                </button>
              </Link>
            </div>
            <div class="column">
              <Link to='/showertimer'>
                <button class="button is-medium is-fullwidth is-success is-outlined">                  
                  {localStorage.getItem('lang') === null && "Shower Timer"}
                  {localStorage.getItem('lang') === 'en' && "Shower Timer"}
                  {localStorage.getItem('lang') === 'chi' && "淋浴定时器"}
                  {localStorage.getItem('lang') === 'spa' && "Temporizador de ducha"}
                </button>
              </Link>
            </div>
            {/* <div class="column">
              <Link to='/alarm'><button class="button is-medium is-fullwidth is-success is-outlined">Timer Alarm</button></Link>
            </div> */}
            <div class="column">
              <Link to='/weather'>
                <button class="button is-medium is-fullwidth is-success is-outlined">
                  {localStorage.getItem('lang') === null && "Weather"}
                  {localStorage.getItem('lang') === 'en' && "Weather"}
                  {localStorage.getItem('lang') === 'chi' && "天气"}
                  {localStorage.getItem('lang') === 'spa' && "Clima"}
                </button>
              </Link>
            </div>
          </div>

      );
    }
} 

export default LinkButtons;