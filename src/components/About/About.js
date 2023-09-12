import React from "react";

import "./About.css";

class About extends React.Component {
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
                {"About"}
            </span>
            
            <div className="intro-desc">
                I am a 4th year Computer Science Student at Toronto Metropolitan University. I have experience in software development, design, and entrepreneurship.
                <br></br>
                I am also passionate about volunteerism, tech-related events, and accessibility.
                If you'd like to read a bit more about me and my time as an undergrad, my work experience so far 
                and my work with student groups and such, feel free to here.
            </div>
            </div>
        );
    }
}
  
export default About;