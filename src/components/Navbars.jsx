import "../style/Home.css"
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbars() {
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile && !e.target.closest(".navbar")) {
        setIsMobile(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);

  const navItems = ["home", "about", "education", "experience", "skills", "projects", "contact"];

  return (
    <>
    <nav className="navbar navbar-dark text-info px-4 fixed-top bg-black">
      {/* Brand Logo */}
      <h4>
        <a href="#home" className="text-info text-decoration-none">
          &lt; MS-Code.io /&gt;
        </a>
      </h4>

      {/* Hamburger Icon - visible only on small screens */}
      <div className="menu-icon d-lg-none nav-container">
        {isMobile
          ? <FaTimes className="fs-2 text-info" onClick={() => setIsMobile(false)} />
          : <FaBars className="fs-2 text-info" onClick={() => setIsMobile(true)} />
        }
      </div>

      {/* Desktop Nav Links */}
      <div className="ms-auto d-none d-lg-flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`mx-2 fs-5 btn myNav ${active === item ? "active-nav" : "text-info"}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && (
        <div className="mobile-menu d-lg-none">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`mobile-nav-link ${active === item ? "active-nav" : "text-info"}`}
              onClick={() => setIsMobile(false)}  // Close menu on link click
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
    
    </>
    
  )
}

export default Navbars;