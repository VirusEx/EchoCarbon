import React, { Component } from 'react'
import "bulma/css/bulma.css"
import emailjs from "emailjs-com"

export default function Emailer() {

    
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_2wmow6p', 'template_9xqgkef', e.target, 'user_JHjDXIrrcTdmB9Wa4RcC4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
    }

    return(
        <div>
            <form onSubmit={sendEmail}>
                <div class="columns is-centered">
                    <div>
                        <input type = "text" className="form-control column is-half has-text-centered" placeholder="Name" name="name"/>
                        <br></br>
                        <input type = "email" className="form-control column is-half has-text-centered" placeholder="Email Address" name="email"/>
                        <br></br>
                        <input type = "text" className="form-control column is-half has-text-centered" placeholder="Subject" name="subject"/>
                        <br></br>
                        <textarea className="form-control column is-half has-text-centered" id="" cols="30" rows="8" placeholder="Your message" name = "message"></textarea>
                        <br></br>
                        <input type = "submit" className="btn btn-info column is-half has-text-centered" value="Send message"/>
                        <br></br>
                    </div>
                </div>
            </form>
        </div>
    )
}