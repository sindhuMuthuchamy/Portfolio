import React from 'react'
import './ContactMe.css'
// import { FaWhatsappSquare } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaSquareGithub } from "react-icons/fa6";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'


const ContactMe = () => {
  return (
    <section className="contact-container" id='contact'>
        <h4>Contact Me</h4>
        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard iconUrl={'./assets/images/mail-icon.png'}
                text={'sindhumuthuchamy@gmail.com'}/>
                <ContactInfoCard iconUrl={'./assets/images/phone-icon.png'}
                text={'+91 8778265394'}/>
                </div>
            <div style={{flex: 1}}>
                <ContactForm/>
            </div>
            {/* <div style={{flex: 1}}><FaInstagramSquare /></div>
            <div style={{flex: 1}}><FaSquareGithub/></div>
            <div style={{flex: 1}}><IoIosMail /></div> */}
        </div>
    </section>
  )
}

export default ContactMe
