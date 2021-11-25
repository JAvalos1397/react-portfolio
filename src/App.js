import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />
      
      <Routes> 
        <Route path='/about' element={<About/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
       
    <Footer/>
    </div>
  );
}

export default App;