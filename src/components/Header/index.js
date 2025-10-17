import React, { Component } from "react";


class Header extends Component {
  render() {
    return (
      <>
      <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
        <span class="fs-4">Jose Avalos Portfolio</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/react-portfolio" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="/react-portfolio/project" class="nav-link">Portfolio</a></li>
        <li class="nav-item"><a href="/react-portfolio/contact" class="nav-link">Contact</a></li>
        <li class="nav-item"><a href="/react-portfolio/resume" class="nav-link">Resume</a></li>
        
        
      </ul>
    </header>
  </div>
      </>
    
    );
  }
}

export default Header;