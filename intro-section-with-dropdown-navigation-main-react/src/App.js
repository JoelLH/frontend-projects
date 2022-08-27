import Header from './components/Header';
import './App.css';
import React from 'react';
import Main from './components/Main';

function App() {
  const [activeStates, setSates] = React.useState({
    activeFt: false, 
    activeCo: false,
    popState: false,
    id:"" }
  )
    function handleClick(e){
      const id = e.target.id
      switch(id){
        case "Features":
          setSates(prev=>({
            ...prev,
            activeFt: !prev.activeFt
          }))
          break;
        case "Company":
          setSates(prev=>({
          ...prev,
          activeCo: !prev.activeCo
        }))
        break;
        case "Close-ico":
          setSates(prev=>({
          ...prev,
          popState: !prev.popState
        }))
        break;
        case "Menu-ico":
          setSates(prev=>({
            ...prev,
          popState: !prev.popState
          }))
          break;
        default:
          return activeStates
      }
    }

  return (
    <div className="App">
      <Header 
      click={handleClick}
      state={activeStates}
      />
      <Main/>
    </div>
  );
}

export default App;
