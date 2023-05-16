import React from 'react';
import '../Styling/jobPage.css';

const CouncilRep = () => {
  const skills = ['Interpersonal skills', 'Communication Skills', 'Presentation Skills', 'Decision-making', 'Problem-solving', 'Time management', 'Organization skills'];

  return (
    <div className='council-rep'>
      <div className='title'>
        <h1>Council Representative</h1>
        <h2>Simon Fraser Student Society (SFSS)</h2>
      </div>

      <div className='body'>
        <ul>
          <li>Coordinated and executed successful social and networking events with a focus on providing valuable experiences for attendees. Collaborated effectively with members of a student society to ensure seamless execution of events.</li>
          <li>Partnered with other student executives to design and deliver a series of technical workshops that provided valuable insights into topics such as RStudio, C++, and LaTex. Ensured that the workshops were engaging and informative by working closely with presenters and attendees to gather feedback and make necessary adjustments.</li>
          <li>Attended bi-weekly meetings as well as special meetings to stay informed on relevant issues and to effectively communicate updates and progress to the broader student body. Maintained strict confidentiality duties towards the SFSS while participating in all meetings and providing valuable input to the council's decision-making process.</li>
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

export default CouncilRep;