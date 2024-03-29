import React, { useState } from 'react'
import './navbar.css'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri';
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
//import { RiMenuFill, iCloseFill } from "react-icons/ri";
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About<GoPlus className="plus_pin"/></a></p>
    <p><a href="#services">Services<GoPlus className="plus_pin"/></a></p>
    <p><a href="#area">Service Area<GoPlus className="plus_pin"/></a></p>
    <p><a href="#work">Recent Work</a></p>
    <p><a href="#hiring">Now Hiring</a></p>
  </>
)

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false);

  const [ click, setClick ] = useState(false);

  const handleClick = () => setClick(!click);

  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className='_navbar'>
      <div className='_navbar-links'>
        <div className = '_navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='_navbar-links_container'>
          <Menu/>
          {/* <p className="nav-button"><a href="#contact">Contact Us</a></p> */}
        </div>
        <div className='_navbar-contact'>
          <button type='button'>Contact Us</button>
        </div>
        <div className='_navbar-menu'>
          {toggleMenu
            ? <RiCloseFill color="#71BF44" size={27} onClick={() => setToggleMenu(false)}/>
            : <GiHamburgerMenu color="#71BF44" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='_navbar-menu_container scale-up-center'>
              <div className='_navbar-menu_container-links'>
                <Menu/>
                <div className='_navbar-menu_container-links-contact'>
                  <button type='button'>Contact Us</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;