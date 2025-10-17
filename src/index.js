import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/react-portfolio">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);