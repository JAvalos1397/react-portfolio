import React from "react";
import profile from '../../images/profile.jpg'
function Welcome() {
    return(
        <>
        <div>
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      <h2 class="display-5 fw-bold lh-1 mb-3 text-center">Jose Avalos</h2>
        <img src={profile} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="500" loading="lazy"/>
        
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">"To Infinity and Beyond!"</h1>
        <p class="lead">
        I'm constantly working on new project to keep my skills sharp <br/>
        It is up to me to make stand out from my competitors.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  </div>
  </div>
        </>
    )
}

export default Welcome;