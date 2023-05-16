
import React from "react"
import "../../styles/Team.css";

import team01 from "../../images/Ceo-Img.png";
import team02 from "../../images/tm3.png";
import team03 from "../../images/to1.png";
import team04 from "../../images/tm2.png";

const teamMembers = [
    {
        imgUrl: team01,
        name: "Austin Hally",
        position: "Product Manager"
        
    },
    {
        imgUrl: team02,
        name: "Joel Curry",
        position: "Human Resource Manager"
        
    },
    {
        imgUrl: team03,
        name: "Steven Berry",
        position: "Web Developer"
        
    },
    {
        imgUrl: team04,
        name: "Maxwell Hudson",
        position: "UI/UX Developer"
        
    }
]

const Team = () => {
  return (
    <section className="our__team">
    <div className="container">
        <div className="team__content">
            <h6 className="subtitle">Our Team</h6>
            <h2>Meet with <span className="highlight">our team</span></h2>
        </div>
      
        <div className="team__wrapper">
        {
                teamMembers.map((item,index) =>(
                    <div className="team__item" key={index}>
                <div className="team__img">
                    <img src={item.imgUrl} alt="team" />
                </div>
                <div className="team__details">
                    <h4>{index.name}</h4>
                    <p className="description">{item.position}</p>

                    <div className="team__member-social">
                        <span><i class="ri-linkedin-line"></i></span>
                        <span><i class="ri-twitter-line"></i></span>
                    </div>
                </div>
            </div>
                )) }
        </div>
    </div>
    </section>
  )
}

export default Team