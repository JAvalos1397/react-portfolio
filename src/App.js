import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import bgImage from './images/background3.jpg'

import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Project from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Container } from 'postcss';

function App() {
  return (
    <>
      <Header />
      <div className="App-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}>
      <Routes> 
        <Route path='/' element={<Welcome />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes> 
     </div>
      <Footer />
    </>
  );
}

export default App;
