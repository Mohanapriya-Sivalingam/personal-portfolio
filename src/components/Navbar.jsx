

import "../style/Home.css"
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";


function Navbar(){
  const [active, setActive] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

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

<div className="menu-icon">
        <FaBars className="fs-2 text-info" onClick={() => setIsMobile(!isMobile)} />
      </div>



      <div className={`collapse navbar-collapse justify-content-end ${isMobile ? "show" : ""}`}>

        {["home","about","education","experience","skills","projects","contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={()=> setIsMobile(false)}
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