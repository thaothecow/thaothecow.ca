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
                  "Revamping my portfolio website. Click the link to visit my old site.",
                techStack: "React",
                link: "https://thaothecow.github.io/",
                open: ""
              },
            "Discord Bot": {
                desc:
                  "Goblin bot is a multi-purpose discord bot that mainly responds to certain users, terms, commands and records data.",
                techStack: "Python, Discord API (Discord.py Library), NASA API, Urban Dictionary API",
                link: "https://github.com/thaothecow/Goblin-Bot",
                open: ""
              },
            "eyePercept - EngHack (2021)": {
                desc:
                  "Collaborated with 2 other members to develop a program that identifies objects, with the intention of sending haptic feedback to prevent blind individuals from bumping into surrounding objects.",
                techStack: "Python, OpenCV",
                link: "https://thaothecow.github.io/",
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
            "PilotASD (2023) (in progress)": {
                desc:
                  "AI-powered consumer software solution that simplifies the access to tailored resources for autistic youth. Will build the product after Figma prototyping.",
                techStack: "Figma",
                link: "https://www.figma.com/proto/ew3UDjF09KTFXeHTczoqFz/PilotASD?page-id=0%3A1&type=design&node-id=1-2&viewport=82%2C654%2C1&t=1wWDz06qjwtrX7nJ-1&scaling=scale-down&mode=design",
                open: ""
              },
            "See Bay (2022)": {
                desc:
                  "Collaborated with a small team to perform usability and accessibility research and testing to create a retail web-application prototype (Figma) for elderly users with vision impairments.",
                techStack: "Figma",
                link: "https://www.figma.com/proto/F5wRB3t9w53HW66lBKumLT/CPS613---P3?scaling=scale-down&page-id=0%3A1&starting-point-node-id=56%3A4&node-id=56-4",
                open: "https://docs.google.com/document/d/1zhD15yeeT-Vbr9CP37-rgyzWX8-ed9rvzmiKKuxoDWU/edit?usp=sharing"
              },

            "Staff Handbook": {
                desc:
                  "handbook",
                techStack: "Canva",
                link: "../../assets/CMCP/Indoor & Outdoor Programming Staff Handbook.pdf",
                open: "https://docs.google.com/document/d/1zhD15yeeT-Vbr9CP37-rgyzWX8-ed9rvzmiKKuxoDWU/edit?usp=sharing"
              }, // doesn't work
            
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
                                <a className="external-link1" href={uiux_projects[key]["link"]}>prototype</a>
                                <a className="external-link2" href={uiux_projects[key]["open"]}>report</a>
                                
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
                                
                                <div className="card-title">{key}</div>
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