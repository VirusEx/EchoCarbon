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
          <div className="is-family-code">{minutes}</div>            
            {localStorage.getItem('lang') === null && "minutes"}
            {localStorage.getItem('lang') === 'en' && "minutes"}
            {localStorage.getItem('lang') === 'chi' && "分钟"}
            {localStorage.getItem('lang') === 'spa' && "minutos"}
            <div className="is-family-code">{seconds}</div>             
            {localStorage.getItem('lang') === null && "seconds"}
            {localStorage.getItem('lang') === 'en' && "seconds"}
            {localStorage.getItem('lang') === 'chi' && "秒"}
            {localStorage.getItem('lang') === 'spa' && "segundos"}
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
            <div class="button is-outlined">{showerMinutes} 
            {localStorage.getItem('lang') === null && " Minutes"}
            {localStorage.getItem('lang') === 'en' && " Minutes"}
            {localStorage.getItem('lang') === 'chi' && "分钟"}
            {localStorage.getItem('lang') === 'spa' && " Minutos"}
            </div>
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
          }}>            
            {localStorage.getItem('lang') === null && "Start"}
            {localStorage.getItem('lang') === 'en' && "Start"}
            {localStorage.getItem('lang') === 'chi' && "开始"}
            {localStorage.getItem('lang') === 'spa' && "Comienzo"}
          </button>
        </div>
        <div class="column">
          <button class="button is-info" onClick={pause}>            
            {localStorage.getItem('lang') === null && "Pause"}
            {localStorage.getItem('lang') === 'en' && "Pause"}
            {localStorage.getItem('lang') === 'chi' && "暂停"}
            {localStorage.getItem('lang') === 'spa' && "Pausa"}
          </button>
        </div>
        <div class="column">
          <button class="button is-info" onClick={resume}>            
            {localStorage.getItem('lang') === null && "Resume"}
            {localStorage.getItem('lang') === 'en' && "Resume"}
            {localStorage.getItem('lang') === 'chi' && "恢复"}
            {localStorage.getItem('lang') === 'spa' && "Reanudar"}
          </button>
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
            <h1 class="title is-1">              
              {localStorage.getItem('lang') === null && "Track Your Shower"}
              {localStorage.getItem('lang') === 'en' && "Track Your Shower"}
              {localStorage.getItem('lang') === 'chi' && "追踪淋浴"}
              {localStorage.getItem('lang') === 'spa' && "Seguimiento de su ducha"}
            </h1>
            <h1 class="title is-4">              
              {localStorage.getItem('lang') === null && "Stop taking long showers!"}
              {localStorage.getItem('lang') === 'en' && "Stop taking long showers!"}
              {localStorage.getItem('lang') === 'chi' && "停止长时间淋浴！"}
              {localStorage.getItem('lang') === 'spa' && "¡Deja de tomar duchas largas!"}
            </h1>
        </div>
        <div>
          <div class="columns is-centered">
            <div class="column is-half">
              <div className="box">
                <div class="title is-3">                  
                  {localStorage.getItem('lang') === null && "Stopwatch"}
                  {localStorage.getItem('lang') === 'en' && "Stopwatch"}
                  {localStorage.getItem('lang') === 'chi' && "跑表"}
                  {localStorage.getItem('lang') === 'spa' && "Cronógrafo"}
                </div>
                <Timer
                  initialTime={0}
                  startImmediately={false}>
                  {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                      <div>
                        <div class="title is-4">
                          <div className="is-family-code"><Timer.Minutes /></div> 
                          {localStorage.getItem('lang') === null && "minutes"}
                          {localStorage.getItem('lang') === 'en' && "minutes"}
                          {localStorage.getItem('lang') === 'chi' && "分钟"}
                          {localStorage.getItem('lang') === 'spa' && "minutos"} 
                          <div className="is-family-code"><Timer.Seconds /></div> 
                          {localStorage.getItem('lang') === null && "seconds"}
                          {localStorage.getItem('lang') === 'en' && "seconds"}
                          {localStorage.getItem('lang') === 'chi' && "秒"}
                          {localStorage.getItem('lang') === 'spa' && "segundos"}
                        </div>
                      </div>
                      {/* <div>{timerState}</div> */}
                      <br />
                      <div class="columns is-centered">
                          <div class="column">
                            <button class="button is-info" onClick={start}>
                            {localStorage.getItem('lang') === null && "Start"}
                            {localStorage.getItem('lang') === 'en' && "Start"}
                            {localStorage.getItem('lang') === 'chi' && "开始"}
                            {localStorage.getItem('lang') === 'spa' && "Comienzo"}
                            </button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={pause}>
                            {localStorage.getItem('lang') === null && "Pause"}
                            {localStorage.getItem('lang') === 'en' && "Pause"}
                            {localStorage.getItem('lang') === 'chi' && "暂停"}
                            {localStorage.getItem('lang') === 'spa' && "Pausa"}
                            </button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={resume}>
                            {localStorage.getItem('lang') === null && "Resume"}
                            {localStorage.getItem('lang') === 'en' && "Resume"}
                            {localStorage.getItem('lang') === 'chi' && "恢复"}
                            {localStorage.getItem('lang') === 'spa' && "Reanudar"}
                            </button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={stop}>                              
                              {localStorage.getItem('lang') === null && "Stop"}
                              {localStorage.getItem('lang') === 'en' && "Stop"}
                              {localStorage.getItem('lang') === 'chi' && "停止"}
                              {localStorage.getItem('lang') === 'spa' && "Detener"}
                            </button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={reset}>                              
                              {localStorage.getItem('lang') === null && "Reset"}
                              {localStorage.getItem('lang') === 'en' && "Reset"}
                              {localStorage.getItem('lang') === 'chi' && "重启"}
                              {localStorage.getItem('lang') === 'spa' && "Reiniciar"}
                            </button>
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
                <div class="title is-3">                  
                  {localStorage.getItem('lang') === null && "Custom Timer"}
                  {localStorage.getItem('lang') === 'en' && "Custom Timer"}
                  {localStorage.getItem('lang') === 'chi' && "自定义计时器"}
                  {localStorage.getItem('lang') === 'spa' && "Temporizador personalizado"}
                </div>
                <MyTimer/>
              </div>
            </div>
          </div>


          <div class="columns is-centered">
            <div class="column is-half">
              <div className="box">
                <div class="title is-3">                  
                  {localStorage.getItem('lang') === null && "5 Minute Timer"}
                  {localStorage.getItem('lang') === 'en' && "5 Minute Timer"}
                  {localStorage.getItem('lang') === 'chi' && "5分钟定时器"}
                  {localStorage.getItem('lang') === 'spa' && "Temporizador de 5 minutos"}
                </div>
                <Timer
                  initialTime={300000}
                  startImmediately={false}
                  direction="backward">
                  {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                      <div>
                        <div class="title is-4">
                          <div className="is-family-code"><Timer.Minutes /></div> 
                          {localStorage.getItem('lang') === null && "minutes"}
                          {localStorage.getItem('lang') === 'en' && "minutes"}
                          {localStorage.getItem('lang') === 'chi' && "分钟"}
                          {localStorage.getItem('lang') === 'spa' && "minutos"} 
                          <div className="is-family-code"><Timer.Seconds /></div> 
                          {localStorage.getItem('lang') === null && "seconds"}
                          {localStorage.getItem('lang') === 'en' && "seconds"}
                          {localStorage.getItem('lang') === 'chi' && "秒"}
                          {localStorage.getItem('lang') === 'spa' && "segundos"}
                        </div>
                      </div>
                      {/* <div>{timerState}</div> */}
                      <br />
                      <div class="columns is-centered">
                          <div class="column">
                            <button class="button is-info" onClick={start}>
                            {localStorage.getItem('lang') === null && "Start"}
                            {localStorage.getItem('lang') === 'en' && "Start"}
                            {localStorage.getItem('lang') === 'chi' && "开始"}
                            {localStorage.getItem('lang') === 'spa' && "Comienzo"}
                            </button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={pause}>
                            {localStorage.getItem('lang') === null && "Pause"}
                            {localStorage.getItem('lang') === 'en' && "Pause"}
                            {localStorage.getItem('lang') === 'chi' && "暂停"}
                            {localStorage.getItem('lang') === 'spa' && "Pausa"}
                            </button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={resume}>
                            {localStorage.getItem('lang') === null && "Resume"}
                            {localStorage.getItem('lang') === 'en' && "Resume"}
                            {localStorage.getItem('lang') === 'chi' && "恢复"}
                            {localStorage.getItem('lang') === 'spa' && "Reanudar"}
                            </button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={stop}>
                            {localStorage.getItem('lang') === null && "Stop"}
                            {localStorage.getItem('lang') === 'en' && "Stop"}
                            {localStorage.getItem('lang') === 'chi' && "停止"}
                            {localStorage.getItem('lang') === 'spa' && "Detener"}
                            </button>
                          </div>
                          <div class="column">
                            <button class="button is-info" onClick={reset}>
                            {localStorage.getItem('lang') === null && "Reset"}
                            {localStorage.getItem('lang') === 'en' && "Reset"}
                            {localStorage.getItem('lang') === 'chi' && "重启"}
                            {localStorage.getItem('lang') === 'spa' && "Reiniciar"}
                            </button>
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