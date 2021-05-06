import React, { Component } from 'react'
import { useState } from 'react'
import Timer from 'react-compound-timer'
import { useTimer } from 'react-timer-hook';
import { Link } from 'react-router-dom';


//Show zero codes
function padLeadingZeros(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

//Timer codes
function MyTimer({ expiryTimestamp }) {
  const [showerMinutes, setshowerMinutes] = useState(3);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => window.alert('Your Shower Time is up!') });

  function handleDecreaseOnClick(){
    if (showerMinutes>0) {
      setshowerMinutes(showerMinutes - 1);
    }
  }


  // return (
  //   <div style={{textAlign: 'center'}}>
  //     <h1></h1>
  //     <p>Please use the + and - button below to set your desired shower time</p>
  //     <div style={{fontSize: '100px'}}>
  //       <span>{padLeadingZeros(minutes,2)}</span>:<span>{padLeadingZeros(seconds,2)}</span>
  //     </div>
  //     <p>{isRunning ? 'Running' : 'Not running'}</p>
  //     <p>ShowerTime</p>
  //     <div style={{fontSize:'30px'}}>
  //       <button onClick={(handleDecreaseOnClick)}>-</button>
  //       <span>{showerMinutes}</span>
  //       <button onClick={() => setshowerMinutes(showerMinutes + 1)}>+</button>
  //       Minutes
  //     </div>
  //     <button onClick={() => {
  //       // Restarts to 5 minutes timer
  //       const time = new Date();
  //       time.setSeconds(time.getSeconds() + showerMinutes*60);
  //       restart(time)
  //     }}>Start</button>
  //     <button onClick={pause}>Pause</button>
  //     <button onClick={resume}>Resume</button>
  //   </div>
  // );


  return (
    <div>
      {/* <div>
        <span>{padLeadingZeros(minutes,2)}</span>:<span>{padLeadingZeros(seconds,2)}</span>
      </div> */}
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p>
      <p>Shower Time</p>
      <div>
        <button onClick={(handleDecreaseOnClick)}>-</button>
        <span class>{showerMinutes}</span>
        <button onClick={() => setshowerMinutes(showerMinutes + 1)}>+</button>
        Minutes
      </div> */}
      <div>
        <div class="title is-4">
          <div className="is-family-code">{minutes}</div> minutes <div className="is-family-code">{seconds}</div> seconds
        </div>
      </div>
      <br></br>
      <div class="level">
        <div class="level-item has-text-centered">
        <div class="field has-addons">
          <div class="control">
            <button class="button is-info" onClick={(handleDecreaseOnClick)}>-</button>   
          </div>
          <div class="control">
            <div class="button is-outlined">{showerMinutes} Minutes</div>
          </div>
          <div class="control">
            <button class="button is-info" onClick={() => setshowerMinutes(showerMinutes + 1)}>+</button>
          </div>
        </div>  
          {/* <button class="button is-info" onClick={(handleDecreaseOnClick)}>-</button>
            <div class="button is-info">{showerMinutes}</div>
          <button class="button is-info" onClick={() => setshowerMinutes(showerMinutes + 1)}>+</button> */}
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <button class="button is-info" onClick={() => {
          // Restarts to 3 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + showerMinutes*60);
          restart(time)
          }}>Start</button>
        </div>
        <div class="column">
          <button class="button is-info" onClick={pause}>Pause</button>
        </div>
        <div class="column">
          <button class="button is-info" onClick={resume}>Resume</button>
        </div>
      </div>
    </div>
  );
}



class ShowerTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const time = new Date();
    return (
      <div>
        <div class="box">
            <h1 class="title is-1">Track Your Shower</h1>
            <h1 class="title is-4">Stop taking long showers!</h1>
        </div>
        <div>
          <div class="columns is-centered">
            <div class="column is-half">
              <div className="box">
                <div class="title is-3">Stopwatch</div>
                <Timer
                  initialTime={0}
                  startImmediately={false}>
                  {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                      <div>
                        <div class="title is-4">
                          <div className="is-family-code"><Timer.Minutes /></div> minutes <div className="is-family-code"><Timer.Seconds /></div> seconds
                        </div>
                      </div>
                      {/* <div>{timerState}</div> */}
                      <br />
                      <div class="columns is-centered">
                          <div class="column">
                            <button class="button is-info" onClick={start}>Start</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={pause}>Pause</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={resume}>Resume</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={stop}>Stop</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={reset}>Reset</button>
                          </div>
                        </div>
                    </React.Fragment>
                  )}
                </Timer>
              </div>
            </div>
          </div>


          <div class="columns is-centered">
            <div class="column is-half">
              <div className="box">
                <div class="title is-3">Custom Timer</div>
                <MyTimer/>
              </div>
            </div>
          </div>


          <div class="columns is-centered">
            <div class="column is-half">
              <div className="box">
                <div class="title is-3">5 Minute Timer</div>
                <Timer
                  initialTime={300000}
                  startImmediately={false}
                  direction="backward">
                  {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                      <div>
                        <div class="title is-4">
                          <div className="is-family-code"><Timer.Minutes /></div> minutes <div className="is-family-code"><Timer.Seconds /></div> seconds
                        </div>
                      </div>
                      {/* <div>{timerState}</div> */}
                      <br />
                      <div class="columns is-centered">
                          <div class="column">
                            <button class="button is-info" onClick={start}>Start</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={pause}>Pause</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={resume}>Resume</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={stop}>Stop</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={reset}>Reset</button>
                          </div>
                        </div>
                    </React.Fragment>
                  )}
                </Timer>
              </div>
            </div>
          </div>



          {/* <div class="columns is-centered">
            <div class="column is-half">
              <div className="box">
                <div class="title is-3">10 Minute Timer</div>
                <Timer
                  initialTime={600000}
                  startImmediately={false}
                  direction="backward">
                  {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                      <div>
                        <div class="title is-4">
                          <div className="is-family-code"><Timer.Minutes /></div> minutes <div className="is-family-code"><Timer.Seconds /></div> seconds
                        </div>
                      </div>
                      <br />
                      <div class="columns is-centered">
                          <div class="column">
                            <button class="button is-info" onClick={start}>Start</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={pause}>Pause</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={resume}>Resume</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={stop}>Stop</button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={reset}>Reset</button>
                          </div>
                        </div>
                    </React.Fragment>
                  )}
                </Timer>
              </div>
            </div>
          </div> */}



        </div>
      </div>
    );
  }
}

export default ShowerTimer