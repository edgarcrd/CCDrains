import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from '../dropdown/Dropdown'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri';
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
//import { RiMenuFill, iCloseFill } from "react-icons/ri";
import logo from '../../assets/logo.png'

// const Navbar = () => {

//   const [ toggleMenu, setToggleMenu ] = useState(false);

//   const [ click, setClick ] = useState(false);
//   const [ dropdown, setDropdown ] = useState(false);

//   const handleClick = () => setClick(!click);

//   const closeMobileMenu = () => setClick(false);



//   const [ isOpen, setIsOpen ] = useState(false);

//   return (
//     <div className='navbar'>
//         <Link to='/' className = 'navbar-logo'>
//           <img src={logo} alt='logo'/>
//         </Link>
//         <div className='menu-icon'>
//           {toggleMenu
//              ? <RiCloseFill color="#71BF44" size={27} onClick={() => setToggleMenu(false)}/>
//              : <GiHamburgerMenu color="#71BF44" size={27} onClick={() => setToggleMenu(true)}/>
//           }
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className='nav-item'>
//             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
//               About<GoPlus className="plus_pin"/>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
//               Services<GoPlus className="plus_pin"/>
//             </Link>
//             {dropdown && <Dropdown/>}
//           </li>
//           <li className='nav-item'>
//             <Link to='/area' className='nav-links' onClick={closeMobileMenu}>
//               Service Area<GoPlus className="plus_pin"/>
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='/work' className='nav-links' onClick={closeMobileMenu}>
//               Recent Work
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='/hiring' className='nav-links' onClick={closeMobileMenu}>
//               Now Hiring
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
//               <button type='button'>Contact Us</button>
//             </Link>
//           </li>
//         </ul>
//     </div>
//   )
// }

// export default Navbar;

const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false);

  const [ click, setClick ] = useState(false);

  const [ dropdown, setDropdown ] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
     window.innerWidth < 1050 ? setDropdown(false) : setDropdown(true);
  }

  const onMouseLeave = () => {
    window.innerWidth < 1050 ? setDropdown(false) : setDropdown(false);
 }

  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className='_navbar'>
      <div className='_navbar-links'>
        <Link className = '_navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </Link>
        <div className='menu-icon'>
        {click
            ? <RiCloseFill color="#71BF44" size={27} onClick={handleClick}/>
            : <GiHamburgerMenu color="#71BF44" size={27} onClick={handleClick}/>
          }
        </div>
        <div className={click ? '_navbar-links_container active' : '_navbar-links_container'}>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About<GoPlus className="plus_pin"/></a></p>
          <p
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ><a href="#services">Services<GoPlus className="plus_pin"/></a>{dropdown && <Dropdown/>}</p>
          <p><a href="#area">Service Area<GoPlus className="plus_pin"/></a></p>
          <p><a href="#work">Recent Work</a></p>
          <p><a href="#hiring">Now Hiring</a></p>
          <div className='_navbar-contact'>
            <button type='button'>Contact Us</button>
          </div>
        </div>
        {/* <div className='_navbar-contact'>
          <button type='button'>Contact Us</button>
        </div> */}
        {/* <div className='_navbar-menu'>
          {toggleMenu
            ? <RiCloseFill color="#71BF44" size={27} onClick={() => setToggleMenu(false)}/>
            : <GiHamburgerMenu color="#71BF44" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='_navbar-menu_container'>
              <div className='_navbar-menu_container-links'>
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About<GoPlus className="plus_pin"/></a></p>
                <p><a href="#services">Services<GoPlus className="plus_pin"/></a>{dropdown && <Dropdown/>}</p>
                <p><a href="#area">Service Area<GoPlus className="plus_pin"/></a></p>
                <p><a href="#work">Recent Work</a></p>
                <p><a href="#hiring">Now Hiring</a></p>
                <div className='_navbar-menu_container-links-contact'>
                  <button type='button'>Contact Us</button>
                </div>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default Navbar;