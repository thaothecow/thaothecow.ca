import React from "react";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website (2023)",
      desc: "Revamping my portfolio website.",
      techStack: "React",
      link: "",
      open: ""
    },
    {
      title: "Discord Bot",
      desc:
        "Multi-purpose discord bot that responds to certain users, terms, commands and records data.",
      techStack: "Python, Discord API (Discord.py Library), NASA API, Urban Dictionary API",
      link: "https://github.com/thaothecow/Goblin-Bot",
      open: "" 
    },
    {
      title: "eyePercept - EngHack (2021)",
      desc:
        "A program that identifies objects to prevent blind individuals from bumping into objects",
      techStack: "Python, OpenCV",
      link: "https://github.com/thaothecow/eyePercept---Hackathon-",
      open: ""
    },
    {
      title: "Portfolio Website (old)",
      desc:
        "Personal portfolio website to showcase all my skills and interests",
      techStack: "HTML, CSS and JavaScript",
      link: "https://thaothecow.github.io/",
      open: ""
    },
  ];

  const uiux = [
    {
      title: "PilotASD Prototype (2023) (in progress)",
      desc:
        "AI-powered platform that simplifies the access to tailored resources for autistic youth.",
      techStack: "Figma",
      link: "https://www.figma.com/proto/ew3UDjF09KTFXeHTczoqFz/PilotASD?page-id=0%3A1&type=design&node-id=1-2&viewport=82%2C654%2C1&t=1wWDz06qjwtrX7nJ-1&scaling=scale-down&mode=design",
      open: ""
    },
    {
      title: "See Bay (2022)",
      desc:
        "A Retail web-application prototype (Figma) for elderly users with vision impairments.",
      techStack: "Figma",
      link: "https://www.figma.com/proto/F5wRB3t9w53HW66lBKumLT/CPS613---P3?scaling=scale-down&page-id=0%3A1&starting-point-node-id=56%3A4&node-id=56-4",
      open: "https://docs.google.com/document/d/1zhD15yeeT-Vbr9CP37-rgyzWX8-ed9rvzmiKKuxoDWU/edit?usp=sharing"
    },
      
  ];

  const designs = [
    { 
      title: "tiger sticker",
      image: require('../../assets/AAPI_stickers/tiger_sticker.JPG') 
    },
    { title: "tiger rice paper",
      image: require('../../assets/AAPI_stickers/tiger_ricepaper_sticker.JPG') 
    },
    {
      title: "dragon sticker", 
      image: require('../../assets/AAPI_stickers/dragon_sticker.JPG'),
    },
    {
      title: "frog sticker",
      image: require('../../assets/AAPI_stickers/frog_sticker.JPG'),
    },
    {
      title: "self portrait", 
      image: require('../../assets/drawings/self_portrait.PNG'),
    },
    { 
      title: "rose sword", 
      image: require('../../assets/drawings/rosesword.JPG'),
    },
    {
      title: "avacado", 
      image: require('../../assets/drawings/avacado.jpg'),
    },
  ];

  const renderProjectCards = (data) =>
    data.map((item, index) => (
      <li className="projects-card" key={index}>
        <div className="projects-card-header">
          {item.link && <a className="external-link1" href={item.link}>View</a>}
          {item.open && <a className="external-link2" href={item.open}>Open</a>}
          <div className="card-title">{item.title}</div>
          <div className="card-desc">{item.desc}</div>
          <div className="card-tech">{item.techStack}</div>
        </div>
      </li>
    ));

    const renderDesignImages = (data) =>
      data.map((item, index) => (
        <li className="projects-card" key={index}>
          <div className="projects-card-header">
            <img className="card-image" src={item.image} alt={`Artwork: ${item.title}`} />
          </div>
        </li>
      ));


  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">Projects</span>
      </div>
      <ul className="projects-grid">{renderProjectCards(projects)}</ul>

      <div className="section-header">
        <span className="section-title">UI/UX Projects</span>
      </div>
      <ul className="projects-grid">{renderProjectCards(uiux)}</ul>

      <div className="section-header">
        <span className="section-title">Design, Fine & Digital Art</span>
      </div>
      <ul className="projects-grid">{renderDesignImages(designs)}</ul>
    </div>

      // <div id="projects">
      //     <div className="section-header">
      //     <span className="section-title">{"Projects"}</span>
      //     </div>
      //         <div className="projects-container">
      //         <ul className="projects-grid">
      //         {Object.keys(projects).map((key, index) => (
      //             <div key={index}>
      //             <li className="projects-card">
      //                 <div className="projects-card-header">
      //                     <a className="external-link1" href={projects[key]["link"]}>{projects[key]["link"]}</a>
      //                     <a className="external-link1" href={projects[key]["open"]}>{projects[key]["open"]}</a>
                          
      //                     <div className="card-title">{key}</div>
      //                     <div className="card-desc">{projects[key]["desc"]}</div>
      //                     <div className="card-tech">{projects[key]["techStack"]}</div>
      //                 </div>
      //             </li>
      //             </div>
        
      //         ))}

      //         </ul>
      //         <ul className="projects-grid">
      //           {Object.keys(projects).map((key, index) => {
      //             const { desc, techStack, link, open } = projects[key];
      //             return (
      //               <li className="projects-card" key={index}>
      //                 <div className="projects-card-header">
      //                   {link && <a className="external-link1" href={link}>View project</a>}
      //                   {open && <a className="external-link2" href={open}>Open link</a>}
      //                   <div className="card-title">{key}</div>
      //                   <div className="card-desc">{desc}</div>
      //                   <div className="card-tech">{techStack}</div>
      //                 </div>
      //               </li>
      //             );
      //           })}
      //         </ul>
      //     </div>

      //     <div className="section-header">
      //     <span className="section-title">{"UI/UX Projects"}</span>
      //     </div>
      //         <div className="projects-container">
      //         <ul className="projects-grid">
      //         {Object.keys(uiux_projects).map((key, index) => (
      //             <div key={index}>
      //             <li className="projects-card">
      //                 <div className="projects-card-header">
      //                     <a className="external-link1" href={uiux_projects[key]["link"]}>View the prototype/design</a>
      //                     <a className="external-link2" href={uiux_projects[key]["open"]}>{uiux_projects[key]["open"]}</a>
                          
      //                     <div className="card-title">{key}</div>
      //                     <div className="card-desc">{uiux_projects[key]["desc"]}</div>
      //                     <div className="card-tech">{uiux_projects[key]["techStack"]}</div>
      //                 </div>
      //             </li>
      //             </div>
        
      //         ))}

      //         </ul>
      //     </div>

      //     <div className="section-header">
      //     <span className="section-title">{"Design, Fine and Digital Art"}</span>
      //     </div>
      //         <div className="projects-container">
      //         <ul className="projects-grid">
      //         {Object.keys(design_projects).map((key, index) => (
      //             <div key={index}>
      //             <li className="projects-card">
      //                 <div className="projects-card-header">
                          
      //                     {/* <div className="card-title">{key}</div> */}
      //                     <img
      //                         className="card-image"
      //                         src={design_projects[key]["image"]}
      //                         alt={key}
      //                     />
      //                 </div>
      //             </li>
      //             </div>
        
      //         ))}

      //         </ul>
      //     </div>
      // </div>
      
  );

}
  
export default Projects;