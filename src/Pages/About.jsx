import React from 'react'
import '../style/About.css'

function About() {
  return (
    <>
    <section id='about' className='about-section'>
        
            <div className="container-fluid w-75 mt-5 mb-5 p-4 opacity-100 rounded-5 aboutdiv">
      <h2 className="text-info text-center text-decoration-underline mb-3">About Me</h2>
      <p className='lead text-light fst-italic text-center'>🚀 From Teaching to Tech: My Journey So Far ❤️</p>
   
    <div className="container w-75 mb-5">
            <h2 className='h2 text-warning fw-bold text-center'> 🖥️ Fullstack Developer</h2>
            <p className="fst-italic py-3 text-light hover-effect aboutpara text-indent">
              I'm a passionate and self-motivated aspiring Full Stack Java Developer with a strong academic foundation in Computer Science. I hold an M.Phil. in Computer Science and have one year of experience as an Assistant Professor (2015-2016), where I enjoyed teaching and guiding students in programming concepts.
            </p>
            <p className="fst-italic py-3 text-info hover-effect aboutpara text-indent">
              After a career break, I've reignited my passion for coding and technology. I am currently upskilling in Full Stack Development using Java, focusing on building real-world projects, strengthening my problem-solving skills, and staying updated with industry trends.
            </p>
            <p className="fst-italic py-3 text-light hover-effect aboutpara text-indent">
              I'm excited to start my journey in the software development field, bringing a strong foundation in CS, a love for learning, and a fresh perspective.Looking forward to turning this new chapter into a meaningful career in tech!
            </p>
            </div>
             </div>
       

    </section>
    
    </>
  )
}

export default About
