import React from 'react';
import './skills.css';
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";


const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do ?</span>
            <span className='skillDesc'>I love to solve real world problems using my tech skills.<br></br></span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Core Technical Skills</h2>
                        <p>C, Java, Python, Shell Scripting, Git, GitHub, Unix/Linux, OOP, Design Patterns,
                             Unit Testing, CI/CD, Data Structures & Algorithms, Systems Programming, Debugging, Problem Solving, Regular Expressions</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Frontend & Backend Development</h2>
                        <p>JavaScript, TypeScript, React, REST APIs, Backend Development, Authentication, API Development, Front-end Development, Web Application Design</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Professional Strengths</h2>
                        <p>SDLC, Agile Methodologies, Team Collaboration, Project Management</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills