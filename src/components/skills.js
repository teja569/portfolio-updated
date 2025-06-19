import "./skillsstyles.css";
import React, { useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaLightbulb } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiC,
  SiMysql,
  SiArduino,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skillsByCategory = {
  Frontend: [
    { name: "HTML5", level: 80, icon: <SiHtml5 color="#E44D26" /> },
    { name: "CSS3", level: 85, icon: <SiCss3 color="#264de4" /> },
    { name: "JavaScript", level: 70, icon: <SiJavascript color="#f0db4f" /> },
    { name: "React.js", level: 75, icon: <FaReact color="#61DBFB" /> },
    { name: "jQuery", level: 70, icon: <SiJavascript color="#0769ad" /> },
    { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "Figma", level: 75, icon: <FaFigma color="#F24E1E" /> },
  ],
  Backend: [
    { name: "Node.js", level: 80, icon: <FaNodeJs color="#3c873a" /> },
    { name: "Express.js", level: 75, icon: <SiExpress color="#000" /> },
    { name: "MongoDB", level: 85, icon: <SiMongodb color="#4DB33D" /> },
    { name: "REST API", level: 80, icon: <FaReact color="#10B981" /> },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85, icon: <FaGitAlt color="#F1502F" /> },
    { name: "Postman", level: 85, icon: <SiJavascript color="#FF6C37" /> },
    { name: "Arduino", level: 75, icon: <SiArduino color="#00979D" /> },
    { name: "SQL", level: 80, icon: <SiMysql color="#00758F" /> },
    { name: "C Programming", level: 70, icon: <SiC color="#A8B9CC" /> },
  ],
  "Soft Skills": [
    { name: "Teamwork", level: 85, icon: <FaLightbulb color="#facc15" /> },
    { name: "Problem Solving", level: 90, icon: <FaLightbulb color="#facc15" /> },
    { name: "Communication", level: 80, icon: <FaLightbulb color="#facc15" /> },
    { name: "Adaptability", level: 85, icon: <FaLightbulb color="#facc15" /> },
  ],
};

const sidebarIcons = {
  Frontend: <FaReact size={20} />,
  Backend: <FaNodeJs size={20} />,
  Tools: <FaGitAlt size={20} />,
  "Soft Skills": <FaLightbulb size={20} />,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="skills-wrapper">
      <div className="skills-wrapper">
  <div className="skills-container">
    
    <div className="skills-header">
      {Object.keys(skillsByCategory).map((category) => (
        <button
          key={category}
          className={`sidebar-btn ${activeCategory === category ? "active" : ""}`}
          onClick={() => setActiveCategory(category)}
        >
          {sidebarIcons[category]}
          <span>{category}</span>
        </button>
      ))}
    </div>

    <div className="skills-display">
      <h2 className="skills-title">{activeCategory}</h2>
      <div className="skills-grid">
        {skillsByCategory[activeCategory].map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-info">
              <span className="icon">{skill.icon}</span>
              <span className="name">{skill.name}</span>
              <span className="level">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
    </div>
  );
};

export default Skills;