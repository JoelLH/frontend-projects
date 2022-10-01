import { useState } from 'react';
import './App.css';
import avatarAngela from "./assets/images/avatar-angela-gray.webp"
import avatarAnna from "./assets/images/avatar-anna-kim.webp"
import avatarJacob from "./assets/images/avatar-jacob-thompson.webp"
import avatarKimberly from "./assets/images/avatar-kimberly-smith.webp"
import avatarMark from "./assets/images/avatar-mark-webber.webp"
import avatarNathan from "./assets/images/avatar-nathan-peterson.webp"
import avatarRizky from "./assets/images/avatar-rizky-hasanuddin.webp"
import imgChess from "./assets/images/image-chess.webp"

function App() {
  const [notiState, setNotiState] = useState({
    unreadNum: 3,
  });

  let articleEl = document.getElementsByTagName("article");

  function markReadAll(){
    console.log(articleEl)
    for(let i = 0; i < articleEl.length; i++){
      if(articleEl[i].classList.contains("unread"))
        articleEl[i].classList.remove("unread")
      } 
      setNotiState({
        unreadNum: 0
      })
    }

  function markRead(event){
    let element = event.target
    console.log(element)
    if( element.classList.contains("unread")) {
      element.classList.remove("unread")
      setNotiState(prev=>({
        unreadNum: prev.unreadNum - 1
      }));
    }
  }

  return (
    <main className="App">
      <header className='noti-header'>
        <div className='noti__left'>
          <span className='noti__title dark-title'>
          Notifications 
          </span>
          <span className='noti__badge'>{notiState.unreadNum}</span>
        </div>
          <button className='mark-btn'
          onClick={markReadAll}
          >
            Mark all as read
          </button>
      </header>
      <section className='noti-section'>
        <article className='noti__article unread' 
        onClick={markRead}
        >
          <img src={avatarMark} alt="" className='article__img'/>
          <div className='article__data'>
              <p className='article__description'>
                <a href='#' className='author'>Mark Webber</a> reacted to your recent post <a href='#' className='post'>My first tournament today!</a></p>
              <span className='article__date'>1m ago</span>
          </div>
        </article>
        <article className='noti__article unread'
        onClick={markRead}
        >
          <img src={avatarAngela} alt="" className='article__img'/>
          <div className='article__data'>
              <p className='article__description'><a href='#' className='author'>Angela Gray</a> followed you</p>
              <span className='article__date'>5m ago</span>
          </div>
        </article>
        <article className='noti__article unread'
        onClick={markRead}
        >
          <img src={avatarJacob} alt="" className='article__img'/>
          <div className='article__data'>
              <p className='article__description'><a href='#' className='author'>Jacob Thompson</a> has joined your group <a href='#' className='group'>Chess Club</a></p>
              <span className='article__date'>1m ago</span>
          </div>
        </article>
        <article className='noti__article'
        onClick={markRead}
        >
          <img src={avatarRizky} alt="" className='article__img'/>
          <div className='article__data'>
              <p className='article__description'><a href='#' className='author'>Rizky Hasanuddin</a> sent you a private message</p>
              <span className='article__date'>5 days ago</span>
              <p className='article__msg'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
          </div>
        </article>
        <article className='noti__article picture'
        onClick={markRead}
        >
          <img src={avatarKimberly} alt="" className='article__img'/>
          <div className='article__data'>
              <p className='article__description'><a href='#' className='author'>Kimberly Smith</a> commented on your picture</p>
              <span className='article__date'>1 week ago</span>
          </div>
          <img src={imgChess} alt="" className='article__picture'/>
        </article>
        <article className='noti__article'
        onClick={markRead}
        >
          <img src={avatarNathan} alt="" className='article__img'/>
          <div className='article__data'>
              <p className='article__description'><a href='#' className='author'>Nathan Peterson</a> reacted to your recent post <a href='#' className='post'>5 end-game strategies to increase your win rate</a></p>
              <span className='article__date'>2 weeks ago</span>
          </div>
        </article>
        <article className='noti__article'
        onClick={markRead}
        >
          <img src={avatarAnna} alt="" className='article__img'/>
          <div className='article__data'>
              <p className='article__description'><a href='#' className='author'>Anna Kim</a> left the group <a href='#' className='group'>Chess Club</a></p>
              <span className='article__date'>2 weeks ago</span>
          </div>
        </article>
      </section>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Joel WebDev</a>.
      </div>
    </main>
  );
}

export default App;
