import React, { useState } from "react";

import "./Experience.css";

function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Dayforce",
      roles: [
        {
          title: "Software Developer",
          period: "May 2024 - Aug 2024",
          description: [
            `Utilized TypeScript and C#/.NET to implement 5+ new features for a React user interface that streamlines candidate
            recruitment`,
            "Led discussions to improve front-end accessibility testing and unit testing in Jest.",
            "Completed an average of 12+ story points per sprint, surpassing the 10-point target as a top performer",
            "Analyzed the execution plan of a 6000+ line SQL batch query for optimization, reducing the execution time by 3 seconds"
          ]
        },
        {
          title: "Test Engineer",
          period: "Jan 2024 - Apr 2024",
          description: [
            "Wrote 15+ automated test scripts in Gherkin, C#/.NET, SQL, and Selenium, for coverage of new features and fixes",
            `Monitored and maintained 5000+ automated test scripts, identifying and investigating 10+ bugs, and contributing to an
            increase in test pass rates from 97% up to 99% before each sign-off`,
          ]
        }
      ]
    },
    {
      company: "Government of Ontario",
      roles: [
        {
          title: "Web Application Developer",
          period: "Sep 2022 - Dec 2022",
          description: [
            "Wrote C#/.NET custom availability tests in Visual Studio to monitor 10+ applications on the Government cloud platform",
            "Crafted custom postgreSQL queries to assess audit logs for 5+ flexible servers in Azure and applied server authentication",
            `Processed datasets of 1000+ phone calls in Azure event hub to test stream analytics alerts for Canada’s 9-1-1 services and
            visualized the data in Power Bi reports`
          ]
        }
      ]
    },
    {
      company: "Thoughtworks Canada",
      roles: [
        {
          title: "Software Engineer",
          period: "May 2022 - Aug 2022",
          description: [
            `Leveraged TypeScript and visualized in Android Studio to enhance the user interface of a React application that provides
            culinary services for corporate landlords (i.e., Cadillac Fairview) and 100,000+ of their tenants`,
            "Employed Amazon Cognito (AWS) to optimize and simplify the authentication workflow for fellow developers",
            "Advised 10+ project team members and utilized Material UI to revamp a React app that connects 180+ employees",
            "Integrated and synched REST APIs (Google Maps and BambooHR) in Java back-end for React component logic"
          ]
        }
      ]
    }
  ];

  const renderTabButtons = () => (
    <div className="tab-buttons">
      {experiences.map((company, index) => (
        <button
          key={index}
          className={`tab-button ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          <div className="tab-company">{company.company}</div>
        </button>
      ))}
    </div>
  );

  const renderExperienceContent = () => {
    const company = experiences[activeTab];
    
    return (
      <div className="experience-content-container">
        {company.roles.map((role, roleIdx) => (
          <div key={roleIdx} className="experience-role">
            <div className="experience-header">
              <div className="experience-title-section">
                <h3 className="job-title">{role.title}</h3>
                <div className="company-name">{company.company}</div>
                <div className="experience-period">{role.period}</div>
              </div>
            </div>
            
            <div className="experience-content">
              <div className="description-section">
                <ul className="description-list">
                  {role.description.map((description, idx) => (
                    <li key={idx} className="description-item">{description}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {roleIdx < company.roles.length - 1 && (
              <div className="role-separator"></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id="experience">
      <div className="section-header">
        <span className="section-title">Experience</span>
      </div>
      
      <div className="experience-tabs-container">
        {renderTabButtons()}
        {renderExperienceContent()}
      </div>
    </div>
  );
}

export default Experience;