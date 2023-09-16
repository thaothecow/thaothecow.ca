import React from "react";

import "./Projects.css";

class Projects extends React.Component {
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

        const projects = {
            "Portfolio Website (2023) (in progress)": {
                desc:
                  "Revamping my portfolio website.",
                techStack: "React",
                link: "",
                open: ""
              },
            "Discord Bot": {
                desc:
                  "Multi-purpose discord bot that responds to certain users, terms, commands and records data.",
                techStack: "Python, Discord API (Discord.py Library), NASA API, Urban Dictionary API",
                link: "https://github.com/thaothecow/Goblin-Bot",
                open: ""
              },
            "eyePercept - EngHack (2021)": {
                desc:
                  "A program that identifies objects to prevent blind individuals from bumping into objects",
                techStack: "Python, OpenCV",
                link: "https://github.com/thaothecow/eyePercept---Hackathon-",
                open: ""
              },
            "Portfolio Website (2021)": {
                desc:
                  "Personal portfolio website to showcase all my skills and interests",
                techStack: "HTML, CSS and JavaScript",
                link: "https://thaothecow.github.io/",
                open: ""
              },
            };
        
        const uiux_projects = {
            "PilotASD Prototype (2023) (in progress)": {
                desc:
                  "AI-powered platform that simplifies the access to tailored resources for autistic youth.",
                techStack: "Figma",
                link: "https://www.figma.com/proto/ew3UDjF09KTFXeHTczoqFz/PilotASD?page-id=0%3A1&type=design&node-id=1-2&viewport=82%2C654%2C1&t=1wWDz06qjwtrX7nJ-1&scaling=scale-down&mode=design",
                open: ""
              },
            "See Bay (2022)": {
                desc:
                  "A Retail web-application prototype (Figma) for elderly users with vision impairments.",
                techStack: "Figma",
                link: "https://www.figma.com/proto/F5wRB3t9w53HW66lBKumLT/CPS613---P3?scaling=scale-down&page-id=0%3A1&starting-point-node-id=56%3A4&node-id=56-4",
                open: "https://docs.google.com/document/d/1zhD15yeeT-Vbr9CP37-rgyzWX8-ed9rvzmiKKuxoDWU/edit?usp=sharing"
              },

            "Staff Handbook": {
                desc:
                  "Although the template and graphics are from Canva, please take note of my arrangement of design and content",
                techStack: "Canva",
                link: require("../../assets/CMCP/Indoor & Outdoor Programming Staff Handbook.pdf"),
                open: ""
              }, 
            
            };

        const design_projects = {
            "tiger sticker": {
                image: require('../../assets/AAPI_stickers/tiger_sticker.JPG'),
              },
            "tiger rice paper": {
                image: require('../../assets/AAPI_stickers/tiger_ricepaper_sticker.JPG'),
              },
            "dragon sticker": {
                image: require('../../assets/AAPI_stickers/dragon_sticker.JPG'),
              },
            "frog sticker": {
                image: require('../../assets/AAPI_stickers/frog_sticker.JPG'),
              },
            "self portrait": {
                image: require('../../assets/drawings/self_portrait.PNG'),
              },
            "rose sword": {
                image: require('../../assets/drawings/rosesword.JPG'),
              },
            "avacado": {
                image: require('../../assets/drawings/avacado.jpg'),
              },
            
            };

        
        return (
            <div id="projects">
                <div className="section-header">
                <span className="section-title">{"Projects"}</span>
                </div>
                    <div className="projects-container">
                    <ul className="projects-grid">
                    {Object.keys(projects).map((key, index) => (
                        <div key={index}>
                        <li className="projects-card">
                            <div className="projects-card-header">
                                <a className="external-link1" href={projects[key]["link"]}>{projects[key]["link"]}</a>
                                <a className="external-link1" href={projects[key]["open"]}>{projects[key]["open"]}</a>
                                
                                <div className="card-title">{key}</div>
                                <div className="card-desc">{projects[key]["desc"]}</div>
                                <div className="card-tech">{projects[key]["techStack"]}</div>
                            </div>
                        </li>
                        </div>
             
                    ))}

                    </ul>
                </div>

                <div className="section-header">
                <span className="section-title">{"UI/UX Projects"}</span>
                </div>
                    <div className="projects-container">
                    <ul className="projects-grid">
                    {Object.keys(uiux_projects).map((key, index) => (
                        <div key={index}>
                        <li className="projects-card">
                            <div className="projects-card-header">
                                <a className="external-link1" href={uiux_projects[key]["link"]}>View the prototype/design</a>
                                <a className="external-link2" href={uiux_projects[key]["open"]}>{uiux_projects[key]["open"]}</a>
                                
                                <div className="card-title">{key}</div>
                                <div className="card-desc">{uiux_projects[key]["desc"]}</div>
                                <div className="card-tech">{uiux_projects[key]["techStack"]}</div>
                            </div>
                        </li>
                        </div>
             
                    ))}

                    </ul>
                </div>

                <div className="section-header">
                <span className="section-title">{"Design, Fine and Digital Art"}</span>
                </div>
                    <div className="projects-container">
                    <ul className="projects-grid">
                    {Object.keys(design_projects).map((key, index) => (
                        <div key={index}>
                        <li className="projects-card">
                            <div className="projects-card-header">
                                
                                {/* <div className="card-title">{key}</div> */}
                                <img
                                    className="card-image"
                                    src={design_projects[key]["image"]}
                                    alt={key}
                                />
                            </div>
                        </li>
                        </div>
             
                    ))}

                    </ul>
                </div>
            </div>
            
        );
    }
}
  
export default Projects;