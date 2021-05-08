import React, { Component } from 'react'
import "bulma/css/bulma.css"
import emailjs from "emailjs-com"
export default function Emailer() {

    
    function sendEmail(e){
        e.preventDefault();

        // emailjs.sendForm('service_gy667yu', 'template_ohyobpd', e.target, 'user_VZ5P3vcuhc1OYWRMpNR1h')
        // emailjs.sendForm('service_2wmow6p', 'template_9xqgkef', e.target, 'user_JHjDXIrrcTdmB9Wa4RcC4')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        e.target.reset()

        window.alert("Your carbon footprint report & goal were successfully sent!")
    }

    return(
    <div>
            <br></br>
            <div class="title is-1">                
                {localStorage.getItem('lang') === null && "Carbon Footprint Report & Goal Setter"}
                {localStorage.getItem('lang') === 'en' && "Carbon Footprint Report & Goal Setter"}
                {localStorage.getItem('lang') === 'chi' && "碳足迹报告和目标设定者"}
                {localStorage.getItem('lang') === 'spa' && "Informe de huella de carbono y establecimiento de objetivos"}
            </div>
        <form onSubmit={sendEmail}>

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
                    {localStorage.getItem('lang') === 'spa' && "Correo Electronico"}
                </label>
                <div class="control has-icons-left has-icons-right">
                    <input className="form-control has-text-centered input" type="email" placeholder="Email Address" defaultValue="" name="email"/>
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label">                    
                    {localStorage.getItem('lang') === null && "Carbon Emission Goal"}
                    {localStorage.getItem('lang') === 'en' && "Carbon Emission Goal"}
                    {localStorage.getItem('lang') === 'chi' && "碳排放目标"}
                    {localStorage.getItem('lang') === 'spa' && "Objetivo de emisión de carbono"}
                </label>
                <div class="control">
                    {/* <textarea className="form-control has-text-centered textarea" id="" cols="30" rows="8" placeholder="Message" name = "message" defaultValue=" My personal goal on my Carbon Emission score is: 
                      Personal Notes: 
                      ..."></textarea> */}
                      <input className="form-control has-text-centered textarea" id="" cols="30" rows="8" placeholder="Goal" name = "message" defaultValue="My carbon emission goal is "></input>
                </div>
            </div>

            <div class="field">
                <label class="label">                    
                    {localStorage.getItem('lang') === null && "Carbon Emission Report"}
                    {localStorage.getItem('lang') === 'en' && "Carbon Emission Report"}
                    {localStorage.getItem('lang') === 'chi' && "碳排放报告"}
                    {localStorage.getItem('lang') === 'spa' && "Informe de emisiones de carbono"}
                </label>
                <div class="control">
                    <input class="input" type="text" placeholder="Disabled input" name = "carbon" value={"The amount of carbon released based off your weekly driving habits is " + localStorage.getItem("carbonNumber") + "."}/>
                </div>
            </div>

            





            <br></br>
            <div class="field">
                <div class="control">
                    <input type = "submit" className="btn btn-info has-text-centered button is-link" value="Create goal"/>
                </div>
            </div>


            {}



                {/* <div>
                    <input type = "text" className="form-control has-text-centered" placeholder="Name" name="name"/>
                    <br></br>
                    <input type = "email" className="form-control has-text-centered" placeholder="Email Address" name="email"/>
                    <br></br>
                    <textarea className="form-control has-text-centered" id="" cols="30" rows="8" placeholder="Your message" name = "message" defaultValue="
                      My personal goal on my Carbon Emission score is: 
                      Personal Notes: 
                      ...
                    "></textarea>
                    <br></br>
                    <input type = "submit" className="btn btn-info has-text-centered" value="Send message"/>
                </div> */}
        </form>

    </div>
    )
}