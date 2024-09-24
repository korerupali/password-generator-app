
import { useState } from 'react';
import './App.css';
import { LCase, Number, Symbols, UCase } from './Data/PassChar';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


function App() {
  let [upperCase,setUpperCase]=useState(false)
  let [lowerCase,setLowerCase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)
  let [passLen,setPassLen]=useState(8)
  let [fPassword,setFpassword]=useState('')

  let createPassword=()=>{
    let finalPassword=''
     let charSet=''

    if(upperCase || lowerCase|| number||symbol ){
     
      if(upperCase) charSet+=UCase
      if(lowerCase) charSet+=LCase
      if(number) charSet+=Number
      if(symbol) charSet+=Symbols

      for(let i=0; i<passLen;i++){
        finalPassword+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }

      setFpassword(finalPassword)
      toast.success("password generated")

    }
    else{
      toast.error("please check the box")
    }
  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fPassword)
  }


  return (
    
      <>
      <div className='passwordBox'>
      <ToastContainer />
          <h2>Password Generator</h2>

          <div className='passwordBoxIn'> 
            <input type='text' value={fPassword} readOnly/>
            <button className='copyBtn' onClick={copyPass}>Copy</button>
          </div>

          <div className='passwordLength'>
             <label>Password Length:</label>
             <input type='number' max={20} min={8} value={passLen} onChange={(event)=>setPassLen(event.target.value)} />
          </div>

          <div className='passwordLength'>
             <label>Include uppercase letters:</label>
             <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)} />
          </div>

          <div className='passwordLength'>
             <label>Include lowercase letters:</label>
             <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}  />
          </div>

          <div className='passwordLength'>
             <label>Include numbers:</label>
             <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} />
          </div>

          <div className='passwordLength'>
             <label>Include Symbols:</label>
             <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)} />
          </div>
          <button className='btn' onClick={createPassword}>Generate Password</button>

      </div>
      </>
  
  );
}

export default App;
