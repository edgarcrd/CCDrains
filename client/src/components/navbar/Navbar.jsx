import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='_navbar'>
      <img src={logo} alt='logo'/>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#area">Service Area</a></li>
        <li><a href="#work">Recent Work</a></li>
        <li><a href="#hiring">Now Hiring</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  )
}

export default Navbar
