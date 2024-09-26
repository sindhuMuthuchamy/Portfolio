import React from 'react'
import './Hero.css'

const Hero = ()=>{
    return(
    <>
    <div className='hero-container' id='hero'>
        <div className='hero-content'>
            <h5>I'm</h5>
            <h2>Sindhu Muthuchamy</h2>
            <h5>Passionate Web Developer | MERN Stack </h5>
            <p>I am a passionate and dedicated MERN stack developer with a solid foundation in building dynamic web applications using MongoDB, Express.js, React, and Node.js. As a fresher, I have gained hands-on experience through personal and academic projects, where I’ve developed skills in creating RESTful APIs, managing databases, and crafting intuitive front-end interfaces. I am eager to learn, grow, and contribute to innovative projects, staying updated with the latest trends in web development to deliver seamless and efficient user experiences.</p>
        </div>
        <div className='hero-img'>
        
            <div className='flex flex-wrap w-[100%]'>
            <div className='tech-icon w-[100%]'>
                    <img src='./assets/images/HTML-icon.png' />
                </div>
                <img src="./assets/images/sindhu-avatar.png" alt=""  className='h-500px'/>
                <div className='tech-icon w-[100%]'>
                    <img src='./assets/images/CSS-icon.png' />
                </div>
                <div className='tech-icon w-[100%]'>
                    <img src='./assets/images/Tailwind-icon.png' />
                </div>
                <div className='tech-icon w-[100%]'>
                    <img src='./assets/images/JS-icon.png' />
                </div>
                <div className='tech-icon w-[100%]'>
                    <img src='./assets/images/React-icon.png' />
                </div>
                
                <div className='tech-icon w-[100%]'>
                    <img src='./assets/images/Nodejs-icon.png' />
                </div>
                <div className='tech-icon w-[100%]'>
                    <img src='./assets/images/Expressjs-icon.png' />
                </div>
                <div className='tech-icon w-[100%]'>
                    <img src='./assets/images/DB-icon.png' />
                </div>
                </div>
                
            
        </div>
    </div>
      
    </>
    )
}

export default Hero 