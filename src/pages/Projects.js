import React from "react";
import "../Styles/Projects.css"; 

function Projects() {
  return (
    <div className="project">
      <h1>Projects</h1>
    <div className="container-box">
      <div className="project-box">
        <h2>Tic Tec Toe App</h2>
        <p>
          I am currently working on this project since last 7 months, which is currently at its MVP stage to be
          deploy by the end of the winter. My team and I are using React Native to develop
          the app. I had the responsibility to design the UI and UX of the app
          and also work on the CI/CD pipeline with one of my directors. I am currently entitled to look over
          5 juniors working on the development of the app at the same time help them with their task and development
          of the app which includes selecting interests and showing papers, text to speech model, like , comment and save feature
          for an user and authors to publish papers and take the owner ship of the paper using orchid.
        </p>
      </div>
      <div className="project-box">
        <h2> Library Managment System</h2>
        <p>
          I designed and implemented a Library Management System using Node.js,
          Express.js, and MongoDB, which significantly enhanced system performance
          by 50%. Working collaboratively with cross-functional teams, including software
          engineers and data scientists, I played a key role in designing and optimizing
          data-driven tools. Through strategic troubleshooting and detailed reporting,
          I was able to improve software issue resolution times by 30%. Additionally,
          I implemented secure admin authentication using JWT tokens, ensuring adherence
          to the highest data privacy and security standards. My responsibilities also
          included documenting processes and procedures, which enhanced clarity
          and consistency in project delivery, thereby streamlining operational efficiencies across the boar.
        </p>
      </div>
      <div className="project-box">
        <h2> Financial Performance Dashboard for a Retail Company</h2>
        <p>
          As part of a certificate course, I developed a sophisticated Power BI dashboard,
          leveraging DAX functions and Power Query to analyze over 50,000 financial records,
          which optimized data processing efficiency by 30%. I implemented advanced data
          visualizations that provided clear insights into profit and loss analysis, cost breakdowns,
          and revenue forecasting, significantly enhancing decision-making processes. Additionally,
          I improved KPI tracking and report generation velocity by 20% through the use of dynamic
          filtering and drill-through capabilities in Power BI, streamlining the analysis and
          reporting workflow and providing more timely insights into key business metrics.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Projects;
