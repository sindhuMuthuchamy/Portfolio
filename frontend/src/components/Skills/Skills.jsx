import React, {useState}  from 'react'
import './Skills.css'
import getSkills from '../utils/data'
import Skillcard from './Skillcard/Skillcard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = ()=> {

    const [selectedSkills , setSelectedSkills] = useState(getSkills()[0]);

    const handleSelectedSkill = (data) =>{
        setSelectedSkills(data)
    }

    return(
        <>
        <section className='skills-container' id='skills'>
            <h5>Technical Skills</h5>

        <div className='skills-content'>
            <div className="skills">
                {getSkills().map((item)=> (
                    <Skillcard
                        key={item.title}
                        iconUrl = {item.icon}
                        title = {item.title}
                        isActive={selectedSkills.title === item.title}
                        onClick={()=>{
                            handleSelectedSkill(item);
                        }}
                        />
                ))}
            </div>
            <div className="skills-info">
                <SkillsInfoCard
                heading = {selectedSkills.title}
                skills={selectedSkills.skills}/>
            </div>
        </div>
        </section>
        </>
    )
}
export default Skills 