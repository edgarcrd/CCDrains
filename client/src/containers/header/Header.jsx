import React from 'react'
import './header.css'

import { SlLocationPin } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { TbMailFilled } from "react-icons/tb";



const Header = () => {
  return (
    <div className='_header'>
      <div className='info__links'>
        <div className="text-left">
          <a href="#"><FaLocationDot className="header_pin"/>  22 Messina Dr Unit R, Braintree, MA 02184</a>
        </div>
        <div className="text-center">
          <a href="#"><BsFillTelephoneFill className="header_pin"/>  Office: (781) 521-9306</a>
        </div>
        <div className="text-right">
          <a href="#"><TbMailFilled className="mail_pin"/>  info@ccdrains.com</a>
        </div>
      </div>
    </div>

  )
}

export default Header