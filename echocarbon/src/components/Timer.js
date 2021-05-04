import React, { Component } from 'react'
import { useTimer } from 'react-timer-hook';
import { Link } from 'react-router-dom';

// function MyTimer({ expiryTimestamp }) {
//   const {
//     seconds,
//     minutes,
//     hours,
//     days,
//     isRunning,
//     start,
//     pause,
//     resume,
//     restart,
//   } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


//   return (
//     <div style={{textAlign: 'center'}}>
//       <h1>react-timer-hook </h1>
//       <p>Timer Demo</p>
//       <div style={{fontSize: '100px'}}>
//         <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//       <p>{isRunning ? 'Running' : 'Not running'}</p>
//       <button onClick={start}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={resume}>Resume</button>
//       <button onClick={() => {
//         // Restarts to 5 minutes timer
//         const time = new Date();
//         time.setSeconds(time.getSeconds() + 1200);
//         restart(time)
//       }}>Restart</button>
//     </div>
//   );
// }

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 1,
      seconds: 0,
      totalSeconds: 60
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
            <h1 class="title is-1">Shower Timer</h1>
        </div>
        {/* <div>
         {(this.state.minutes * 60) + this.state.seconds > 600 ? <div></div> : <MyTimer expiryTimestamp={time} />}
          
        </div>
        <form>
          <label>
            Minutes:
            <input
              name="minutes"
              type="number"
              value={this.state.minutes}
              onChange={time.setSeconds(time.getSeconds() + (this.state.minutes * 60) + this.state.seconds) && this.handleInputChange}
              />
          </label>
          <br />
          <label>
            Seconds:
            <input
              name="seconds"
              type="number"
              value={this.state.seconds}
              onChange={time.setSeconds(time.getSeconds() + (this.state.minutes * 60) + this.state.seconds) && this.handleInputChange} 
              />
          </label>
        </form>*/}
      </div>
    );
  }
}

export default Timer