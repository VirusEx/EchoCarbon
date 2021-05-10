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
          <h1 class="title is-1">            
            {localStorage.getItem('lang') === null && "Volunteering"}
            {localStorage.getItem('lang') === 'en' && "Volunteering"}
            {localStorage.getItem('lang') === 'chi' && "志愿服务"}
            {localStorage.getItem('lang') === 'spa' && "Trabajar como voluntario"}
          </h1>
        </div>
        <div class="">
          <br></br>
          <div class="box">
            <h1 class="title is-3">              
              {localStorage.getItem('lang') === null && "Available Events:"}
              {localStorage.getItem('lang') === 'en' && "Available Events:"}
              {localStorage.getItem('lang') === 'chi' && "現有活动:"}
              {localStorage.getItem('lang') === 'spa' && "Eventos disponibles:"}
            </h1>
          </div>
          <div class="columns is-centered">
            <div class="column">
              <div class="box">
                <div class="notification">
                  <div class="title is-4">                    
                    {localStorage.getItem('lang') === null && "Crystal Cove State Beach Clean Up"}
                    {localStorage.getItem('lang') === 'en' && "Crystal Cove State Beach Clean Up"}
                    {localStorage.getItem('lang') === 'chi' && "水晶湾州立海滩清理"}
                    {localStorage.getItem('lang') === 'spa' && "Limpieza de la playa estatal de Crystal Cove"}
                  </div>
                  <div className="has-text-weight-medium">                    
                    {localStorage.getItem('lang') === null && "Beach clean up event."}
                    {localStorage.getItem('lang') === 'en' && "Beach clean up event."}
                    {localStorage.getItem('lang') === 'chi' && "海滩清理活动。"}
                    {localStorage.getItem('lang') === 'spa' && "Evento de limpieza de playa."}
                  </div>
                  <br></br>                  
                  {localStorage.getItem('lang') === null && "Date: Friday May 21st, 2021"}
                  {localStorage.getItem('lang') === 'en' && "Date: Friday May 21st, 2021"}
                  {localStorage.getItem('lang') === 'chi' && "日期：2021年5月21日，星期五"}
                  {localStorage.getItem('lang') === 'spa' && "Fecha: 21 de mayo de 2021"}
                  <br></br>                  
                  {localStorage.getItem('lang') === null && "Time: 7:00 AM PST"}
                  {localStorage.getItem('lang') === 'en' && "Time: 7:00 AM PST"}
                  {localStorage.getItem('lang') === 'chi' && "时间：太平洋标准时间上午7:00"}
                  {localStorage.getItem('lang') === 'spa' && "Hora: 7:00 AM PST"}
                  <br></br>
                  <div class="level">
                    <div class="level-item has-text-centered">
                      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.111887294673!2d-117.84384843393539!3d33.5764441000986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce1d303c83c29%3A0x156f2e21fc3be7a3!2sCrystal%20Cove%20State%20Beach!5e0!3m2!1sen!2sus!4v1620266244119!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                    </div>
                  </div>
                </div>
                {
                  localStorage.getItem("event1") == "true" ?
                  <button class="button is-info" onClick={this.addEvent1} disabled>                    
                    {localStorage.getItem('lang') === null && "Join Event #1"}
                    {localStorage.getItem('lang') === 'en' && "Join Event #1"}
                    {localStorage.getItem('lang') === 'chi' && "加入活动＃1"}
                    {localStorage.getItem('lang') === 'spa' && "Únirse al evento #1"}
                  </button> :
                  <button class="button is-info" onClick={this.addEvent1}>
                    {localStorage.getItem('lang') === null && "Join Event #1"}
                    {localStorage.getItem('lang') === 'en' && "Join Event #1"}
                    {localStorage.getItem('lang') === 'chi' && "加入活动＃1"}
                    {localStorage.getItem('lang') === 'spa' && "Únirse al evento #1"}
                  </button>
                }
              </div>
            </div>
            <div class="column">
              <div class="box">
                <div class="notification">
                  <div class="title is-4">                    
                    {localStorage.getItem('lang') === null && "Tree Planting Event"}
                    {localStorage.getItem('lang') === 'en' && "Tree Planting Event"}
                    {localStorage.getItem('lang') === 'chi' && "植树活动"}
                    {localStorage.getItem('lang') === 'spa' && "Evento de plantación de árboles"}
                  </div>
                    <div className="has-text-weight-medium">                      
                      {localStorage.getItem('lang') === null && "Help plant trees."}
                      {localStorage.getItem('lang') === 'en' && "Help plant trees."}
                      {localStorage.getItem('lang') === 'chi' && "帮助种树。"}
                      {localStorage.getItem('lang') === 'spa' && "Ayuda a plantar árboles."}
                    </div>
                    <br></br>                    
                    {localStorage.getItem('lang') === null && "Date: Saturday May 22nd, 2021"}
                    {localStorage.getItem('lang') === 'en' && "Date: Saturday May 22nd, 2021"}
                    {localStorage.getItem('lang') === 'chi' && "日期：2021年5月22日，星期六"}
                    {localStorage.getItem('lang') === 'spa' && "Fecha: sábado 22 de mayo de 2021"}
                    <br></br>                    
                    {localStorage.getItem('lang') === null && "Time: 9:00 AM PST"}
                    {localStorage.getItem('lang') === 'en' && "Time: 9:00 AM PST"}
                    {localStorage.getItem('lang') === 'chi' && "时间：太平洋标准时间上午9:00"}
                    {localStorage.getItem('lang') === 'spa' && "Hora: 9:00 AM PST"}
                    <br></br>
                    <div class="level">
                      <div class="level-item has-text-centered">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13243.601507683903!2d-117.7245244!3d33.9179635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ae49fd55bb87faf!2sChino%20Hills%20State%20Park!5e0!3m2!1sen!2sus!4v1620267818546!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                      </div>
                    </div>
                </div>
                {
                  localStorage.getItem("event2") == "true" ?
                  <button class="button is-info" onClick={this.addEvent2} disabled>
                    {localStorage.getItem('lang') === null && "Join Event #2"}
                    {localStorage.getItem('lang') === 'en' && "Join Event #2"}
                    {localStorage.getItem('lang') === 'chi' && "加入活动＃2"}
                    {localStorage.getItem('lang') === 'spa' && "Únirse al evento #2"}
                  </button> :
                  <button class="button is-info" onClick={this.addEvent2}>
                    {localStorage.getItem('lang') === null && "Join Event #2"}
                    {localStorage.getItem('lang') === 'en' && "Join Event #2"}
                    {localStorage.getItem('lang') === 'chi' && "加入活动＃2"}
                    {localStorage.getItem('lang') === 'spa' && "Únirse al evento #2"}
                  </button>
                }
              </div>
            </div>
          </div>


          <div class="columns is-centered">
            <div class="column">
              <div class="box">
                <div class="notification">
                  <div class="title is-4">                    
                    {localStorage.getItem('lang') === null && "Create Downtown Fullerton Community Garden"}
                    {localStorage.getItem('lang') === 'en' && "Create Downtown Fullerton Community Garden"}
                    {localStorage.getItem('lang') === 'chi' && "创建富乐顿市区社区花园"}
                    {localStorage.getItem('lang') === 'spa' && "Crear jardín comunitario en el centro de Fullerton"}
                  </div>
                  <div className="has-text-weight-medium">                    
                    {localStorage.getItem('lang') === null && "Help create a community garden in Downtown Fullerton."}
                    {localStorage.getItem('lang') === 'en' && "Help create a community garden in Downtown Fullerton."}
                    {localStorage.getItem('lang') === 'chi' && "帮助在富勒顿市中心创建社区花园。"}
                    {localStorage.getItem('lang') === 'spa' && "Ayude a crear un jardín comunitario en el centro de Fullerton."}
                  </div>
                  <br></br>                  
                  {localStorage.getItem('lang') === null && "Date: Wednesday June 2nd, 2021"}
                  {localStorage.getItem('lang') === 'en' && "Date: Wednesday June 2nd, 2021"}
                  {localStorage.getItem('lang') === 'chi' && "日期：2021年6月2日，星期三"}
                  {localStorage.getItem('lang') === 'spa' && "Fecha: 2 de junio de 2021"}
                  <br></br>                  
                  {localStorage.getItem('lang') === null && "Time: 10:00 AM PST"}
                  {localStorage.getItem('lang') === 'en' && "Time: 10:00 AM PST"}
                  {localStorage.getItem('lang') === 'chi' && "时间：太平洋标准时间上午10:00"}
                  {localStorage.getItem('lang') === 'spa' && "Hora: 10:00 AM PST"}
                  <br></br>
                  <div class="level">
                    <div class="level-item has-text-centered">
                      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18741.568201663908!2d-117.93333062547603!3d33.86202261112568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5f64ccf91eb%3A0x8561a8e990cfc18f!2sFullerton%20Downtown%20Plaza!5e0!3m2!1sen!2sus!4v1620268156778!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                    </div>
                  </div>
                </div>
                {
                  localStorage.getItem("event3") == "true" ?
                  <button class="button is-info" onClick={this.addEvent3} disabled>
                    {localStorage.getItem('lang') === null && "Join Event #3"}
                    {localStorage.getItem('lang') === 'en' && "Join Event #3"}
                    {localStorage.getItem('lang') === 'chi' && "加入活动＃3"}
                    {localStorage.getItem('lang') === 'spa' && "Únirse al evento #3"}
                  </button> :
                  <button class="button is-info" onClick={this.addEvent3}>
                    {localStorage.getItem('lang') === null && "Join Event #3"}
                    {localStorage.getItem('lang') === 'en' && "Join Event #3"}
                    {localStorage.getItem('lang') === 'chi' && "加入活动＃3"}
                    {localStorage.getItem('lang') === 'spa' && "Únirse al evento #3"}
                  </button>
                }
              </div>
              
            </div>
            <div class="column">
              <div class="box">
                <div class="notification">
                <div class="title is-4">
                  
                  {localStorage.getItem('lang') === null && "Santa Ana River Waterways Cleanup"}
                  {localStorage.getItem('lang') === 'en' && "Santa Ana River Waterways Cleanup"}
                  {localStorage.getItem('lang') === 'chi' && "圣安娜河水道清理"}
                  {localStorage.getItem('lang') === 'spa' && "Limpieza de las vías fluviales del río Santa Ana"}
                </div>
                    <div className="has-text-weight-medium">                      
                      {localStorage.getItem('lang') === null && "Help clean up the Santa Ana River waterways."}
                      {localStorage.getItem('lang') === 'en' && "Help clean up the Santa Ana River waterways."}
                      {localStorage.getItem('lang') === 'chi' && "帮助清理圣安娜河水道。"}
                      {localStorage.getItem('lang') === 'spa' && "Ayude a limpiar las vías fluviales del río Santa Ana."}
                    </div>
                    <br></br>                   
                    {localStorage.getItem('lang') === null && "Date: Saturday June 5th, 2021"}
                    {localStorage.getItem('lang') === 'en' && "Date: Saturday June 5th, 2021"}
                    {localStorage.getItem('lang') === 'chi' && "日期：2021年6月5日，星期六"}
                    {localStorage.getItem('lang') === 'spa' && "Fecha: sábado 5 de junio de 2021"}
                    <br></br>                    
                    {localStorage.getItem('lang') === null && "Time: 6:00 AM PST"}
                    {localStorage.getItem('lang') === 'en' && "Time: 6:00 AM PST"}
                    {localStorage.getItem('lang') === 'chi' && "时间：太平洋标准时间上午6:00"}
                    {localStorage.getItem('lang') === 'spa' && "Hora: 6:00 AM PST"}
                    <br></br>
                    <div class="level">
                      <div class="level-item has-text-centered">
                      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89316.18100030861!2d-117.97934904023484!3d33.70293394730588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd274ea7f7bc47%3A0x300af2a6a7a4a7df!2sSanta%20Ana%20River!5e0!3m2!1sen!2sus!4v1620268501111!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                      </div>
                    </div>
                </div>
                {
                  localStorage.getItem("event4") == "true" ?
                  <button class="button is-info" onClick={this.addEvent4} disabled>
                    {localStorage.getItem('lang') === null && "Join Event #4"}
                    {localStorage.getItem('lang') === 'en' && "Join Event #4"}
                    {localStorage.getItem('lang') === 'chi' && "加入活动＃4"}
                    {localStorage.getItem('lang') === 'spa' && "Únirse al evento #4"}
                  </button> :
                  <button class="button is-info" onClick={this.addEvent4}>
                    {localStorage.getItem('lang') === null && "Join Event #4"}
                    {localStorage.getItem('lang') === 'en' && "Join Event #4"}
                    {localStorage.getItem('lang') === 'chi' && "加入活动＃4"}
                    {localStorage.getItem('lang') === 'spa' && "Únirse al evento #4"}
                  </button>
                }
              </div>
              
            </div>
          </div>
        </div>
        
        <br></br>

        <div class="">
          <div class="box">
            <h1 class="title is-3">              
              {localStorage.getItem('lang') === null && "Attending Events:"}
              {localStorage.getItem('lang') === 'en' && "Attending Events:"}
              {localStorage.getItem('lang') === 'chi' && "参加活动："}
              {localStorage.getItem('lang') === 'spa' && "Asistiendo a eventos:"}
            </h1>
          </div>
          <div class="columns is-centered">
              <div class="column is-half">
                {
                  localStorage.getItem("event1") == "true" ?
                  <div class="box">
                    <div class="notification">
                      <div class="title is-4">
                        {localStorage.getItem('lang') === null && "Crystal Cove State Beach Clean Up"}
                        {localStorage.getItem('lang') === 'en' && "Crystal Cove State Beach Clean Up"}
                        {localStorage.getItem('lang') === 'chi' && "水晶湾州立海滩清理"}
                        {localStorage.getItem('lang') === 'spa' && "Limpieza de la playa estatal de Crystal Cove"}
                      </div>
                      <div className="has-text-weight-medium">
                      {localStorage.getItem('lang') === null && "Beach clean up event."}
                      {localStorage.getItem('lang') === 'en' && "Beach clean up event."}
                      {localStorage.getItem('lang') === 'chi' && "海滩清理活动。"}
                      {localStorage.getItem('lang') === 'spa' && "Evento de limpieza de playa."}
                      </div>
                      <br></br>
                      {localStorage.getItem('lang') === null && "Date: Friday May 21st, 2021"}
                      {localStorage.getItem('lang') === 'en' && "Date: Friday May 21st, 2021"}
                      {localStorage.getItem('lang') === 'chi' && "日期：2021年5月21日，星期五"}
                      {localStorage.getItem('lang') === 'spa' && "Fecha: 21 de mayo de 2021"}
                      <br></br>
                      {localStorage.getItem('lang') === null && "Time: 7:00 AM PST"}
                      {localStorage.getItem('lang') === 'en' && "Time: 7:00 AM PST"}
                      {localStorage.getItem('lang') === 'chi' && "时间：太平洋标准时间上午7:00"}
                      {localStorage.getItem('lang') === 'spa' && "Hora: 7:00 AM PST"}
                      <br></br>
                      <div class="level">
                        <div class="level-item has-text-centered">
                          <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.111887294673!2d-117.84384843393539!3d33.5764441000986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce1d303c83c29%3A0x156f2e21fc3be7a3!2sCrystal%20Cove%20State%20Beach!5e0!3m2!1sen!2sus!4v1620266244119!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <button class="button is-danger" onClick={this.removeEvent1}>                      
                      {localStorage.getItem('lang') === null && "Leave Event #1"}
                      {localStorage.getItem('lang') === 'en' && "Leave Event #1"}
                      {localStorage.getItem('lang') === 'chi' && "离开事件1"}
                      {localStorage.getItem('lang') === 'spa' && "Salir del evento #1"}
                    </button>

                  </div> : ""
                }
                {
                  localStorage.getItem("event2") == "true" ?
                  <div class="box">
                    <div class="notification">
                      <div class="title is-4">
                      {localStorage.getItem('lang') === null && "Tree Planting Event"}
                      {localStorage.getItem('lang') === 'en' && "Tree Planting Event"}
                      {localStorage.getItem('lang') === 'chi' && "植树活动"}
                      {localStorage.getItem('lang') === 'spa' && "Evento de plantación de árboles"}
                      </div>
                      <div className="has-text-weight-medium">
                      {localStorage.getItem('lang') === null && "Help plant trees."}
                      {localStorage.getItem('lang') === 'en' && "Help plant trees."}
                      {localStorage.getItem('lang') === 'chi' && "帮助种树。"}
                      {localStorage.getItem('lang') === 'spa' && "Ayuda a plantar árboles."}
                      </div>
                      <br></br>
                      {localStorage.getItem('lang') === null && "Date: Saturday May 22nd, 2021"}
                      {localStorage.getItem('lang') === 'en' && "Date: Saturday May 22nd, 2021"}
                      {localStorage.getItem('lang') === 'chi' && "日期：2021年5月22日，星期六"}
                      {localStorage.getItem('lang') === 'spa' && "Fecha: sábado 22 de mayo de 2021"}
                      <br></br>
                      {localStorage.getItem('lang') === null && "Time: 9:00 AM PST"}
                      {localStorage.getItem('lang') === 'en' && "Time: 9:00 AM PST"}
                      {localStorage.getItem('lang') === 'chi' && "时间：太平洋标准时间上午9:00"}
                      {localStorage.getItem('lang') === 'spa' && "Hora: 9:00 AM PST"}
                      <br></br>
                      <div class="level">
                        <div class="level-item has-text-centered">
                          <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13243.601507683903!2d-117.7245244!3d33.9179635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ae49fd55bb87faf!2sChino%20Hills%20State%20Park!5e0!3m2!1sen!2sus!4v1620267818546!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <button class="button is-danger" onClick={this.removeEvent2}>
                      {localStorage.getItem('lang') === null && "Leave Event #2"}
                      {localStorage.getItem('lang') === 'en' && "Leave Event #2"}
                      {localStorage.getItem('lang') === 'chi' && "离开事件2"}
                      {localStorage.getItem('lang') === 'spa' && "Salir del evento #2"}
                    </button>
                    <br></br>
                    {localStorage.getItem('lang') === null && "Current attendees:"}
                    {localStorage.getItem('lang') === 'en' && "Current attendees:"}
                    {localStorage.getItem('lang') === 'chi' && "当前参加者："}
                    {localStorage.getItem('lang') === 'spa' && "Asistentes actuales:"}
                    <br></br>
                    {Auth.user.username}
                  </div> : ""
                }
                {
                  localStorage.getItem("event3") == "true" ?
                  <div class="box">
                    <div class="notification">
                    <div class="title is-4">
                    {localStorage.getItem('lang') === null && "Create Downtown Fullerton Community Garden"}
                    {localStorage.getItem('lang') === 'en' && "Create Downtown Fullerton Community Garden"}
                    {localStorage.getItem('lang') === 'chi' && "创建富乐顿市区社区花园"}
                    {localStorage.getItem('lang') === 'spa' && "Crear jardín comunitario en el centro de Fullerton"}
                    </div>
                      <div className="has-text-weight-medium">
                      {localStorage.getItem('lang') === null && "Help create a community garden in Downtown Fullerton."}
                      {localStorage.getItem('lang') === 'en' && "Help create a community garden in Downtown Fullerton."}
                      {localStorage.getItem('lang') === 'chi' && "帮助在富勒顿市中心创建社区花园。"}
                      {localStorage.getItem('lang') === 'spa' && "Ayude a crear un jardín comunitario en el centro de Fullerton."}
                      </div>
                      <br></br>
                      {localStorage.getItem('lang') === null && "Date: Wednesday June 2nd, 2021"}
                      {localStorage.getItem('lang') === 'en' && "Date: Wednesday June 2nd, 2021"}
                      {localStorage.getItem('lang') === 'chi' && "日期：2021年6月2日，星期三"}
                      {localStorage.getItem('lang') === 'spa' && "Fecha: 2 de junio de 2021"}
                      <br></br>
                      {localStorage.getItem('lang') === null && "Time: 10:00 AM PST"}
                      {localStorage.getItem('lang') === 'en' && "Time: 10:00 AM PST"}
                      {localStorage.getItem('lang') === 'chi' && "时间：太平洋标准时间上午10:00"}
                      {localStorage.getItem('lang') === 'spa' && "Hora: 10:00 AM PST"}
                      <br></br>
                      <div class="level">
                      <div class="level-item has-text-centered">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18741.568201663908!2d-117.93333062547603!3d33.86202261112568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5f64ccf91eb%3A0x8561a8e990cfc18f!2sFullerton%20Downtown%20Plaza!5e0!3m2!1sen!2sus!4v1620268156778!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                      </div>
                      </div>
                    </div>
                    <button class="button is-danger" onClick={this.removeEvent3}>
                      {localStorage.getItem('lang') === null && "Leave Event #3"}
                      {localStorage.getItem('lang') === 'en' && "Leave Event #3"}
                      {localStorage.getItem('lang') === 'chi' && "离开事件3"}
                      {localStorage.getItem('lang') === 'spa' && "Salir del evento #3"}
                    </button>
                    <br></br>
                    {localStorage.getItem('lang') === null && "Current attendees:"}
                    {localStorage.getItem('lang') === 'en' && "Current attendees:"}
                    {localStorage.getItem('lang') === 'chi' && "当前参加者："}
                    {localStorage.getItem('lang') === 'spa' && "Asistentes actuales:"}
                    <br></br>
                    {Auth.user.username}
                  </div> : ""
                }
                {
                  localStorage.getItem("event4") == "true" ?
                  <div class="box">
                    <div class="notification">
                      <div class="title is-4">
                      {localStorage.getItem('lang') === null && "Santa Ana River Waterways Cleanup"}
                      {localStorage.getItem('lang') === 'en' && "Santa Ana River Waterways Cleanup"}
                      {localStorage.getItem('lang') === 'chi' && "圣安娜河水道清理"}
                      {localStorage.getItem('lang') === 'spa' && "Limpieza de las vías fluviales del río Santa Ana"}
                      </div>
                      <div className="has-text-weight-medium">
                      {localStorage.getItem('lang') === null && "Help clean up the Santa Ana River waterways."}
                      {localStorage.getItem('lang') === 'en' && "Help clean up the Santa Ana River waterways."}
                      {localStorage.getItem('lang') === 'chi' && "帮助清理圣安娜河水道。"}
                      {localStorage.getItem('lang') === 'spa' && "Ayude a limpiar las vías fluviales del río Santa Ana."}
                      </div>
                      <br></br>
                      {localStorage.getItem('lang') === null && "Date: Saturday June 5th, 2021"}
                      {localStorage.getItem('lang') === 'en' && "Date: Saturday June 5th, 2021"}
                      {localStorage.getItem('lang') === 'chi' && "日期：2021年6月5日，星期六"}
                      {localStorage.getItem('lang') === 'spa' && "Fecha: sábado 5 de junio de 2021"}
                      <br></br>
                      {localStorage.getItem('lang') === null && "Time: 6:00 AM PST"}
                      {localStorage.getItem('lang') === 'en' && "Time: 6:00 AM PST"}
                      {localStorage.getItem('lang') === 'chi' && "时间：太平洋标准时间上午6:00"}
                      {localStorage.getItem('lang') === 'spa' && "Hora: 6:00 AM PST"}
                      <br></br>
                      <div class="level">
                        <div class="level-item has-text-centered">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89316.18100030861!2d-117.97934904023484!3d33.70293394730588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd274ea7f7bc47%3A0x300af2a6a7a4a7df!2sSanta%20Ana%20River!5e0!3m2!1sen!2sus!4v1620268501111!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
                        </div>
                        </div>
                    </div>
                    <button class="button is-danger" onClick={this.removeEvent4}>
                      {localStorage.getItem('lang') === null && "Leave Event #4"}
                      {localStorage.getItem('lang') === 'en' && "Leave Event #4"}
                      {localStorage.getItem('lang') === 'chi' && "离开事件4"}
                      {localStorage.getItem('lang') === 'spa' && "Salir del evento #4"}
                    </button>
                    <br></br>
                    {localStorage.getItem('lang') === null && "Current attendees:"}
                    {localStorage.getItem('lang') === 'en' && "Current attendees:"}
                    {localStorage.getItem('lang') === 'chi' && "当前参加者："}
                    {localStorage.getItem('lang') === 'spa' && "Asistentes actuales:"}
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