import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <>
    <section className='resume'>
        <h1>Resume</h1>
       <div className="resume-container" >
            <div className='resume-image'>
                <img src='./assets/images/resume-icon.png'  alt="resume-icon" />
            </div>
            <div className='resume-content'>
                <h1>Resume</h1>
                <p>You Can <b>View | Download </b> My Resume Here !</p>
                <p >{"   "}
                <a href='./assets/pdf/Sindhu-Muthuchamy-Resume.pdf' className="btn"> View</a>
                    <a href='./assets/pdf/Sindhu-Muthuchamy-Resume.pdf' className="btn">  Download</a></p>
            </div>
            </div>
        </section>
    </>
  )
}

export default Resume

