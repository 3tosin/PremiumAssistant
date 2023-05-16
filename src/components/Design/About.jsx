import React from "react";
import "../../styles/About.css";

import abtImg from "../../images/about-us3.jpg";

const chooseData = [
    {
        icon: "ri-wifi-line",
        title: "Fast working process",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro quam, placeat deleniti quos illo modi illum iure eveniet eos."
    },
    {
        icon: "ri-team-line",
        title: "Dedicated team",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro quam, placeat deleniti quos illo modi illum iure eveniet eos."
    },
    {
        icon: "ri-customer-service-2-line",
        title: "24/7 Hours customer Support",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro quam, placeat deleniti quos illo modi illum iure eveniet eos."
    },

]

const About = () => {
  return (
    <section id="about">
        <div className="container">
        <div className="about__wrapper">
            <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
                <h2>Save time managing your business with</h2>
                <h2 className="highlight">our best services</h2>
                <p className="description about__content-desc">
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. 
                     Sapiente ad nobis soluta doloribus 
                     similique voluptatem 
                     voluptatibus libero eius corporis quidem minus deleniti
                </p>
               <div className="choose__item-wrapper">
                {
                    chooseData.map((item,index) => (
                        <div className="choose__us-item" key={index}>
                            <span className="choose__us-icon">
                            <i className={item.icon}></i></span>
                    <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                    </div>
                    </div>
                    ))}
               </div>
            </div>
            <div className="about__img">
                <img src={abtImg} alt="aboutImg" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default About