import React from "react";

import "./About.css";

function About() {

  return (
      <div id="about">
        <span className="title">
            {"About"}
        </span>
        
        <div className="about-desc">
            I'm a 4th year Computer Science Co-op Student at Toronto Metropolitan University. I have experience in software development, design, and entrepreneurship. I'm also passionate about volunteerism, tech events, and accessibility.
            <br></br>
            <br></br>
            {/* if you want to read more about me, my work experience so far, and my involvement with student groups.
            <br></br>
            <br></br> */}
            I'm building a startup called PilotASD! <a href="https://www.linkedin.com/posts/thao-nnguyen_thedmz-dmzbasecamp-pitchcompetition-activity-7103894578981728256-SILY?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">Click Here</a> to learn more about it.  
        </div>
      </div>
  );

}
  
export default About;