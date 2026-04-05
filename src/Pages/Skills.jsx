
import skills from "../data/skill";
import "../style/skills.css";



function Skills() {
  return (
    <>
    <section id="skills">
<div className="container mt-5">
      <h2 className="text-center text-info mb-3 text-decoration-underline">My Skills</h2>
      <p className="text-center text-warning fs-5 fst-italic mb-5">
  "From learning concepts to building real-world applications — these are the skills behind my journey."
</p>

      <div className="row">
        {skills.map((skill, index) => {
          const Icon = skill.icon; // 👈 important line

          return (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              
              <div className="card bg-dark text-center p-3 skill-card">
                
                {/* Icon */}
                <div className="fs-1 text-info mb-3">
                  <Icon />  
                </div>

                {/* Skill Name */}
                <h5 className="text-white">{skill.name}</h5>

              </div>

            </div>
          );
        })}
      </div>
    </div>

    </section>
    
    </>
    
  );
}

export default Skills
