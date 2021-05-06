import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Auth from '@aws-amplify/auth'
import Iframe from 'react-iframe'

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ticketMessage: event.target.value});
    // console.log("Change: " + event.target.value);
  }


  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    console.log("Submit: " + this.state.ticketMessage);
    localStorage.setItem("tM", this.state.ticketMessage);
    localStorage.setItem("tMTime", Date());
    event.preventDefault();
      
  }

  clearTicketMessage(event) {
    // localStorage.clear();
    localStorage.setItem("tM", "");
    localStorage.setItem("tMTime", "");
    // localStorage.clear();
  }

  refreshPage() {
    window.location.reload();
    console.log(localStorage.getItem("event1"));
  }

  addEvent1() {
    localStorage.setItem("event1", "true");
    window.location.reload();
  }

  removeEvent1() {
    localStorage.setItem("event1", "false");
    window.location.reload();
  }

  addEvent2() {
    localStorage.setItem("event2", "true");
    window.location.reload();
  }

  removeEvent2() {
    localStorage.setItem("event2", "false");
    window.location.reload();
  }

  addEvent3() {
    localStorage.setItem("event3", "true");
    window.location.reload();
  }

  removeEvent3() {
    localStorage.setItem("event3", "false");
    window.location.reload();
  }

  addEvent4() {
    localStorage.setItem("event4", "true");
    window.location.reload();
  }

  removeEvent4() {
    localStorage.setItem("event4", "false");
    window.location.reload();
  }


  render() {

      return (
        <div>
        <div class="box">
          <h1 class="title is-1">Volunteering</h1>
        </div>
        <div class="">
          <br></br>
          <div class="box">
            <h1 class="title is-3">Available Events</h1>
          </div>
          <div class="columns is-centered">
            <div class="column">
              <div class="box">
                <div class="notification">
                  <div class="title is-4">Crystal Cove State Beach Clean Up</div>
                  <div className="has-text-weight-medium">Beach clean up event.</div>
                  <br></br>
                  Date: Friday May 21st, 2021
                  <br></br>
                  Time: 7:00 AM PST
                  <br></br>
                  <div class="level">
                    <div class="level-item has-text-centered">
                      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.111887294673!2d-117.84384843393539!3d33.5764441000986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce1d303c83c29%3A0x156f2e21fc3be7a3!2sCrystal%20Cove%20State%20Beach!5e0!3m2!1sen!2sus!4v1620266244119!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                    </div>
                  </div>
                </div>
                {
                  localStorage.getItem("event1") == "true" ?
                  <button class="button is-info" onClick={this.addEvent1} disabled>Join Event #1</button> :
                  <button class="button is-info" onClick={this.addEvent1}>Join Event #1</button>
                }
              </div>
            </div>
            <div class="column">
              <div class="box">
                <div class="notification">
                  <div class="title is-4">Tree Planting Event</div>
                    <div className="has-text-weight-medium">Help plant trees.</div>
                    <br></br>
                    Date: Saturday May 22nd, 2021
                    <br></br>
                    Time: 9:00 AM PST
                    <br></br>
                    <div class="level">
                      <div class="level-item has-text-centered">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13243.601507683903!2d-117.7245244!3d33.9179635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ae49fd55bb87faf!2sChino%20Hills%20State%20Park!5e0!3m2!1sen!2sus!4v1620267818546!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                      </div>
                    </div>
                </div>
                {
                  localStorage.getItem("event2") == "true" ?
                  <button class="button is-info" onClick={this.addEvent2} disabled>Join Event #2</button> :
                  <button class="button is-info" onClick={this.addEvent2}>Join Event #2</button>
                }
              </div>
            </div>
          </div>


          <div class="columns is-centered">
            <div class="column">
              <div class="box">
                <div class="notification">
                  <div class="title is-4">Create Downtown Fullerton Community Garden</div>
                  <div className="has-text-weight-medium">Help create a community garden in Downtown Fullerton.</div>
                  <br></br>
                  Date: Wednesday June 2nd, 2021
                  <br></br>
                  Time: 10:00 AM PST
                  <br></br>
                  <div class="level">
                    <div class="level-item has-text-centered">
                      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18741.568201663908!2d-117.93333062547603!3d33.86202261112568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5f64ccf91eb%3A0x8561a8e990cfc18f!2sFullerton%20Downtown%20Plaza!5e0!3m2!1sen!2sus!4v1620268156778!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                    </div>
                  </div>
                </div>
                {
                  localStorage.getItem("event3") == "true" ?
                  <button class="button is-info" onClick={this.addEvent3} disabled>Join Event #3</button> :
                  <button class="button is-info" onClick={this.addEvent3}>Join Event #3</button>
                }
              </div>
              
            </div>
            <div class="column">
              <div class="box">
                <div class="notification">
                <div class="title is-4">Santa Ana River Waterways Cleanup</div>
                    <div className="has-text-weight-medium">Help clean up the Santa Ana River waterways.</div>
                    <br></br>
                    Date: Saturday June 5th, 2021
                    <br></br>
                    Time: 6:00 AM PST
                    <br></br>
                    <div class="level">
                      <div class="level-item has-text-centered">
                      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89316.18100030861!2d-117.97934904023484!3d33.70293394730588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd274ea7f7bc47%3A0x300af2a6a7a4a7df!2sSanta%20Ana%20River!5e0!3m2!1sen!2sus!4v1620268501111!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                      </div>
                    </div>
                </div>
                {
                  localStorage.getItem("event4") == "true" ?
                  <button class="button is-info" onClick={this.addEvent4} disabled>Join Event #4</button> :
                  <button class="button is-info" onClick={this.addEvent4}>Join Event #4</button>
                }
              </div>
              
            </div>
          </div>
        </div>
        
        <br></br>

        <div class="">
          <div class="box">
            <h1 class="title is-3">Attending Events:</h1>
          </div>
          <div class="columns is-centered">
              <div class="column is-half">
                {
                  localStorage.getItem("event1") == "true" ?
                  <div class="box">
                    <div class="notification">
                      <div class="title is-4">Crystal Cove State Beach Clean Up</div>
                      <div className="has-text-weight-medium">Beach clean up event.</div>
                      <br></br>
                      Date: Friday May 21st, 2021
                      <br></br>
                      Time: 7:00 AM PST
                      <br></br>
                      <div class="level">
                        <div class="level-item has-text-centered">
                          <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.111887294673!2d-117.84384843393539!3d33.5764441000986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce1d303c83c29%3A0x156f2e21fc3be7a3!2sCrystal%20Cove%20State%20Beach!5e0!3m2!1sen!2sus!4v1620266244119!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <button class="button is-danger" onClick={this.removeEvent1}>Leave Event #1</button>
                    <br></br>
                    Current attendees:
                    <br></br>
                    {Auth.user.username}
                  </div> : ""
                }
                {
                  localStorage.getItem("event2") == "true" ?
                  <div class="box">
                    <div class="notification">
                      <div class="title is-4">Tree Planting Event</div>
                      <div className="has-text-weight-medium">Help plant trees.</div>
                      <br></br>
                      Date: Saturday May 22nd, 2021
                      <br></br>
                      Time: 9:00 AM PST
                      <br></br>
                      <div class="level">
                        <div class="level-item has-text-centered">
                          <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13243.601507683903!2d-117.7245244!3d33.9179635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ae49fd55bb87faf!2sChino%20Hills%20State%20Park!5e0!3m2!1sen!2sus!4v1620267818546!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <button class="button is-danger" onClick={this.removeEvent2}>Leave Event #2</button>
                    <br></br>
                    Current attendees:
                    <br></br>
                    {Auth.user.username}
                  </div> : ""
                }
                {
                  localStorage.getItem("event3") == "true" ?
                  <div class="box">
                    <div class="notification">
                    <div class="title is-4">Create Downtown Fullerton Community Garden</div>
                      <div className="has-text-weight-medium">Help create a community garden in Downtown Fullerton.</div>
                      <br></br>
                      Date: Wednesday June 2nd, 2021
                      <br></br>
                      Time: 10:00 AM PST
                      <br></br>
                      <div class="level">
                      <div class="level-item has-text-centered">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18741.568201663908!2d-117.93333062547603!3d33.86202261112568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5f64ccf91eb%3A0x8561a8e990cfc18f!2sFullerton%20Downtown%20Plaza!5e0!3m2!1sen!2sus!4v1620268156778!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                      </div>
                      </div>
                    </div>
                    <button class="button is-danger" onClick={this.removeEvent3}>Leave Event #3</button>
                    <br></br>
                    Current attendees:
                    <br></br>
                    {Auth.user.username}
                  </div> : ""
                }
                {
                  localStorage.getItem("event4") == "true" ?
                  <div class="box">
                    <div class="notification">
                      <div class="title is-4">Santa Ana River Waterways Cleanup</div>
                      <div className="has-text-weight-medium">Help clean up the Santa Ana River waterways.</div>
                      <br></br>
                      Date: Saturday June 5th, 2021
                      <br></br>
                      Time: 6:00 AM PST
                      <br></br>
                      <div class="level">
                        <div class="level-item has-text-centered">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89316.18100030861!2d-117.97934904023484!3d33.70293394730588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd274ea7f7bc47%3A0x300af2a6a7a4a7df!2sSanta%20Ana%20River!5e0!3m2!1sen!2sus!4v1620268501111!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                        </div>
                        </div>
                    </div>
                    <button class="button is-danger" onClick={this.removeEvent4}>Leave Event #4</button>
                    <br></br>
                    Current attendees:
                    <br></br>
                    {Auth.user.username}
                  </div> : ""
                }
              </div>
          </div>
        </div>

        
    </div>
      );
    }
} 

export default Volunteer;