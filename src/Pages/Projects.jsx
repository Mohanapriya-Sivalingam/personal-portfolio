
import { useState } from "react";
import projects from "../data/projects";
import "../style/project.css";

function Projects() {
  const [project, setProject] = useState(null);

  return (

    <>
    <section id="projects" className="projects-section">
 <div className="container-fluid mt-5 mx-auto w-75 mycardcontainer">
      <h2 className="text-center text-info mb-4 text-decoration-underline">Projects</h2>
      <p className="text-center text-warning mb-4 fs-6 fst-italic">“Each project is a step forward — from learning to building real-world solutions”</p>

      <div className="row p-2 g-4">
        {projects.map((proj, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            
            <div className="card bg-dark text-white mb-4 ms-3 rounded-5 mycard">
              
              <img
                src={proj.image}
                alt={proj.title}
                className="card-img-top rounded-top-5 my-img"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body mt-0" >
                <h5 className="card-title text-info">{proj.title}</h5>
                <p className="card-text text-truncate py-2">{proj.description}</p>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"

                  className="btn btn-outline-info mt-2 w-50 mx-auto rounded-5 shadow-lg mybtn"
                >
                  Github
                </a>
                <button className="btn btn-outline-info mt-2 w-50 mx-auto rounded-5 shadow-lg mybtn onclick" onClick={() => setProject(proj)}>
                  View
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

      {project && (
  <div className="custom-modal-overlay">
    
    <div className="custom-modal-content bg-dark text-white p-4 rounded-4">
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-info">{project.title}</h2>
        <button
          className="btn-close btn-close-white"
          onClick={() => setProject(null)}
        ></button>
      </div>

     
      <img
        src={project.image}
        alt={project.title}
        className="img-fluid my-3 rounded"
      />

      <p className="text-white">{project.description}</p>

     
      <div className="text-center mt-3">
        <a
          href={project.github}
          className="btn btn-outline-info me-2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <button
          className="btn btn-outline-danger"
          onClick={() => setProject(null)}
        >
          Close
        </button>
      </div>

    </div>

  </div>
)}
    </div>

    </section>
    
    </>

   
  );
}

export default Projects
