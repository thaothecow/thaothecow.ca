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
                Creating through the lens of a story-teller, designer, and problem solver. Interested in software development, design, and entrepreneurship opportunities.

                Let's connect!
            </div>
            <div className="intro-warning">
            This site is still under development but contains my most updated portfolio. <a href="https://thaothecow.github.io/" target="_blank" rel="noopener noreferrer">Click here</a> to visit my old portfolio site.
            </div>
            </div>
        );
    }
}
  
export default Introduction;