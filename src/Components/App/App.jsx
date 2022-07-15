import './App.css';
import {NavLink , Route, Routes} from 'react-router-dom'
import AudioComponent from '../AudioComponent/AudioComponent';
import VideoComponent from '../VideoComponent/VideoComponent';
import ScreenComponent from '../ScreenComponent/ScreenComponent';
import Home from '../Home/Home';
import imgg  from '../../Imgs-record/wave.svg'

function App() {
    return (
      <>
      <div className='headerStyle'>
        
         <NavLink className='NavLinkStyle txtDecoration-none' to='/home'>Home</NavLink> 
         <NavLink className='NavLinkStyle txtDecoration-none' to='/AudioComponent'>Audio Record</NavLink> 
        <NavLink className='NavLinkStyle txtDecoration-none' to='/VideoComponent'>Video Record</NavLink>
        <NavLink className='NavLinkStyle txtDecoration-none' to='/ScreenComponent'>Screen Record</NavLink>
      </div>
      <div className='imgLogo'><img src={imgg} /></div>

      <div className='pt-5'>
          <Routes>     
              <Route path='/home'  element={     <Home       />   }   />
              <Route path='/AudioComponent'  element={     <AudioComponent       />   }   />
              <Route path='/VideoComponent'  element={     <VideoComponent       />   }   />
              <Route path='/ScreenComponent'  element={     <ScreenComponent       />   }   />

              <Route path="/" element={<Home />} />

          </Routes> 
      </div>
      </>
  ); 
}
export default App;