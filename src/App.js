import React from 'react';
import { Link } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Project from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
  
      <Routes> 
        <Route path='/' element={<Welcome/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/>

        </Routes> 
        
    <Footer/>
    </>
  );
}

export default App;