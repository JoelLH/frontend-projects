import './App.css';
import userImg from "./images/image-jeremy.png"
import Dashboard from "./Dashboard"
import React, { useState } from 'react';

function App() {
  let [period, setPeriod] = useState({
    daily: false,
    weekly: true,
    monthly: false,
  })

  function changePeriod(event){
    let id = event.target.id
    switch(id){
      case "daily":
        setPeriod({
          daily: true,
          weekly: false,
          monthly: false})
          break;
      case "weekly":
        setPeriod({
          daily: false,
          weekly: true,
          monthly: false
        })
        break;
      case "monthly":
        setPeriod({
          daily: false,
          weekly: false,
          monthly: true
        })
        break;
        default:
          return period
    }
  }
  return (
    <div className="App">
      <section className='user-section'>
        <article className='user-card'>
          <div className='user-header d-flex'>
            <img src={userImg} alt="user" width="100px" className='user-img'/>
            <div className='user-data'>
              <span className='user-text text-down'>Report for</span>
              <h3 className='user-name'>Jeremy Robson</h3>
            </div>
          </div>
          <div className='user-footer'>
          <span className={period.daily ? "period active" : "period"} id='daily' onClick={changePeriod}>Daily</span>
          <span className={period.weekly ? "period active" : "period"} id='weekly' onClick={changePeriod}>Weekly</span>
          <span className={period.monthly ? "period active" : "period"} id='monthly' onClick={changePeriod}>Monthly</span>
          </div>
        </article>
      </section>
      <Dashboard period={period}/>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/JoelLH" target="_blank">Joel WebDev</a>.
      </div>
    </div>
  );
}

export default App;
