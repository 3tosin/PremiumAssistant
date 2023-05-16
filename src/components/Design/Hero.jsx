import React from "react";
import "../../styles/Hero.css";

import heroDarkImg from "../../images/support.png";
import lightImg from "../../images/Hero-light.png";
 
const Hero = ({theme}) => {
  return ( <section className="hero__section" id="home">
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <div>
                <h2>Get In Touch With</h2>
                <h2>The Time Machine To</h2>
                <h2 className="highlight">Get Your Time Back</h2>
                </div>
                <p className="description">A Powerful Machine Designed to Give You Your Time Back Lorem Ipsum dolor sit ame</p>
                <div className="hero__btns">
                    <button className="primary__btn">Get Started Now</button>
                    <button className="secondary__btn">Discover More</button>
                </div>
            </div>
            <div className="hero__img">
            <img src={ theme==='light-theme' ? lightImg : heroDarkImg} alt="hero-img" />
            </div>
        </div>
    </div>

   </section>
   
    
  )
}

export default Hero;