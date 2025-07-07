import React from "react";
import "./Home.css";

function Introduction() {
  return (
    <div id="home">
      <div className="name-container">
        <span className="name">
          {"Thao Nguyen"}
        </span>
      </div>
      
      <div className="intro-desc">
        <p className="intro-main">
        Creating human-centered experiences through software, design, and by fostering spaces for human connection and growth.
        </p>
        
        <p className="intro-links">
          Let's connect! Here's my <a href="https://www.linkedin.com/in/thao-nnguyen/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/thaothecow" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        
        {/* <p className="intro-portfolio">
          This updated portfolio website is still under development (so it may look a little messy) {" "}
          <a href="https://thaothecow.github.io/" target="_blank" rel="noopener noreferrer">Click here</a> to visit my old portfolio site.
        </p> */}
        
        <p className="intro-scroll">
          Scroll down for more!
        </p>
      </div>
    </div>
  );
}

export default Introduction;