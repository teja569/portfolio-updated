import "./WorkCardStyles.css";
import React from 'react';

const WorkCard = ({ imgsrc, title, text, source, onViewClick }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="project" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <button className="btn" onClick={() => onViewClick({ imgsrc, title, text, source })}>View</button>
          <a href={source} target="_blank" rel="noopener noreferrer" className="btn">Source</a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
