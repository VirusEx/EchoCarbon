import React, { Component } from 'react'
import { useTimer } from 'react-timer-hook';
import { useState } from 'react'
import { Link } from 'react-router-dom';

//Show zero codes
function padLeadingZeros(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

//Timer codes
function MyTimer({ expiryTimestamp }) {
  const [showerMinutes, setshowerMinutes] = useState(5);
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


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Echo Shower Alarm</h1>
      <p>Please use the + and - button below to set your desired shower time</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{padLeadingZeros(minutes,2)}</span>:<span>{padLeadingZeros(seconds,2)}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <p>ShowerTime</p>
      <div style={{fontSize:'30px'}}><button onClick={() => setshowerMinutes(showerMinutes - 1)}>
    -</button><span>{showerMinutes}</span><button onClick={() => setshowerMinutes(showerMinutes + 1)}>
    +
  </button>Mintues</div>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + showerMinutes*60);
        restart(time)
      }}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
    </div>
  );
}


class Alarm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapChoice: 0
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
      
  //   });
  // }
  

  handleChange(event) {
    //this.setState({vehicleType: event.target.vehicleType});
  }

  handleSubmit(event) {
    //alert('YOUR VEHICLE TYPE: ' + this.state.vehicleType);
    event.preventDefault();
  }


  render() {

      return (
        
        <div className="">
          <div class="box">
            <h1 class="title is-1">Alarm</h1>
          </div>
          <div>
          <MyTimer/>
          </div>
      
        </div>
      );
    }
} 

export default Alarm;