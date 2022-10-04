import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './Header';
import PhoneHeader from './PhoneHeader';
import Body from './Body';
import 'bootstrap/dist/css/bootstrap.min.css';


require('dotenv').config()

function App() {
  const [smallScreen, setSmallScreen] = useState(false)
  useEffect(() => {
    if (window.innerWidth < 990)
    setSmallScreen(true)
    else
    setSmallScreen(false)
  },[])
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 990)
      setSmallScreen(true)
      else
      setSmallScreen(false)    
}

    window.addEventListener('resize', handleResize)
  })

  return (
    <>
    <div className="App">
     {
      !smallScreen && (
        <Header/>
      )
     } 
     {
      smallScreen && (
        <PhoneHeader/>
      )
     } 
    </div>
     <Body/>
    </>
    
  );
}

export default App;
