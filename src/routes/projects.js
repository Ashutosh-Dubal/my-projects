import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../Styling/Project.css'

import WebDev from './web-dev';
import Mathematical from './mathematical';
import DataScience from './data-science';

const Projects = () => {

  return (
    <>
      <div className="category-container">
        <Link to="data-science" className="dataAnalytics">Data Science</Link>
        <Link to="web-dev" className="webDev">Web Development</Link>
        <Link to="mathematical" className="math">Mathematical</Link>
      </div>

      <Routes>
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/mathematical" element={<Mathematical />} />
      </Routes>
    </>
  );
};

export default Projects;