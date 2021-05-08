import React, { Component } from 'react'
import emailjs from "emailjs-com"
import { Link } from 'react-router-dom';


class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ticketMessage: event.target.value});
    // console.log("Change: " + event.target.value);
  }


  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    console.log("Submit: " + this.state.ticketMessage);
    localStorage.setItem("tM", this.state.ticketMessage);
    localStorage.setItem("tMTime", Date());
    event.preventDefault();

    emailjs.sendForm('service_gy667yu', 'template_py26dfq', event.target, 'user_VZ5P3vcuhc1OYWRMpNR1h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      emailjs.sendForm('service_gy667yu', 'template_ohyobpd', event.target, 'user_VZ5P3vcuhc1OYWRMpNR1h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset()

      
  }

  clearTicketMessage(event) {
    // localStorage.clear();
    localStorage.setItem("tM", "");
    localStorage.setItem("tMTime", "");
    // localStorage.clear();
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div class="box">
          <h1 class="title is-1">            
            {localStorage.getItem('lang') === null && "Customer Ticket Creator"}
            {localStorage.getItem('lang') === 'en' && "Customer Ticket Creator"}
            {localStorage.getItem('lang') === 'chi' && "客户票务创建者"}
            {localStorage.getItem('lang') === 'spa' && "Creador de tickets de cliente"}
          </h1>
        </div>
        <div>
          <br></br>
          <form onSubmit={this.handleSubmit}>
              <div class="field">
                <label class="label">                  
                  {localStorage.getItem('lang') === null && "Name"}
                  {localStorage.getItem('lang') === 'en' && "Name"}
                  {localStorage.getItem('lang') === 'chi' && "名称"}
                  {localStorage.getItem('lang') === 'spa' && "Nombre"}
                </label>
                <div class="control">
                  <input className="form-control has-text-centered input" type="text" name="name" placeholder="Name" />
                </div>
              </div>

              <div class="field">
                <label class="label">
                  {localStorage.getItem('lang') === null && "Email"}
                  {localStorage.getItem('lang') === 'en' && "Email"}
                  {localStorage.getItem('lang') === 'chi' && "电子邮件"}
                  {localStorage.getItem('lang') === 'spa' && "Correo electrónico"}
                </label>
                <div class="control has-icons-left has-icons-right">
                  <input className="form-control has-text-centered input" type="email" placeholder="Email Address" defaultValue="" name="email"/>
                </div>
              </div>

              <div class="field">
                <label class="label">                  
                  {localStorage.getItem('lang') === null && "Message"}
                  {localStorage.getItem('lang') === 'en' && "Message"}
                  {localStorage.getItem('lang') === 'chi' && "信息"}
                  {localStorage.getItem('lang') === 'spa' && "Mensaje"}
                </label>
                <div class="control">
                  <textArea className="form-control has-text-centered textarea" id="" cols="30" rows="8" placeholder="Message" name="message" value={this.state.ticketMessage}  onChange={this.handleChange} onSubmit={this.handleSubmit} defaultValue=""></textArea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                    <input type = "submit" className="btn btn-info has-text-centered button is-link" value="Submit Ticket" onClick={this.refreshPage}/>
                </div>
              </div>

              
              {/* <br></br>
              Current Message:
              <br></br>
              {
                this.state.ticketMessage
              } */}
              <br></br>
              {/* Sent on:
              <br></br>
              {
                console.log(localStorage.getItem("tM") + "TEST")
              }
              <br></br> */}
              
              <br></br>
              {
                localStorage.getItem("tM") === "" ? "" :
                <div class="box">
                  <label class="label">                    
                    {localStorage.getItem('lang') === null && "Previous Ticket Message:"}
                    {localStorage.getItem('lang') === 'en' && "Previous Ticket Message:"}
                    {localStorage.getItem('lang') === 'chi' && "先前的票务消息："}
                    {localStorage.getItem('lang') === 'spa' && "Mensaje de ticket anterior:"}
                  </label>
                  
                  <span class="tag is-large">{localStorage.getItem("tM")}</span>
                  <br></br>
                  <label class="label">                    
                    {localStorage.getItem('lang') === null && "Sent at:"}
                    {localStorage.getItem('lang') === 'en' && "Sent at:"}
                    {localStorage.getItem('lang') === 'chi' && "发送至："}
                    {localStorage.getItem('lang') === 'spa' && "Enviado a:"}
                  </label>
                  <span class="tag is-large">{localStorage.getItem("tMTime")}</span>
                  <br></br>
                  <br></br>
                  <button class="button is-danger" onSubmit={this.clearTicketMessage} onClick={this.refreshPage}>                    
                    {localStorage.getItem('lang') === null && "Delete Previous Message"}
                    {localStorage.getItem('lang') === 'en' && "Delete Previous Message"}
                    {localStorage.getItem('lang') === 'chi' && "删除上一条消息"}
                    {localStorage.getItem('lang') === 'spa' && "Eliminar mensaje anterior"}
                  </button>
                </div>
              }
          </form>
        </div>
    </div>
      
    );
  }
}

export default Questions;