import { Link, Route, Routes } from 'react-router-dom';
import '../Styling/Experience.css'

import InfosysJob from './infosys-job';
import AnalyticsNow from './analytics-now-editor';
import CouncilRep from './council-representative';

const Experience = () => {

    const jobs = [
        {
            title: 'Assocate Developer',
            company: 'Infosys',
            date: '2022 - 2025',
            content: 'This is content for tile 1',
            path: './infosys-job',
        },
        {
            title: 'Analytics Now Editor',
            company: 'SFU Operations Research Student Union',
            date: '2020 - 2022',
            content: 'This is content for tile 2',
            path: './analytics-now-editor',
        },
        {
            title: 'Council Representative',
            company: 'Simon Fraser Student Society',
            date: '2020 - 2022',
            content: 'This is content for tile 3',
            path: './council-representative',
        },
    ];

    const skills = [
        {name: 'Mathematics', percentage: 75},
        {name: 'Statistics', percentage: 80},
        {name: 'Programming', percentage: 70},
    ];

  return (
    <div className="experience">
        <div className="sidebar" style={{position: 'fixed'}}>
            
            <div className='skills-whole'>
                <h4>Skills</h4>
                
                {skills.map((skill) => (
                <div key={skill.name}>
                    <p>{skill.name}</p>
                    <div className="skills">
                        <div className="skill-meter" style={{ width: `${skill.percentage}%`}}></div>
                    </div>
                </div>))}
            </div>

            <div className='certifications'>
                <h4>Certifications</h4>
                <ul>
                    <li>Google Data Analytics by Google.</li>
                    <li>IBM Data Science</li>
                </ul>
            </div>

        </div>
        
        <div className="tiles-container">
            {jobs.map((job) => (
                <Link to={job.path} key={job.path}>
                    <div className="tile">
                        <div className="tile-header">
                            <h3>{job.title}</h3>
                            <p>{job.company}</p>
                            <p>{job.date}</p>
                        </div> 
                    </div>
                </Link>
            ))}
        </div>

        <Routes>
            <Route path="/infosys-job" element={<InfosysJob />} />
            <Route path="/analytics-now-editor" element={<AnalyticsNow />} />
            <Route path="/council-representative" element={<CouncilRep />} />
        </Routes>

    </div>
  );
};

export default Experience;
