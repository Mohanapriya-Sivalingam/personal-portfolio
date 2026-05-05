
import experience from "../data/experience";
import "../style/Experience.css";
import { GiTeacher } from 'react-icons/gi';




function Experience() {
  return (
    <>
    <section id="experience" className="experience-section">
    <div className="container-fluid w-75 mt-3">
  <h2 className="text-info mb-3 text-center text-decoration-underline">Experience</h2>
        <p className="text-warning fst-italic shadow-lg ms-5 mb-5 fs-6 text-justify">
           "Though my journey into software development is just beginning, my background in teaching, self-learning, and hands-on practice has shaped me into a curious and committed developer-in-progress."</p>

      {
        
        experience.map((exp, index) => (
          <div className="card bg-transparent  mb-4 mt-5 p-1 myexperiencecard" key={index}>
            <h3 className="card-header text-info text-center"><GiTeacher className='fs-1 exp-icon text-warning me-2' /> {exp.role}</h3>
            <div className="card-body">
              <h3 className="card-title text-warning">{exp.company}</h3>
              <h4 className="card-subtitle text-info mb-3">{exp.duration}</h4>
              <p className="card-text text-light p-2 fs-6 mb-3 rounded text-center"> {exp.description}</p>
            </div>
          </div>
        ))
          
      }
      
  </div>

    </section>
    </>
  )
}

export default Experience
