import "../style/Home.css"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import HeroImg from "../assets/images/Hero.png";
import { TypeAnimation } from 'react-type-animation';



function Home1() {
  
  return (
    <>

    <section id="home" className="home-section">
<div className="container-fluid d-flex align-items-center row hero-container" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">

          <div className="row w-100 m-0">

        <div className="col-md-6 d-flex flex-column justify-content-center text-white px-5">
          <h5>Hi 👋 I'm </h5>
<h1 className="h1" >Mohanapriya <span className="text-info"  >Sivalingam</span></h1>
<h3 className="text-center mt-2 gradient-text animehead"> - <TypeAnimation
    sequence={[
      "Java Full Stack Developer", 2000,
      "Backend Developer", 2000,
      "Frontend Developer", 2000,
      "Web Developer", 2000,
      "React Developer", 2000,
      "Software Developer", 2000,
    ]}
    speed={50}
    repeat={Infinity}
  /></h3>
<p className="mt-3 mb-5 fs-5 homepara">
            "Teaching taught me how to explain. Coding taught me how to create.
            Now, I'm blending both to build something meaningful."
          </p>
<div className="ms-5 p-1">
            <button className="btn btn-outline-info text-white text-center p-2 opacity-1 me-3 px-4 homebtn" onClick={() => {
    window.open("/Mohanapriya_Resume.pdf", "_blank");
  }}>Resume</button>
            <button className="btn btn-outline-info px-4 text-white p-2 homebtn" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</button>
          </div>
<div className="d-flex align-items-center justify-content-end mt-4 gap-4 fs-3">
  <ul className="d-flex list-unstyled gap-4 social-icons fs-1">
  <li><a href="https://github.com/Mohanapriya-Sivalingam" className="text-info"><FaGithub /></a></li>
  <li><a href="https://www.linkedin.com/in/mohanapriya-sivalingam" className="text-info"><CiLinkedin /></a></li>
  <li><a href="https://www.instagram.com/mohanapriya_sivalingam" className="text-info"><CiInstagram /></a></li>
  <li><a href="https://www.facebook.com/mohanapriya.sivalingam.3" className="text-info"><CiFacebook /></a></li>

  </ul>
</div>
</div>
<div className="col-md-6 d-flex justify-content-center align-items-center position-relative">
          <div className="hero-img-wrapper mt-0">
            <img
              src={HeroImg}
              alt="Hero"
              className="hero-img"
            />
          </div>
        </div>

      </div>
        </div>   
    

    </section>
    
    </>
  )
}

export default Home1;