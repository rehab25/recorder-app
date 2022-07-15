import React, { useEffect, useState } from 'react'
import { useReactMediaRecorder } from "react-media-recorder";
import {NavLink , Route, Routes} from 'react-router-dom'
import Home from '../Home/Home';


export default function AudioComponent() {
  const { status='', startRecording, stopRecording, mediaBlobUrl } =
  useReactMediaRecorder({ audio: true });

  const [seconds , setSeconds] = useState(0);
  const [Minutes , setMinutes] = useState(0);
  let [AppearCounter , setAppearCounter] = useState(false);
  var Timer;

function startCounter (){
  setAppearCounter(true)
  setSeconds(0);
  setMinutes(0);
}

function stopCounter() {
  setAppearCounter(false)
  clearInterval(Timer); 
}

useEffect(  ()=>{
    Timer = setInterval(() => {
      setSeconds(seconds+1);
      if(seconds === 59){
          setMinutes(Minutes+1);
          setSeconds(0);
      }
  }, 1000);
  return ()=> clearInterval(Timer)
} )

  return (
    <>
    <div>
        {AppearCounter?    <div className='divCounter'>
        <p>{Minutes<10? '0'+Minutes : Minutes} : {seconds<10 ? '0'+seconds : seconds}</p>   </div> :'' } 
    </div>
  
    <audio src={mediaBlobUrl}  className="audioStyle" controls autoPlay loop></audio>
    <div>
        <button className='btnStyle' onClick={  ()=>  {  startRecording() ; startCounter()}  }>Start Recording</button>
        <button className='btnStyle'  onClick={  ()=> { stopCounter(); stopRecording()}   }>Stop Recording</button>
    </div>
    <div className='divBack'>
        <button className='btnback'> <NavLink className="txtSecondaryColor txtDecoration-none" to='/'>Back</NavLink> </button>
    </div> 
    <Routes>    
        <Route path='/home'  element={     <Home/>  }   />
    </Routes>
    </>
  )   
}


