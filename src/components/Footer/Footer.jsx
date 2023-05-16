import React from "react"
import "./Footer.css";


const quickLinks01 = [
  {
    path: "#",
    display:"Marketing"
  },
 {
    path: "#",
    display:"Sales"
  },
  {
    path: "#",
    display:"Technology"
  },
]
const quickLinks02 = [
  {
    path: "#",
    display:"Projects"
  },
 {
    path: "#",
    display:"Contacts"
  },
  {
    path: "#",
    display:"Open Sources"
  },
]

const quickLinks03 = [
  {
    path: "#",
    display:"Jobs"
  },
 {
    path: "About",
    display:"About"
  },
  {
    path: "#",
    display:"Blog"
  },
]
const Footer = () => {
  const year = new Date().getFullYear()
  return (
   <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <h2>PremiumAssistant</h2>
          <p className="description">Grow with us</p>

          <p className="small__text description">Lorem ipsum dolor sit amet consectetur
           adipisicing elit.Eos blanditiis odit modi enim facilis dignissimos
            quae eaque repudiandae aliquid optio.</p>
        </div>

        <div className="footer__quick-links">
          <h3 className="quick__links-title">Services</h3>
          <ul className="quick__links">
            {
              quickLinks01.map((item,index)=>(
                <li className="quick__link-item" key={index}><a href={item.path}>{item.display}</a></li>
              ))
            }
          </ul>
        </div>
        <div className="footer__quick-links">
          <h3 className="quick__links-title">Company</h3>
          <ul className="quick__links">
            {
              quickLinks02.map((item,index)=>(
                <li className="quick__link-item" key={index}><a href={item.path}>{item.display}</a></li>
              ))
            }
          </ul>
        </div>
        <div className="footer__quick-links">
          <h3 className="quick__links-title">Solutions</h3>
          <ul className="quick__links">
            {
              quickLinks03.map((item,index)=>(
                <li className="quick__link-item" key={index}><a href={item.path}>{item.display}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
      <p className="copyright">Copyright {year}. Developed by Oluwatosin 
      Adeniyi. All rights reserved.{""}</p>
    </div> 
   </footer>
  )
}

export default Footer