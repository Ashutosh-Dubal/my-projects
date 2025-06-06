import React from 'react';
import '../Styling/jobPage.css';

const InfosysJob = () => {
  const skills = ['Java', 'C/C++', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'RStudio', 'Jira', 'Maven', 'Java Database Connectivity (JDBC)', 'Jenkins', 'Junit', 'TestNG', 'Selenium', 'ReactJS', 'NodeJS', 'OOP', 'SDLC', 'Problem Solving', 'Aglie Methodologies', 'Sauce Labs'];

  return (
    <div className='job-page'>
      
      <div className='title'>
        <h1>Senior Assocate Software Developer</h1>
        <h2>At Infosys</h2>
      </div>
      
      <div className='body'>
        <ul>
          <li>Developed and maintained scalable software applications using Java Spring Boot and Node.js, with a focus on performance, modularity, and maintainability in enterprise-level environments.</li>
          <li>Spearheaded front-end development using React.js and JavaScript, implementing responsive and accessible UI/UX designs aligned with HTML5, CSS3, and modern web standards.</li>
          <li>Engineered secure, RESTful APIs and backend systems with Java Spring Boot, Node.js, and Express.js, integrating with both relational (MySQL) and non-relational databases to support seamless data flow and transaction management.</li>
          <li>Utilized Git for version control and Maven for build automation, integrating CI/CD practices through Jenkins pipelines to accelerate development and deployment cycles.</li>
          <li>Collaborated in Agile Scrum teams, participating in sprint planning, daily stand-ups, and retrospectives using tools like JIRA to ensure eﬀective project tracking and delivery.</li>
          <li>Developed automated testing scripts for APIs and UIs using Maven and Insomnia, enhancing code reliability and reducing manual QA cycles.</li>
          <li>Contributed to technical decision-making, aligning software architecture with business goals, and ensuring clean, maintainable code across projects.</li>
          <li>Demonstrated strong understanding of internet technologies including HTML5, CSS3, jQuery, JavaScript, and React.</li>
        </ul>
      </div>

      <h3>Skills</h3>
        {skills.map(skill => (
          <div className='skill-tile' key={skill}>
            <p>{skill}</p>
          </div>
        ))}
    </div>
  );
};

export default InfosysJob;