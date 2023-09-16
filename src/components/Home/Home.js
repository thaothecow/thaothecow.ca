import React from "react";

import "./Home.css";

class Introduction extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1",
        visible: true
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
        return (
            <div id="home">
              <span className="name">
                  {"Thao Nguyen"}
              </span>
              
              <div className="intro-desc">
                  I create as a developer, designer, and story-teller. I'm interested in software development, design, human-computer interaction, and entrepreneurship.
                  <br></br>
                  <br></br>
                  Let's connect! Here's my <a href="https://www.linkedin.com/in/thao-nnguyen/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/thaothecow" target="_blank" rel="noopener noreferrer">GitHub</a>.
                  <br></br>
                  <br></br>
                  This updated portfolio website is still under develoment (so it may look a little messy) {" "}
                  <a href="https://thaothecow.github.io/" target="_blank" rel="noopener noreferrer">Click here</a> to visit my old portfolio site.
                  <br></br>
                  <br></br>
                  Scroll down for more!
    
              </div>
            </div>
        );
    }
}
  
export default Introduction;