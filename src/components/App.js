//dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../Styling/App.css'

//import Header from './Header';
import Layout from './Layout';
import HomePage from '../routes/HomePage'
import AboutPage from '../routes/AboutPage';
import Books from '../routes/Books';
import VideoGames from '../routes/VideoGames';
// Fix contact me page
// import ContactMe from '../routes/ContactMe';
import TempContactMe from '../routes/tempContactMe';
import Experience from '../routes/Experience';
import InfosysJob from '../routes/infosys-job';
import AnalyticsNow from '../routes/analytics-now-editor';
import CouncilRep from '../routes/council-representative';
import Projects from '../routes/projects';
import WebDev from '../routes/web-dev';
import DataScience from '../routes/data-science';
import Mathematical from '../routes/mathematical';
import CourseWork from '../routes/course-work';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          
          <Route path="books" element={<Books />} />
          <Route path="video-games" element={<VideoGames />} />

          <Route path="tempContactMe" element={<TempContactMe />} />

          <Route path="experience/*" element={<Experience />} />
          <Route path="experience/infosys-job" element={<InfosysJob />} />
          <Route path="experience/analytics-now-editor" element={<AnalyticsNow />} />
          <Route path="experience/council-representative" element={<CouncilRep />} />

          <Route path="projects/*" element={<Projects />} />
          <Route path="projects/web-dev" element={<WebDev />} />
          <Route path="projects/data-science" element={<DataScience />} />
          <Route path="projects/mathematical" element={<Mathematical />} />
          
          <Route path="course-work" element={<CourseWork />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
 