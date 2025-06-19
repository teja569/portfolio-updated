import "./HeroimgStyles.css"
import React, { useState, useEffect } from 'react'
import IntroImg from "../assets/intro-bg.png"
import { Link } from "react-router-dom"
const Heroimg = () => {
  const fullText = 'Hi! I am Teja Sai';
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const typing = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(typing);
    } else {
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 500);
      return () => clearTimeout(cursorTimeout);
    }
  }, [index, fullText]);
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"
        src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p className="typing-text">{text}{showCursor && <span className="cursor">|</span>}</p>
        <h1>Full-Stack Developer</h1>
        <div className="buttons">
        <Link to="/project"
        className="btn"><span>Projects</span></Link>
        <Link to="/contact"
        className="btn btn-light"><span>Contact</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg