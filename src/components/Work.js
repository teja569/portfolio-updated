import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React, { useState ,useEffect} from 'react';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedProject]);

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => (
          <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            onViewClick={() => setSelectedProject(val)}
          />
        ))}
      </div>

      {selectedProject && (
  <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      
      <img
        src={selectedProject.imgsrc}
        alt={selectedProject.title}
        className="modal-image"
      />

      <h2>{selectedProject.title}</h2>
      <p>
        {selectedProject.description}
        {" "}
        {selectedProject.comparison && selectedProject.improvementPercent !== undefined && (
          <>
            {selectedProject.comparison} This approach resulted in approximately{" "}
            <strong>{selectedProject.improvementPercent}%</strong> improvement
            over traditional systems.
          </>
        )}
      </p>

      {selectedProject.skillsUsed && (
        <>
          <h4>🔧 Skills Used:</h4>
          <ul className="skills-list">
            {selectedProject.skillsUsed.map((skill, index) => (
              <li key={index}>• {skill}</li>
            ))}
          </ul>
        </>
      )}

      <button className="btn" onClick={() => setSelectedProject(null)}>Close</button>
    </div>
  </div>
)}

    </div>
  );
};

export default Work;
