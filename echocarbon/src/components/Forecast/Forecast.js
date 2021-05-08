import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');

    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    let [responseObj, setResponseObj] = useState({});

    function getForecast(e) {
        e.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }

        setError(false);
        setResponseObj({});
  
        setLoading(true);
  
        let uriEncodedCity = encodeURIComponent(city);

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a0af6f762amsh34e6875513f1bdap1338ffjsnf39c277e8139",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
        })
        .then(response => response.json())
       .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }
           setResponseObj(response);
           setLoading(false);
        })
        .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
        });
    }
    return (
        <div class="columns is-centered">
                    <div class="column is-half">
                <div className="box">
                    <h2 class="title is-4">                        
                        {localStorage.getItem('lang') === null && "Find the Current Weather in a City"}
                        {localStorage.getItem('lang') === 'en' && "Find the Current Weather in a City"}
                        {localStorage.getItem('lang') === 'chi' && "查找城市的当前天气"}
                        {localStorage.getItem('lang') === 'spa' && "Encuentre el clima actual en una ciudad"}
                    </h2>
                    <form onSubmit={getForecast}>
                        <div class="columns is-centered">
                            <div class="column is-one-third">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Enter City"
                                    maxLength="50"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    />
                            </div>
                        </div>

                        <div class="columns is-centered">
                            <div class="column is-one-quarter">
                                <div className="box">
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="units"
                                            checked={unit === "imperial"}
                                            value="imperial"
                                            onChange={(e) => setUnit(e.target.value)}
                                            />                                        
                                        {localStorage.getItem('lang') === null && " Fahrenheit"}
                                        {localStorage.getItem('lang') === 'en' && " Fahrenheit"}
                                        {localStorage.getItem('lang') === 'chi' && " 华氏温度"}
                                        {localStorage.getItem('lang') === 'spa' && " Fahrenheit"}
                                    </label>
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="units"
                                            checked={unit === "metric"}
                                            value="metric"
                                            onChange={(e) => setUnit(e.target.value)}
                                            />
                                        {localStorage.getItem('lang') === null && " Celsius"}
                                        {localStorage.getItem('lang') === 'en' && " Celsius"}
                                        {localStorage.getItem('lang') === 'chi' && " 摄氏温度"}
                                        {localStorage.getItem('lang') === 'spa' && " Celsius"}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="button is-info">                            
                            {localStorage.getItem('lang') === null && "Get Forecast"}
                            {localStorage.getItem('lang') === 'en' && "Get Forecast"}
                            {localStorage.getItem('lang') === 'chi' && "取得预测"}
                            {localStorage.getItem('lang') === 'spa' && "Obtener pronóstico"}
                        </button>
                        <br></br>
                        <br></br>
                    </form>
                    <Conditions responseObj={responseObj} error={error} loading={loading}/>
                </div>
            </div>
        </div>
   )
}
export default Forecast;