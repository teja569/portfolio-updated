import { FaHome, FaPhone,FaMailBulk, FaGithub, FaLinkedin ,FaTwitter} from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
              <p>Visakhapatnam,</p>
              <p>Andhra Pradesh</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91-77308-31829</h4>
            
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>tejasaii1729@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me!</h4>
          <p>I'm Teja Sai, a Full-Stack Developer skilled in React, Node.js, and modern web technologies. I enjoy building user-friendly apps and exploring AI and design. I'm looking for opportunities to learn, grow, and make an impact.
          </p>
          <div className="social">
            <FaGithub size={20} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaTwitter size={20} style={{color:"#fff",marginRight:"1rem"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer