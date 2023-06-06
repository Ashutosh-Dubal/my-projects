import React from 'react';
import '../Styling/jobPage.css';

const InfosysJob = () => {
  const skills = ['Java', 'C/C++', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'RStudio', 'Jira', 'Maven', 'Java Database Connectivity (JDBC)', 'Jenkins', 'Junit', 'TestNG', 'Selenium', 'ReactJS', 'NodeJS', 'OOP', 'SDLC', 'Problem Solving', 'Aglie Methodologies'];

  return (
    <div className='job-page'>
      
      <div className='title'>
        <h1>Assocate Software Developer</h1>
        <h2>At Infosys</h2>
      </div>
      
      <div className='body'>
        <ul>
          <li>Possessing multiple industry-recognized certifications in prominent technologies such as Java, SQL, Jenkins, Junit, TestNG, and Selenium, demonstrating a high level of expertise in these areas.</li>
          <li>Proficiently skilled in the art of object-oriented programming, data structures, algorithms, and the complete software development life cycle (SDLC), including requirements gathering, design, development, testing, deployment, and maintenance.</li>
          <li>Extensive experience in conducting multiple types of testing, including unit, integration, system, and user acceptance testing (UAT), allowing for full-spectrum testing coverage.</li>
          <li>Possessing an in-depth understanding of web application development and the mastery of the fundamental concepts, including design patterns, frameworks, and principles.</li>
          <li>Designed and developed an in-house application using React for the frontend and Java Spring Boot for the backend. The application aimed to streamline the process of sorting new hires for managers, facilitating efficient candidate management and onboarding procedures. By leveraging my expertise in front-end development with React and back-end development with Java Spring Boot, I successfully delivered a user-friendly and robust application that enhanced the hiring workflow.</li>
          <li>Developing comprehensive test plans and test cases for new applications to identify all issues, providing valuable feedback for developers to improve the overall quality of the product.</li>
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