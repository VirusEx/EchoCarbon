import React, { Component } from "react";

import images from './images'


class Meme extends Component {
  constructor() {
    super();
    this.state = {
      font_size: "22",
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      randomNumber: 0
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleClick = () => {
    let randomNumber = Math.floor(
      Math.random() * this.state.allMemeImgs.length
    );
    this.setState({ randomImg: this.state.allMemeImgs[randomNumber].url });

    const min = 0;
    const max = 6; 
    const rand = min + Math.random() * (max - min);
    this.state.randomNumber = Math.floor(rand);
  };
  
  increaseFont = () => {};
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(data => data.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }
  render() {
    console.log(this.state.font_size);
    return (
      <div>
        <div className="meme-form">
          <h1 class="title is-1">            
            {localStorage.getItem('lang') === null && "Environmental Meme Generator"}
            {localStorage.getItem('lang') === 'en' && "Environmental Meme Generator"}
            {localStorage.getItem('lang') === 'chi' && "环境模因发生器"}
            {localStorage.getItem('lang') === 'spa' && "Generador de memes ambientales"}
          </h1>
          <div class="columns is-centered">
            <div class="column is-one-third">
              <label class="label">                
                {localStorage.getItem('lang') === null && "Top Text:"}
                {localStorage.getItem('lang') === 'en' && "Top Text:"}
                {localStorage.getItem('lang') === 'chi' && "顶部文字："}
                {localStorage.getItem('lang') === 'spa' && "Texto superior:"}
              </label>
              <input
                class="input"
                type="text"
                name="topText"
                placeholder="Top Text"
                onChange={this.handleChange}
                value={this.state.topText}
              />
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-one-third">
              <label class="label">                
                {localStorage.getItem('lang') === null && "Bottom Text:"}
                {localStorage.getItem('lang') === 'en' && "Bottom Text:"}
                {localStorage.getItem('lang') === 'chi' && "底部的文本："}
                {localStorage.getItem('lang') === 'spa' && "Texto inferior:"}
              </label>
              <input
                class="input"
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                onChange={this.handleChange}
                value={this.state.bottomText}
              />
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-one-third">
              <label class="label">                
                {localStorage.getItem('lang') === null && "Font Size:"}
                {localStorage.getItem('lang') === 'en' && "Font Size:"}
                {localStorage.getItem('lang') === 'chi' && "字体大小："}
                {localStorage.getItem('lang') === 'spa' && "Tamaño de letra:"}
              </label>
              <input
                class="input"
                type="number"
                name="font_size"
                placeholder="Font Size"
                onChange={this.handleChange}
                value={this.state.font_size}
                min="0"
                max="100"
              />
            </div>
          </div>
          
          <div class="button is-warning" onClick={this.handleClick}>            
            {localStorage.getItem('lang') === null && "Generate!"}
            {localStorage.getItem('lang') === 'en' && "Generate!"}
            {localStorage.getItem('lang') === 'chi' && "产生！"}
            {localStorage.getItem('lang') === 'spa' && "¡Generar!"}
          </div>
        </div>
        <div className="meme">
          <h2
            style={{ fontSize: Number(this.state.font_size) }}
            className="top"
          >
            {this.state.topText}
          </h2>
          {/* <img src={this.state.randomImg} alt="" /> */}
          <img src={images[this.state.randomNumber]} />
          <h2
            style={{ fontSize: Number(this.state.font_size) }}
            className="bottom"
          >
            {this.state.bottomText}
          </h2>
        </div>
      </div>
    );
  }
}

export default Meme;