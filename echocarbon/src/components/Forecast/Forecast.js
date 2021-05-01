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
                    <h2 class="title is-4">Find Current Weather Conditions</h2>
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
                                        Fahrenheit
                                    </label>
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="units"
                                            checked={unit === "metric"}
                                            value="metric"
                                            onChange={(e) => setUnit(e.target.value)}
                                            />
                                        Celcius
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="button is-info">Get Forecast</button>
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