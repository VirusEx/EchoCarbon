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
          <h1 class="title is-1">Environmental Meme Generator</h1>
          <div class="columns is-centered">
            <div class="column is-one-third">
              <input
                class="input"
                type="text"
                name="topText"
                placeholder="top text"
                onChange={this.handleChange}
                value={this.state.topText}
              />
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-one-third">
              <input
                class="input"
                type="text"
                name="bottomText"
                placeholder="bottom text"
                onChange={this.handleChange}
                value={this.state.bottomText}
              />
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-one-third">
              <input
                class="input"
                type="number"
                name="font_size"
                placeholder="font size"
                onChange={this.handleChange}
                value={this.state.font_size}
                min="0"
                max="100"
              />
            </div>
          </div>
          
          <div class="button is-warning" onClick={this.handleClick}>Generate!</div>
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