import "./AboutContentStyles.css";
import React from "react";
import { FaFileAlt, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

const AboutContent = () => {
  return (
    <div className="about-card-section">

      {/* Row 1: Resume centered */}
      <div className="row row-center">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="icon"><FaFileAlt size={30} /></div>
              <h3>Resume</h3>
            </div>
            <div className="flip-card-back">
              <a href="https://drive.google.com/file/d/1tfc76Ne7yqiIJTopULcQo5UaNTClnGTv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: CodeChef & LeetCode */}
      <div className="row">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="icon"><SiCodechef size={30} color="#5B4638" /></div>
              <h3>CodeChef</h3>
            </div>
            <div className="flip-card-back">
              <a href="https://www.codechef.com/users/tejasaii1729" target="_blank" rel="noopener noreferrer">
                View CodeChef
              </a>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="icon"><SiLeetcode size={30} color="#FFA116" /></div>
              <h3>LeetCode</h3>
            </div>
            <div className="flip-card-back">
              <a href="https://leetcode.com/tejasaii1729" target="_blank" rel="noopener noreferrer">
                View LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: GFG & LinkedIn */}
      <div className="row">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="icon"><SiGeeksforgeeks size={30} color="#2F8D46" /></div>
              <h3>GeeksforGeeks</h3>
            </div>
            <div className="flip-card-back">
              <a href="https://www.geeksforgeeks.org/user/tejasai45in/" target="_blank" rel="noopener noreferrer">
                View GFG
              </a>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="icon"><FaLinkedin size={30} color="#0A66C2" /></div>
              <h3>LinkedIn</h3>
            </div>
            <div className="flip-card-back">
              <a href="https://www.linkedin.com/in/tejasai-polamarasetty-b3246828a/" target="_blank" rel="noopener noreferrer">
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutContent;
