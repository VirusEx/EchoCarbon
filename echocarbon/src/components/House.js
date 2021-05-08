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
      showScore: false //CHANGE TO FALSE WHEN USING CHECKBOX
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
          <h1 class="title is-1">            
            {localStorage.getItem('lang') === null && "House Carbon Footprint Calculator"}
            {localStorage.getItem('lang') === 'en' && "House Carbon Footprint Calculator"}
            {localStorage.getItem('lang') === 'chi' && "房屋碳足迹计算器"}
            {localStorage.getItem('lang') === 'spa' && "Calculadora de huella de carbono de la casa"}
          </h1>
          </div>

          <div class="columns is-centered">
            <div class="column is-half">
              <h2>                
                {localStorage.getItem('lang') === null && "Show Percentage Data"}
                {localStorage.getItem('lang') === 'en' && "Show Percentage Data"}
                {localStorage.getItem('lang') === 'chi' && "显示百分比数据"}
                {localStorage.getItem('lang') === 'spa' && "Mostrar datos de porcentaje"}
              </h2>
              <label class="checkbox">
                <input
                type="checkbox"
                value={this.state.solar}
                onChange={(newVal) => {
                      this.setState((currentState) => ({
                        showScore: !currentState.showScore, 
                      }));
                      console.log(this.state.showScore);
                      }
                    }/>
              </label>
              
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-half">
              <h2 class="title is-4">                
                {localStorage.getItem('lang') === null && "Water: "+ this.state.water + " gallons per month"}
                {localStorage.getItem('lang') === 'en' && "Water: "+ this.state.water + " gallons per month"}
                {localStorage.getItem('lang') === 'chi' && "水: "+ this.state.water + " 每月加仑"}
                {localStorage.getItem('lang') === 'spa' && "Agua: "+ this.state.water + " gallones por mes"}
              </h2>
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
              <h2 class="title is-4">
                {localStorage.getItem('lang') === null && "Natural Gas: "+ this.state.gas + " cubic ft per month"}
                {localStorage.getItem('lang') === 'en' && "Natural Gas: "+ this.state.gas + " cubic ft per month"}
                {localStorage.getItem('lang') === 'chi' && "天然气: "+ this.state.gas + " 立方英尺每月"}
                {localStorage.getItem('lang') === 'spa' && "Gas Natural: "+ this.state.gas + " pies cúbicos por mes"}
              </h2>
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

          <div class="columns is-centered">
            <div class="column is-half">
              <h2 class="title is-4">
                {localStorage.getItem('lang') === null && "Electricity: "+ this.state.electricity + " kWh per month"}
                {localStorage.getItem('lang') === 'en' && "Electricity: "+ this.state.electricity + " kWh per month"}
                {localStorage.getItem('lang') === 'chi' && "电: "+ this.state.electricity + " 每月千瓦时"}
                {localStorage.getItem('lang') === 'spa' && "Electricidad: "+ this.state.electricity + " kWh por mes"}
              </h2>
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
          </div>


          <div class="columns is-centered">
            <div class="column is-half">
            {/* NULL */}
            {localStorage.getItem('lang') === null &&  this.state.avgScore <= 100 && this.state.avgScore >= 80 && <h1 class="title is-2"> Eco Grade: 🌲 Eco Hero! {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")} </h1> }
            {localStorage.getItem('lang') === null &&  this.state.avgScore < 80 && this.state.avgScore >= 20 && <h1 class="title is-2">Eco Grade: 😃 Eco Aware {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === null &&  this.state.avgScore < 20 && this.state.avgScore >= -15 && <h1 class="title is-2">Eco Grade: 😮 Average Earthling {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === null &&  this.state.avgScore < -15 && this.state.avgScore >= -30 && <h1 class="title is-2">Eco Grade: 🥵 Watch Out {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === null &&  this.state.avgScore < -30  &&  <h1 class="title is-2">Eco Grade: 💀 Help Earth! You can become Earth's Hero {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")}</h1> }

            {localStorage.getItem('lang') === null &&  this.state.waterScore <= 100 && this.state.waterScore >= 80 && <h1 class="title is-4">Water: 🌲 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === null &&  this.state.waterScore < 80 && this.state.waterScore >= 20  && <h2 class="title is-4">Water: 😃 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === null &&  this.state.waterScore < 20 && this.state.waterScore >= -15 && <h2 class="title is-4">Water: 😮 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === null &&  this.state.waterScore < -15  && this.state.waterScore >= -30 && <h2 class="title is-4">Water: 🥵 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === null &&  this.state.waterScore < -30  &&  <h1 class="title is-4">Water: 💀 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            
            {localStorage.getItem('lang') === null &&  this.state.gasScore <= 100 && this.state.gasScore >= 80 && <h1 class="title is-4">Gas: 🌲 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === null &&  this.state.gasScore < 80 && this.state.gasScore >= 20  && <h2 class="title is-4">Gas: 😃 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === null &&  this.state.gasScore < 20 && this.state.gasScore >= -15 && <h2 class="title is-4">Gas: 😮 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === null &&  this.state.gasScore < -15  && this.state.gasScore >= -30 && <h2 class="title is-4">Gas: 🥵 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === null &&  this.state.gasScore < -30  &&  <h1 class="title is-4">Gas: 💀 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h1> }

            {localStorage.getItem('lang') === null &&  this.state.electricityScore <= 100 && this.state.electricityScore >= 80 && <h1 class="title is-4">Electricity: 🌲 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === null &&  this.state.electricityScore < 80 && this.state.electricityScore >= 20  && <h2 class="title is-4">Electricity: 😃 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === null &&  this.state.electricityScore < 20 && this.state.electricityScore >= -15 && <h2 class="title is-4">Electricity: 😮 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === null &&  this.state.electricityScore < -15  && this.state.electricityScore >= -30 && <h2 class="title is-4">Electricity: 🥵 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === null &&  this.state.electricityScore < -30  &&  <h1 class="title is-4">Electricity: 💀 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h1> }

            {/* ENGLISH */}
            {localStorage.getItem('lang') === 'en' &&  this.state.avgScore <= 100 && this.state.avgScore >= 80 && <h1 class="title is-2"> Eco Grade: 🌲 Eco Hero! {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")} </h1> }
            {localStorage.getItem('lang') === 'en' &&  this.state.avgScore < 80 && this.state.avgScore >= 20 && <h1 class="title is-2">Eco Grade: 😃 Eco Aware {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === 'en' &&  this.state.avgScore < 20 && this.state.avgScore >= -15 && <h1 class="title is-2">Eco Grade: 😮 Average Earthling {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === 'en' &&  this.state.avgScore < -15 && this.state.avgScore >= -30 && <h1 class="title is-2">Eco Grade: 🥵 Watch Out {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === 'en' &&  this.state.avgScore < -30  &&  <h1 class="title is-2">Eco Grade: 💀 Help Earth! You can become Earth's Hero {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficient")}</h1> }

            {localStorage.getItem('lang') === 'en' &&  this.state.waterScore <= 100 && this.state.waterScore >= 80 && <h1 class="title is-4">Water: 🌲 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === 'en' &&  this.state.waterScore < 80 && this.state.waterScore >= 20  && <h2 class="title is-4">Water: 😃 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === 'en' &&  this.state.waterScore < 20 && this.state.waterScore >= -15 && <h2 class="title is-4">Water: 😮 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === 'en' &&  this.state.waterScore < -15  && this.state.waterScore >= -30 && <h2 class="title is-4">Water: 🥵 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === 'en' &&  this.state.waterScore < -30  &&  <h1 class="title is-4">Water: 💀 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            
            {localStorage.getItem('lang') === 'en' &&  this.state.gasScore <= 100 && this.state.gasScore >= 80 && <h1 class="title is-4">Gas: 🌲 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === 'en' &&  this.state.gasScore < 80 && this.state.gasScore >= 20  && <h2 class="title is-4">Gas: 😃 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === 'en' &&  this.state.gasScore < 20 && this.state.gasScore >= -15 && <h2 class="title is-4">Gas: 😮 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === 'en' &&  this.state.gasScore < -15  && this.state.gasScore >= -30 && <h2 class="title is-4">Gas: 🥵 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === 'en' &&  this.state.gasScore < -30  &&  <h1 class="title is-4">Gas: 💀 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficient")}</h1> }

            {localStorage.getItem('lang') === 'en' &&  this.state.electricityScore <= 100 && this.state.electricityScore >= 80 && <h1 class="title is-4">Electricity: 🌲 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h1> }
            {localStorage.getItem('lang') === 'en' &&  this.state.electricityScore < 80 && this.state.electricityScore >= 20  && <h2 class="title is-4">Electricity: 😃 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === 'en' &&  this.state.electricityScore < 20 && this.state.electricityScore >= -15 && <h2 class="title is-4">Electricity: 😮 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === 'en' &&  this.state.electricityScore < -15  && this.state.electricityScore >= -30 && <h2 class="title is-4">Electricity: 🥵 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h2> }
            {localStorage.getItem('lang') === 'en' &&  this.state.electricityScore < -30  &&  <h1 class="title is-4">Electricity: 💀 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficient")}</h1> }

            {/* CHINESE */}
            {localStorage.getItem('lang') === 'chi' &&  this.state.avgScore <= 100 && this.state.avgScore >= 80 && <h1 class="title is-2"> 生态等级: 🌲 生态英雄! {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% 高效的")} </h1> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.avgScore < 80 && this.state.avgScore >= 20 && <h1 class="title is-2">生态等级: 😃 生态意识 {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% 高效的")}</h1> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.avgScore < 20 && this.state.avgScore >= -15 && <h1 class="title is-2">生态等级: 😮 平均地球 {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% 高效的")}</h1> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.avgScore < -15 && this.state.avgScore >= -30 && <h1 class="title is-2">生态等级: 🥵 小心 {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% 高效的")}</h1> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.avgScore < -30  &&  <h1 class="title is-2">生态等级: 💀 帮助地球！你可以成为地球的英雄 {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% 高效的")}</h1> }

            {localStorage.getItem('lang') === 'chi' &&  this.state.waterScore <= 100 && this.state.waterScore >= 80 && <h1 class="title is-4">水: 🌲 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% 高效的")}</h1> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.waterScore < 80 && this.state.waterScore >= 20  && <h2 class="title is-4">水: 😃 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% 高效的")}</h2> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.waterScore < 20 && this.state.waterScore >= -15 && <h2 class="title is-4">水: 😮 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% 高效的")}</h2> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.waterScore < -15  && this.state.waterScore >= -30 && <h2 class="title is-4">水: 🥵 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% 高效的")}</h2> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.waterScore < -30  &&  <h1 class="title is-4">水: 💀 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% 高效的")}</h1> }
            
            {localStorage.getItem('lang') === 'chi' &&  this.state.gasScore <= 100 && this.state.gasScore >= 80 && <h1 class="title is-4">气体: 🌲 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% 高效的")}</h1> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.gasScore < 80 && this.state.gasScore >= 20  && <h2 class="title is-4">气体: 😃 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% 高效的")}</h2> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.gasScore < 20 && this.state.gasScore >= -15 && <h2 class="title is-4">气体: 😮 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% 高效的")}</h2> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.gasScore < -15  && this.state.gasScore >= -30 && <h2 class="title is-4">气体: 🥵 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% 高效的")}</h2> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.gasScore < -30  &&  <h1 class="title is-4">气体: 💀 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% 高效的")}</h1> }

            {localStorage.getItem('lang') === 'chi' &&  this.state.electricityScore <= 100 && this.state.electricityScore >= 80 && <h1 class="title is-4">电: 🌲 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% 高效的")}</h1> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.electricityScore < 80 && this.state.electricityScore >= 20  && <h2 class="title is-4">电: 😃 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% 高效的")}</h2> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.electricityScore < 20 && this.state.electricityScore >= -15 && <h2 class="title is-4">电: 😮 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% 高效的")}</h2> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.electricityScore < -15  && this.state.electricityScore >= -30 && <h2 class="title is-4">电: 🥵 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% 高效的")}</h2> }
            {localStorage.getItem('lang') === 'chi' &&  this.state.electricityScore < -30  &&  <h1 class="title is-4">电: 💀 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% 高效的")}</h1> }
            
            { /* SPANISH */}
            {localStorage.getItem('lang') === 'spa' &&  this.state.avgScore <= 100 && this.state.avgScore >= 80 && <h1 class="title is-2"> Grado Ecologico: 🌲 Heroe Ecologico! {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficiente")} </h1> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.avgScore < 80 && this.state.avgScore >= 20 && <h1 class="title is-2">Grado Ecologico: 😃 Eco Consciente {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficiente")}</h1> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.avgScore < 20 && this.state.avgScore >= -15 && <h1 class="title is-2">Grado Ecologico: 😮 Terrestre medio {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficiente")}</h1> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.avgScore < -15 && this.state.avgScore >= -30 && <h1 class="title is-2">Grado Ecologico: 🥵 Cuidado {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficiente")}</h1> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.avgScore < -30  &&  <h1 class="title is-2">Grado Ecologico: 💀 ¡Ayuda a la Tierra! Puedes convertirte en el héroe de la Tierra {this.state.showScore && ((this.state.avgScore*1.0).toFixed(0) + "% Efficiente")}</h1> }

            {localStorage.getItem('lang') === 'spa' &&  this.state.waterScore <= 100 && this.state.waterScore >= 80 && <h1 class="title is-4">Agua: 🌲 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficiente")}</h1> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.waterScore < 80 && this.state.waterScore >= 20  && <h2 class="title is-4">Agua: 😃 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficiente")}</h2> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.waterScore < 20 && this.state.waterScore >= -15 && <h2 class="title is-4">Agua: 😮 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficiente")}</h2> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.waterScore < -15  && this.state.waterScore >= -30 && <h2 class="title is-4">Agua: 🥵 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficiente")}</h2> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.waterScore < -30  &&  <h1 class="title is-4">Agua: 💀 {this.state.showScore && ((this.state.waterScore*1.0).toFixed(0) + "% Efficiente")}</h1> }
            
            {localStorage.getItem('lang') === 'spa' &&  this.state.gasScore <= 100 && this.state.gasScore >= 80 && <h1 class="title is-4">Gas: 🌲 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficiente")}</h1> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.gasScore < 80 && this.state.gasScore >= 20  && <h2 class="title is-4">Gas: 😃 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficiente")}</h2> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.gasScore < 20 && this.state.gasScore >= -15 && <h2 class="title is-4">Gas: 😮 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficiente")}</h2> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.gasScore < -15  && this.state.gasScore >= -30 && <h2 class="title is-4">Gas: 🥵 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficiente")}</h2> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.gasScore < -30  &&  <h1 class="title is-4">Gas: 💀 {this.state.showScore && ((this.state.gasScore*1.0).toFixed(0) + "% Efficiente")}</h1> }

            {localStorage.getItem('lang') === 'spa' &&  this.state.electricityScore <= 100 && this.state.electricityScore >= 80 && <h1 class="title is-4">Electricidad: 🌲 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficiente")}</h1> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.electricityScore < 80 && this.state.electricityScore >= 20  && <h2 class="title is-4">Electricidad: 😃 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficiente")}</h2> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.electricityScore < 20 && this.state.electricityScore >= -15 && <h2 class="title is-4">Electricidad: 😮 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficiente")}</h2> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.electricityScore < -15  && this.state.electricityScore >= -30 && <h2 class="title is-4">Electricidad: 🥵 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficiente")}</h2> }
            {localStorage.getItem('lang') === 'spa' &&  this.state.electricityScore < -30  &&  <h1 class="title is-4">Electricidad: 💀 {this.state.showScore && ((this.state.electricityScore*1.0).toFixed(0) + "% Efficiente")}</h1> }
            {/* {(this.state.solar)?(<h2 class="title is-3">Electricity Score: {(this.state.electricityScore * 1).toFixed(2)}%</h2>):(<div/>)} */}
            
            </div>
          </div>

        </div>
      );
    }
} 
//🌲😃😮🥵💀

export default House;