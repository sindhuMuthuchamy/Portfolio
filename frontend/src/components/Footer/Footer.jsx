import React from 'react'
import './Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icon">
            <a href=""><FaInstagramSquare style={{width:"50px", height:"50px"}}/></a>
            <a href=""><FaWhatsapp style={{width:"50px", height:"50px"}}/></a>
            <a href="https://github.com/sindhuMuthuchamy?tab=repositories"><FaGithub style={{width:"50px", height:"50px"}}/></a>
            <a href="www.linkedin.com/in/sindhu-muthuchamy"><CiLinkedin style={{width:"50px", height:"50px"}}/></a>
        </div>
        <div className="footer-text">Copyright © 2024 Sindhu Muthuchamy | All rights Reserved</div>
    </div>
  )
}

export default Footer
