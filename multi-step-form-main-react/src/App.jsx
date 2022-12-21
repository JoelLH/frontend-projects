import { useState } from 'react'
// import {store} from "./app"
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import PeInfo from './components/Peinfo'
import Header from './components/Header'
import Plan from './components/Plan'
import AddOns from './components/Add-ons'
import Finish from './components/Finish'
import EndText from './components/Endtext'


function App() {
  const [peInfo, setPeInfo] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const [peInfoValid, setPeInfoValid] = useState({
    isNameValid: true,
    isEmailValid: true,
    isPhoneValid: true
  })

  const [planInfo, setPlanInfo] = useState({
        isMonth: true,
        planName : "",
        planPrice : 0
    })

    const [addOns, setAddOns] = useState({
      isOnline : false,
      isStorage : false,
      isProfCuz : false
    })

  function handlePeInfo(e){
    const peInfoTarget = e.target
    const peInfoId = peInfoTarget.id;
    const emailRegex = /\w+@\w+[.]\w+/gi
    const phoneRegex = /[0-9]/gm

    switch (peInfoId) {
      case "name":
          setPeInfo(prev => ({
            ...prev,
            name: peInfoTarget.value
          }))
          setPeInfoValid(prev=>({
            ...prev,
            isNameValid : /[a-z]/gi.test(Number(peInfoTarget.value))
          }))
          break;
        case "email":
          setPeInfo(prev => ({
            ...prev,
            email: peInfoTarget.value
          }))
          if (!emailRegex.test(peInfoTarget.value)){
            setPeInfoValid(prev=>({
              ...prev,
              isEmailValid : false
            }))
          }else{setPeInfoValid(prev=>({
              ...prev,
              isEmailValid : true
            }))}
          break;
        case "phoneNum":
          setPeInfo(prev => ({
            ...prev,
            phone: peInfoTarget.value.slice(0,11)
          }))
          setPeInfoValid(prev=>({
            ...prev,
            isPhoneValid : phoneRegex.test(Number(peInfoTarget.value))
          }))
          break;
    
      default:
        break;
    }
  }

  function handlePeriod(){
    setPlanInfo(prev=>({
      ...prev,
      isMonth: !prev.isMonth
    }))
  }

  function selectPlan(e){
    
    const { id, value } = e.target;

    setPlanInfo(prev=>({
      ...prev,
      planName: id,
      planPrice: value
    }))
  }

  function selectAddOns(e){
    const {id} = e.target

    if(id === "online"){
      setAddOns(prev =>({
        ...prev,
        isOnline: !prev.isOnline
      }))
    }else if( id === "profile"){
      setAddOns(prev =>({
        ...prev,
        isProfCuz: !prev.isProfCuz
      }))
    }else{
      setAddOns(prev =>({
        ...prev,
        isStorage: !prev.isStorage
      }))
    }
  }

  return (
    <div id='App'>
    <Routes>
      <Route path="/" element={<PeInfo 
        peInfo={peInfo}
        peInfoValid={peInfoValid}
        handlePeInfo={handlePeInfo}
        />
        }/>
      <Route path="/plan" element={<Plan 
        planInfo={planInfo}
        handlePeriod = {handlePeriod}
        selectPlan = {selectPlan}/>
        }/>
      <Route path="/addons" element={<AddOns 
        selectAddOns={selectAddOns}
        addOns = {addOns}
        planInfo={planInfo}
        />}/>
      <Route path="/finish" element={<Finish 
      planInfo={planInfo}
      addOns={addOns}
      handlePeriod = {handlePeriod}/>}/>
      <Route path="/endtext" element={<EndText />}/>
    </Routes>
    </div>
  )
}

export default App
