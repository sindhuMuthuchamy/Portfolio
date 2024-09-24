import React from 'react'
import './TechnologyCard.css'
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosNavigate } from "react-icons/io";

const TechnologyCard = ({ details }) => {
  return (
    <div className='technology-card'>
      <h6>{details.title}</h6>
      
      <div className="project-details">
        <img src={details.image} alt={details.title} />
      </div>


      <div className="technology-card-link">
      <ul>
        {details.technology.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
        <a href={details.github} target="_blank" rel="noopener noreferrer" className="github-link">
        <FaSquareGithub style={{width:"50px", height:"50px"}}/>
        </a>
        <a href={details.website} target="_blank" rel="noopener noreferrer" className="website-link">
        <IoIosNavigate style={{width:"50px", height:"50px"}}/>
        </a>
      </div>

    </div>


  )
}

export default TechnologyCard
