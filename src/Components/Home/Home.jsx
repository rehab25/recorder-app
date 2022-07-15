import React from 'react'
import imgg  from '../../Imgs-record/q1.jpg'


export default function Home() {
  return (
  <>
    <div className='parentHome'>
        <div className='txtSecondaryColor divtxtHome'><p>"Recorder app" supports for playing variety of common media types, so that You can play audio or video from media files and store them into your filesystem
            supports for playing variety of common media types.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur corrupti eius unde omnis obcaecati deleniti.</p>
            </div>
        <div className='divImg'>
            <img src={imgg} />
        </div>
    </div>
  </>
  )
}
