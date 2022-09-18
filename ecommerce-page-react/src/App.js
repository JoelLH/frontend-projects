import icoMenu from "./images/icon-menu.svg"
import logo from "./images/logo.svg"
import cart from "./images/icon-cart.svg"
import avatar from "./images/image-avatar.png"
import './App.css';
import Display from "./components/Display";
import Data from "./components/Data";
import icoClose from "./images/icon-close.svg"
import React, { useState } from "react";
import icoDelete from "./images/icon-delete.svg";
import product1Thumb from "./images/image-product-1-thumbnail.jpg";



function App() {
  let [values, setValues] = useState({
    inputVal: 0,
    cartVal : 0
  });
  


  function handleNavbar(){
    let navOverEl = document.getElementById("nav-overlay");
    let navBarEl= document.getElementById("nav-bar");
    navOverEl.classList.toggle("nav-active");
    setTimeout(function(){
      navBarEl.classList.toggle("navbar-active")
    },50)
  }

  function handleInputVal(event){
    let eventId = event.target.id;
      console.log( values)
    switch (eventId){
      case "plus":
        setValues(prev => ({
          ...prev,
          inputVal : prev.inputVal + 1
        }))
        break;
      case "minus":
        return values.inputVal <= 0 ? values.inputVal :
        setValues(prev => ({
          ...prev,
          inputVal : prev.inputVal - 1
        }))
        break;
        default: 
        return ""
    }
  
  }
  function handleCart(event){
    let cartAction = event.target.id;
    let cartEl = document.getElementById("cart-card");
    switch(cartAction){
      case "showCart":
        cartEl.classList.toggle("active")
        break;
      case "add-btn":
        setValues(prev=>({
        inputVal : 0,
        cartVal : prev.cartVal + prev.inputVal
      }))
        break;
      case "delete-icon":
        setValues(prev=>({
          ...prev,
          cartVal : 0
        }))
        break;
      default:
        return cartAction
    }
  }
  const SHOE_PRICE = 125.00;
  return (
    <div className="App">
      <header className="main-header d-flex justify-content-between">
        <div className='nav-left'>
          <img src={icoMenu} alt="menu icon" className="menu-ico header-icon" onClick={handleNavbar}/>
          <img src={logo} alt="company logo" className="logo-ico"/>
          <nav className="nav-bar desk-nav">
            <div className="nav-ul desk-nav">
              <a href="#" className="navbar-item desk-nav">Collection</a>
              <a href="#" className="navbar-item desk-nav">Men</a>
              <a href="#" className="navbar-item desk-nav">Women</a>
              <a href="#" className="navbar-item desk-nav">About</a>
              <a href="#" className="navbar-item desk-nav">Contact</a>
            </div>
        </nav>
        </div>
        <div className="nav-right">
          <img src={cart} alt="cart icon" className="cart-icon header-icon" id="showCart" onClick={handleCart}/>
          <img src={avatar} alt="avatar icon"  className="header-avatar"/>
          {values.cartVal > 0 ? <span className="badge header-badge">{values.cartVal}</span> : "" }
        </div>
        <div className="card cart-card" id="cart-card">
        <div className="cart-header">
          <h4 className="cart-title">Cart</h4>
        </div>
        <div className="cart-body">
          { values.cartVal === 0 ?  <p className="empty-cart">Your cart is empty.</p> :
          <div className="cart-body-content">
              <div className="cart-item d-flex">
                <img src={product1Thumb} alt="product shoes"  className="cart-img"/>
                <div className="item-description">
                  <p className="product-title">Autumn Limited Edition...</p>
                  <p className="item-values">
                    <span className="cart-price">
                      $125.00 x
                    </span>
                    <span className="item-quantity"> {values.cartVal} </span>
                    <span className="item-total">${Number(values.cartVal) * SHOE_PRICE}.00</span>
                  </p>
                </div>
                <img src={icoDelete} alt="delete icon"  className="delete-icon" id="delete-icon" onClick={handleCart}/>
              </div>
              <button className="btn cart-btn">Checkout</button>
          </div>
          }
          
        </div>
      </div>
      </header>
      {/* MOBILE NAVBAR */}
      <div className="nav-overlay" id="nav-overlay">
        <nav className="nav-bar" id="nav-bar">
          <img src={icoClose} alt="close icon" className="nav-icoClose" onClick={handleNavbar}/>
          <div className="nav-ul">
            <a href="#" className="navbar-item">Collection</a>
            <a href="#" className="navbar-item">Men</a>
            <a href="#" className="navbar-item">Women</a>
            <a href="#" className="navbar-item">About</a>
            <a href="#" className="navbar-item">Contact</a>
          </div>
        </nav>
      </div>
      <section className="main-content">
        <Display/>
        <Data 
        values={values}
        handleInputVal = {handleInputVal}
        handleCart = {handleCart}
        />
      </section>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/JoelLH" target="_blank">Joel WebDev</a>.
      </div>
    </div>
  );
}

export default App;
