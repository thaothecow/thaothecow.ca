import React from "react";

import "./AboutMore.css";

class AboutContinued extends React.Component {
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
            <div id="about-continued">
            <span className="title">
                {"More about me"}
            </span>
            
            <div className="about-desc">
                Coming soon! 
            </div>
            </div>
        );
    }
}
  
export default AboutContinued;