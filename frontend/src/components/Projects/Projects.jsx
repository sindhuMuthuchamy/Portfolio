import React, { useRef } from 'react'
import './Projects.css'
import getProjects from '../utils/data1'
import TechnologyCard from './TechnologyCard/TechnologyCard'
import Slider from 'react-slick'

const Projects = () =>{

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive: [
            {
                breakpoint:769,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1
                },
            },
            {
                breakpoint:426,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                },
            },
        ],
    }

    const slideRight = () =>{
        sliderRef.current.slickNext();
    }
    const slideLeft = () =>{
        sliderRef.current.slickPrev();
    }
    return(
        <>
        <section className="project-container" id='project'>
            <h4>Projects</h4>
            <div className="project-content">
                <div className="arrow-right" onClick={slideRight}>
                    <span class='material-symbols-outlined'>chevron_right</span>
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </div>
                <Slider ref={sliderRef} {...settings}>
                {getProjects().map((item)=>(
                    <TechnologyCard key={item.title} details= {item}/>
                ))}
                </Slider>
            </div>
        </section>
        </>
    )
}

export default Projects

