import React from 'react';
import '../Styling/jobPage.css';

const AnalyticsNow = () => {
  const skills = ['Interpersonal skills', 'Communication Skills', 'Research Skills', 'Presentation Skills', 'Technical Writing', 'LaTex', 'Detail oriented'];

  return (
    <div className='job-page'>
      
      <div className='title'>
        <h1>Analytics Now Editor</h1>
        <h2>SFU Operations Research Student Union</h2>
      </div>

      <div className='body'>
        <ul>
          <li>Conducted research and analysis for the "Analytics_Now" journal, resulting in the publication of several papers presented by students in various mathematics courses.</li>
          <li>Acquired knowledge and proficiency in diverse analytical techniques and methods for solving complex operations research problems, allowing for the development of effective and efficient solutions.</li>
          <li>Demonstrated strong attention to detail and exceptional organizational skills by reformatting all papers to provide a consistent format, ensuring the journal's overall quality and consistency.</li>
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

export default AnalyticsNow;