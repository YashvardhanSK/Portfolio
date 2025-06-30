import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">    
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Yashvardhan</span>  <br />Software Developer</span>
                <p className="introPara">I am skilled software developer with a good understanding of design<br /> principles and patterns that I can apply to create robust softwares.</p>
                <Link><button className="button"><img src={btnImg} alt="Hire" className="buttonImage" /> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile"  className="bg" />
    </section>
    )
}

export default Intro;