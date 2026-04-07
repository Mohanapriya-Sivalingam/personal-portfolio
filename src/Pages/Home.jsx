
import "../style/Home.css"


function Home() {
  return (
   <section id="home">
<div className="container-fluid hero-container d-flex align-items-center">    
      
      <div className="row w-100 mt-0">

        {/* LEFT CONTENT */}
        <div className="col-md-6 d-flex flex-column justify-content-center text-white px-5">
          <h1 className="mb-4 fw-bold display-5">
            Mohanapriya <span className="text-info">Sivalingam</span>
          </h1>

          

          <p className="mb-5 fs-5">
            "Teaching taught me how to explain. Coding taught me how to create.
            Now, I'm blending both to build something meaningful."
          </p>

          <div>
            <button className="btn btn-outline-info text-white text-center p-2 opacity-1 me-3 px-4">Resume</button>
            <button className="btn btn-outline-info px-4 text-white p-2 ">Contact</button>
          </div>
        </div>
 
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="hero-img-wrapper">
            <img
              src="/src/assets/images/Hero.png"
              alt="Hero"
              className="hero-img"
            />
          </div>
        </div>

      </div>
    </div>

   </section>
    
  )
}

export default Home;