import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <span className="about-title">About</span>
        <div className="about-desc">
          <p className="about-main">
            I'm a Computer Science graduate from Toronto Metropolitan University. I have experience in software development and design. I'm also passionate about volunteerism and accessibility.
          </p>
          {/* <p className="about-extra">
            I'm building a startup called PilotASD!{' '}
            <a href="https://www.linkedin.com/posts/thao-nnguyen_thedmz-dmzbasecamp-pitchcompetition-activity-7103894578981728256-SILY?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">Click Here</a> to learn more about it.
          </p> */}
          <p className="about-extra">
            Feel free to read more about my undergrad experience and work with student organizations <Link to="/about-continued">here</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;