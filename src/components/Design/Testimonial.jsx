import React from "react"
import "../../styles/Testimonial.css";

import Slider from "react-slick";
import t01 from "../../images/to1.png"
import t02 from "../../images/Ceo-Img.png"

const Testimonial = () => {

  const setting = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed:2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true

  };
  return(
   <section>
    <div className="container">
      <div className="slider__content-top">
        <h6 className="subtitle">Testimonials</h6>
        <h2>Hear from some of our{""}
         <span className="highlight"> loyal customers</span>
         </h2>
      </div>
      <div className="slider__wrapper">
      <Slider {...setting}>
      <div className="slider__item">
        <p className="description">Lorem ipsum dolor sit amet,
         consectetur adipisicing elit. Aspernatur odit adipisci cupiditate. 
         Quibusdam eos asperiores consectetur illum amet sunt in
         non aliquam, Lorem ipsum dolor sit amet consectetur.
         vel ea dignissimos tenetur, sequi porro voluptates nemo?</p>

         <div className="customer__details">
          <div className="customer__img">
            <img src={t01} alt="" />
          </div>
          <div>
            <h5 className="customer__name">David Stones</h5>
            <p className="description">Director Works</p>
          </div>
         </div>
      </div>
      <div className="slider__item">
        <p className="description">Lorem ipsum dolor sit amet,
         consectetur adipisicing elit. Aspernatur odit adipisci cupiditate. 
         Quibusdam eos asperiores consectetur illum amet sunt in
         non aliquam, Lorem ipsum dolor sit amet consectetur.
         vel ea dignissimos tenetur, sequi porro voluptates nemo?</p>

         <div className="customer__details">
          <div className="customer__img">
            <img src={t02} alt="" />
          </div>
          <div>
            <h5 className="customer__name">Megan Ashley</h5>
            <p className="description">Director Accounts</p>
          </div>
         </div>
      </div>
      <div className="slider__item">
        <p className="description">Lorem ipsum dolor sit amet,
         consectetur adipisicing elit. Aspernatur odit adipisci cupiditate. 
         Quibusdam eos asperiores consectetur illum amet sunt in
         non aliquam, Lorem ipsum dolor sit amet consectetur.
         vel ea dignissimos tenetur, sequi porro voluptates nemo?</p>

         <div className="customer__details">
          <div className="customer__img">
            <img src={t01} alt="" />
          </div>
          <div>
            <h5 className="customer__name">Marriene Davis</h5>
            <p className="description">Director Projects</p>
          </div>
         </div>
      </div>
      <div className="slider__item">
        <p className="description">Lorem ipsum dolor sit amet,
         consectetur adipisicing elit. Aspernatur odit adipisci cupiditate. 
         Quibusdam eos asperiores consectetur illum amet sunt in
         non aliquam, Lorem ipsum dolor sit amet consectetur.
         vel ea dignissimos tenetur, sequi porro voluptates nemo?</p>

         <div className="customer__details">
          <div className="customer__img">
            <img src={t01} alt="" />
          </div>
          <div>
            <h5 className="customer__name"> Davis Munrow</h5>
            <p className="description">Director Accounts</p>
          </div>
         </div>
      </div>



        
      

    </Slider>
      </div>
    </div>
   </section>
  )
}

export default Testimonial