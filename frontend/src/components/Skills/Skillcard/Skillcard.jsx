import React from 'react'
import './Skillcard.css'

const Skillcard = ({title, iconUrl, isActive, onClick}) =>{
    return(
        <div className={`skill-card ${isActive? "active" :""}`}
        onClick={() =>{onClick()}}>
            <div className="skill-icon">
                <img src={iconUrl} alt={title} />
            </div>
            <span>{title}</span>
        </div>
    )
}

export default Skillcard

