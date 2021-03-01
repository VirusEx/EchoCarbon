import './App.css';
import "bulma/css/bulma.css"
import Login from './components/Login'
import Calculator from './components/Calculator'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p class = "is-size-1">EchoCarbon</p>
        <div class="container is-widescreen">
          <div class="notification is-success">
            Carbon Footprint Calculator
            <progress class="progress" value="60" max="100">60%</progress>
              <article class="message is-success">
                <div class="message-body">
                  Hello! Welcome to our Carbon footprint calculator. Please enter the following information about your vehicle.
                </div>
              </article>
              <Login />
              <Calculator />
              {/* <input class="input is-success" type="text" placeholder="Type here!"></input> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;