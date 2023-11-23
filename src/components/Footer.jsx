import React from 'react'
import './footer.css'
import { Dropdown } from 'react-bootstrap'

function Footer() {
  return (
    <div className='mainft'>
      <div className='footcont' >
        
         <h3>About</h3>
        <h3>jobs</h3>
        <h3>Blog</h3>
        <h3>Advertise</h3>
        <h3>Developers</h3>
        <h3>Gudelines</h3>
        <h3>Help</h3>
        <h3>Help forum</h3>
        <h3>Privacy</h3>
        <h3>Terms</h3>
        <h3>Cookies</h3>
        <h3>
          <Dropdown style={{opacity:'0.6'}}>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
       English
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item href="#/action-3">中国人</Dropdown.Item>
        <Dropdown.Item href="#/action-1">deutsch</Dropdown.Item>
        <Dropdown.Item href="#/action-2">espanol</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Francais</Dropdown.Item>
        <Dropdown.Item href="#/action-3">日本語</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Italiano</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Portugues</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tieng Viet</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bahasa Indonesia</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Francais</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </h3>
        <h3>SmugMug+Flickr</h3>
       
        <h3><i  style={{fontSize:'25px'}} class="fa-brands fa-square-facebook"></i></h3>
        <h3><i style={{fontSize:'25px'}} class="fa-brands fa-twitter"></i></h3>
        <h3><i style={{fontSize:'25px'}} class="fa-brands fa-instagram"></i></h3>

        
       
       
        
      </div>

    </div>
  )
}

export default Footer