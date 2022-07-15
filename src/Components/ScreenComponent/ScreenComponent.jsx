import React from 'react'
import { useReactMediaRecorder } from "react-media-recorder";
import {NavLink , Route, Routes} from 'react-router-dom'
import Home from '../Home/Home';

export default function ScreenComponent() {
const { status='', startRecording, stopRecording, mediaBlobUrl } =
  useReactMediaRecorder({ screen: true });

  return (
    <>
    <video src={mediaBlobUrl}  className="vidStyle" controls autoPlay loop />
    <div>
        <button className='btnStyle' onClick={startRecording}>Start Recording</button>
        <button className='btnStyle' onClick={stopRecording}>Stop Recording</button>
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

