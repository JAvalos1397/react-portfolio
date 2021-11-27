import react, { components } from "react";
import resumeImg from '../../images/resume.png';
import resumepdf from '../../images/JoseResume.pdf'
function Resume(){
    return(
        <>
        
          <img class="img-thumbnail position-absolute top-50 start-50 translate-middle" src={resumeImg} alt="Resume" width="600" height="500" loading="lazy"/>
          <a class="btn btn-danger position-absolute bottom-40 start-50 translate-middle" href={resumepdf} target="blank_" role="button">Download</a>
        
        </>
    )
}

export default Resume;