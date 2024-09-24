import React, { useState } from 'react';
import "./Navbar.css";
// import { Bars3Icon } from '@heroicons/react/24/solid'
import { IoClose } from "react-icons/io5";
import MobileNav from './MobileNav/MobileNav';
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [toggleMenu, setToggle] = useState(false)

  const handleToggle=()=>{
      setToggle(!toggleMenu)
  }

  return (
    <>
      
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src="./assets/images/logo-no-background.png" alt="main logo" className="w-[5%]" />

          <ul>
            <li><a className="menu-item" href="#hero">Home</a></li>
            <li><a className="menu-item" href="#skills">Skills</a></li>
            <li><a className="menu-item" href="#project">Project</a></li>
            <li><a className="menu-item" href="#contact">Contact Me</a></li>
            <button className="contact-btn">Hire Me</button>
          </ul>
          <button onClick={handleToggle} className="block md:hidden ml-2 pl-1 menu-btn">
                <span>{toggleMenu ? <IoClose className='text-white h-8 w-8'/> : <FiMenu className='text-white h-8 w-8' />}</span>
                </button>
        </div>
      </nav>

      {toggleMenu && <nav className="block md:hidden mobile-menu" >
        
        <div className='mobile-menu-container '>
        <img src="./assets/images/logo-no-background.png" alt="main logo" />
                <ul onClick={()=>setToggle(!toggleMenu)} className="flex flex-col text-2xl items-center gap-5 mt-2">
                    <li><a className='menu-item' href="/">Home</a></li>
                    <li><a  className='menu-item' href="#about">Skills</a></li>
                    <li><a className='menu-item' href="#project">Project</a></li>
                    <li><a className='menu-item' href="#resume">Contact Me</a></li>
                    <button className="contact-btn">Hire Me</button>
                </ul>
                </div>
            </nav>}
           
    </>
  );
};

export default Navbar;
