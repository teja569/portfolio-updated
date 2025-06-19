import "./Heroimg2Styles.css";
import React from "react";
import projectImg from "../assets/aboutme.png";

const Heroimg2 = ({ heading, text }) => {
  return (
    <div className="hero-img2">
      <img src={projectImg} alt="background" className="bg-img" />
      <div className="overlay" />
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Heroimg2;
