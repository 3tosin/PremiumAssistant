import React from "react";
import "../../styles/Ceo.css";

import Image from "../../images/Ceo-Img.png";




const Ceo = () => {
  return (
    <section className="ceo__section">
    <div className="container">
        <div className="ceo__wrapper">
            <div className="ceo__content">
            <h2 class="aboutMe">Meet Me</h2>
                <h2><p className="ceo__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></h2>
                 <i class="ri-instagram-fill"></i>
                 <i class="ri-twitter-fill"></i>
            </div>
            
            <div className="ceo_img">
                <img src={Image} alt="CeoImg" />
            </div>
        </div>
    </div>
 </section>
  )
}

export default Ceo;