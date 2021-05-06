import React, { Component } from 'react'
import Timer from 'react-compound-timer'
import { useTimer } from 'react-timer-hook';
import { Link } from 'react-router-dom';

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



          <div class="columns is-centered">
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

        </div>
      </div>
    );
  }
}

export default ShowerTimer