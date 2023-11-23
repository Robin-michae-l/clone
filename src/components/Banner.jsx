import React from 'react'
import './Banner.css'
import { Button } from 'react-bootstrap'
import cloude from '../images/image2.avif'

function Banner() {
  return (
    <div className="ban">
     <img id='bnimg' src={cloude} alt="Banner image" />
    <div className='Bannercont'>
      <div id='c1'>
          <h1>Find your inspiration</h1>
      </div>
      <div id='c2'>
        <p id='p1'>Join the Flickr community,home to tens of billions of
      </p>
      <p id='p2'> photos and 2 million groups</p>
      </div>
      <div className='btun'>
      <Button id='bt3'  variant="light">Start for free</Button>{' '}
      </div>

      <div id='ftc'>
        <h2>Clouds</h2>
        <p>By Severus Snape</p>
      </div>
      
    </div>
    </div>
  )
}

export default Banner