import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
class LangSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapChoice: 0
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
      
  //   });
  // }
  

  handleChange(event) {
    //this.setState({vehicleType: event.target.vehicleType});
    localStorage.setItem('lang', event);
    console.log(localStorage.getItem('lang'));
    window.location.reload(false);
  }

  handleSubmit(event) {
    

  }



  render() {

      return (
        <div class="field has-addons">
        <div class="control">
          <button className="button is-outlined" onClick={()=>this.handleChange('en')}>
            English
          </button>
        </div>
        <div class="control">
          <button className="button is-outlined" onClick={()=>this.handleChange('chi')}>
            中文
          </button>
        </div>
        <div class="control">
          <button className="button is-outlined" onClick={()=>this.handleChange('spa')}>
            Español
          </button>
        </div>
      </div>
      );
    }
} 

export default LangSelect;