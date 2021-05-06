import React from 'react';

const conditions = (props) => {
   return (
       <div>
           {props.error && <small>Please enter a valid city.</small>}
           {props.loading && <div>Loading...</div>}
           {props.responseObj.cod === 200 ?
               <div className="box">
                   <p class="title is-1">{props.responseObj.name}</p>
                   <p class="title is-4">It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                   {props.responseObj.weather[0].description === "clear sky" ? <div class="title is-1">☀️</div> : ""}
                   {props.responseObj.weather[0].description === "few clouds" ? <div class="title is-1">☁️</div> : ""}
                   {props.responseObj.weather[0].description === "scattered clouds" ? <div class="title is-1">☁️ ☁️</div> : ""}
                   {props.responseObj.weather[0].description === "broken clouds" ? <div class="title is-1">☁️ ☁️ ☁️</div> : ""}
                   {props.responseObj.weather[0].description === "shower rain" ? <div class="title is-1">🌧️</div> : ""}
                   {props.responseObj.weather[0].description === "rain" ? <div class="title is-1">🌧️</div> : ""}
                   {props.responseObj.weather[0].description === "thunderstorm" ? <div class="title is-1">⛈️</div> : ""}
                   {props.responseObj.weather[0].description === "snow" ? <div class="title is-1">❄️</div> : ""}
                   {props.responseObj.weather[0].description === "mist" ? <div class="title is-1">🌫️</div> : ""}
                   {props.responseObj.weather[0].description === "haze" ? <div class="title is-1">🌫️</div> : ""}
               </div>
           : null
           }
       </div>
   )
}

export default conditions;