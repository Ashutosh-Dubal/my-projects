import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../Styling/Project.css'

import WebDev from './web-dev';
import DataAnalytics from './data-analytics';
import Mathematical from './mathematical';

const Projects = () => {

  return (
    <>
      <div className="category-container">
        <Link to="data-analytics" className="dataAnalytics">Data Analytics</Link>
        <Link to="web-dev" className="webDev">Web Development</Link>
        <Link to="mathematical" className="math">Mathematical</Link>
      </div>

      <Routes>
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/mathematical" element={<Mathematical />} />
      </Routes>
    </>
  );
};

export default Projects;