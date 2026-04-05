
import { Link } from "react-router-dom"
import "../style/Home.css"


function Navbar(){

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark text-info px-4">
      <h4> <Link to="/" className="text-info text-decoration-none "> &lt; MS-Code.io /&gt;</Link> </h4>
      

      <div className="ms-auto">
        <Link className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav" to="/">Home</Link>
        <Link className="text-info text-decoration-none  mx-2 fs-5 opacity-1 btn myNav" to="/about">About</Link>
        <Link className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav" to="/education">Education</Link>
        <Link className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav" to="/experience">Experience</Link>
        <Link className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav" to="/skills">Skills</Link>
        <Link className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav" to="/projects">Projects</Link>
        <Link className="text-info text-decoration-none mx-2 fs-5 opacity-1 btn myNav" to="/contact">Contact</Link>
      </div>
    </nav>
        
        </>
    )
}

export default Navbar