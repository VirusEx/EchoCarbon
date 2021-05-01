import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');

    const uriEncodedCity = encodeURIComponent(city);

    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a0af6f762amsh34e6875513f1bdap1338ffjsnf39c277e8139",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
        })
        .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       });
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <button onClick={getForecast}>Get Forecast</button>
            <Conditions responseObj={responseObj}/>
        </div>
   )
}
export default Forecast;