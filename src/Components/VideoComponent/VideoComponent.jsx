import React, { useRef, useState } from 'react'
import { useReactMediaRecorder } from "react-media-recorder";
import {NavLink , Route, Routes} from 'react-router-dom'
import Webcam from 'react-webcam';


import Home from '../Home/Home';

export default function VideoComponent() {
  const { status='', startRecording, stopRecording, mediaBlobUrl } =
  useReactMediaRecorder({ video: true });
  let [isTrue, setIsTrue] = useState(false);

  const webRef= useRef(null);
  function openCam() {
    console.log('ddd');
    setIsTrue(true)
   }
   function closeCam(){
    setIsTrue(false)
   }


  return (
    <>
        {isTrue ? <Webcam className='webCamStyle' ref={webRef} />  : ''}
        <video src={mediaBlobUrl}  className="vidStyle" controls autoPlay loop />
      <div>
        <button className='btnStyle' onClick={  () =>{  startRecording(); openCam()   } }>Start Recording</button>
        <button className='btnStyle' onClick={  ()=> {    stopRecording();closeCam()   } }>Stop Recording</button>
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

