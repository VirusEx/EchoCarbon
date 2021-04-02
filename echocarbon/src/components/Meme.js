import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Meme extends React.Component {
  state = {
    loading: false,
    topText: "",
    bottomText: "",
    allMemeImgs: [],
    randomImg: "http://i.imgflip.com/1bij.jpg"
  };
  componentDidMount() {
    this.setState({
      loading: true
    });

    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(content =>
        this.setState({
          allMemeImgs: content.data.memes,
          loading: false
        })
      );
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    const rand =
      allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
    this.setState({
      randomImg: rand
    });
  };

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Text"
            type="text"
            value={this.state.topText}
            name="topText"
            onChange={this.handleChange}
          />
          <input
            placeholder="Enter Text"
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>

        <br />
        <div className="meme">
          <img src={this.state.randomImg} alt="meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default Meme;