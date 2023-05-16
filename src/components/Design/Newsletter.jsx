import React from "react"
import "../../styles/Newsletter.css";


const Newsletter = () => {
  return (
    <section className="newsletter">
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h6 className="subtitle">Join us?</h6>
                    <h2> 
                     Explore our <span className="highlight">hidden</span> ideas and
                     subscribe!</h2>
                </div>

                <div className="newsletter__form">
                    <input type="email" placeholder="Email" />
                    <button className="secondary__btn subscribe__btn">Subscribe Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter