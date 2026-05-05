
import education from "../data/education";
import "../style/Education.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <>
    <section id="education" className="education-section">
<div className="container py-5 mx-auto">
      <h2 className="text-info mb-3 text-center text-decoration-underline">Education</h2>
      <p className="text-warning shadow-lg ms-5 mb-5 fs-6 fst-italic">"I believe that education is a powerful tool for personal and professional growth, and I am committed to lifelong learning." </p>

      <div className="edu-timeline ms-5">
        {education.map((edu, index) => (
          <div className="edu-item" key={index}>
            
           
            <div className="edu-icon">
              <FaGraduationCap />
            </div>

          
            <div className="edu-card w-75">
              <h4 className="text-info">{edu.degree}</h4>
              <h6 className="text-warning">{edu.duration}</h6>
              <p className="text-white mb-1">{edu.college}</p>
              <p className="text-secondary">{edu.university}</p>
            </div>

          </div>
        ))}
      </div>
    </div>

    </section>
    
    </>
    
  )
}

export default Education;