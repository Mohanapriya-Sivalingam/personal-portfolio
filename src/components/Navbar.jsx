
import { Link } from "react-router-dom"
import "../style/Home.css"
import { useEffect, useState } from "react";


function Navbar(){
  const [active, setActive] = useState("home");

   useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark text-info px-4 fixed-top bg-black">
      <h4> <a href="#home" className="text-info text-decoration-none "> &lt; MS-Code.io /&gt;</a> </h4>


      <div className="ms-auto">
        {/* <a href="#home" className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav">Home</a>
        <a href="#about" className="text-info text-decoration-none  mx-2 fs-5 opacity-1 btn myNav">About</a>
        <a href="#education" className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav">Education</a>
        <a href="#experience" className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav">Experience</a>
        <a href="#skills" className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav">Skills</a>
        <a href="#projects" className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav">Projects</a>
        <a href="#contact" className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav">Contact</a> */}

        {["home","about","education","experience","skills","projects","contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`mx-2 fs-5 btn myNav ${
              active === item ? "active-nav" : "text-info"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
        
        </>
    )
}

export default Navbar