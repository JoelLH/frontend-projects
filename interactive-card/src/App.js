import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Cards from './components/Cards';


function App() {
  const[card, setCard] = useState({
    name:"Jane Appleseed", 
    number: "0000000000000000",
    month: "00",
    year: "00",
    cvc:"123",
    pop: false
  })

  function setPop(event){
    const{name, number, month, year, cvc} = card
    if(name != "" && number != ""  && month != "" && year != "" && cvc != ""){
        setCard(prev=>({
        ...prev,
        pop : !prev.pop
        }))
    }
    console.log(card.pop)
    event.preventDefault()
  }
  function maxLength(event){
    const {name, value} = event.target
    switch(name){
      case "name":
        setCard(prev=>({
        ...prev,
        [name] : value
        }))
        break;
      case "number":
        setCard(prev=>({
        ...prev,
        [name] : value.slice(0, 16)
        }))
        break;
      case "month":
        setCard(prev=>({
        ...prev,
        [name] : value.slice(0, 2)
        }))
        break;
      case "year":
        setCard(prev=>({
        ...prev,
        [name] : value.slice(0, 2)
        }))
        break
      case "cvc":
        setCard(prev=>({
        ...prev,
        [name] : value.slice(0, 3)
        }))
        break;
    }
  }



  return (
    <div className="App">
      <Cards card={card}/>
      <Form 
      // handleChange={handleChange}
      card={card}
      togglePop={setPop}
      handleLength={maxLength}
      />
    </div>
  );
}
export default App;