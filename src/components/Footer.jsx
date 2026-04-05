
import React from 'react'
import { CiLinkedin, CiInstagram, CiFacebook } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { BiUpArrowCircle } from 'react-icons/bi'


function Footer() {
    
  return (
    <>
    <footer>
      <div className="container-fluid w-100 h-40 bg-black py-3">
        <p className="text-center text-light mt-2">&copy; - 2026 - All Rights Reserved - My Portfolio. "❤️ Always learning, Always building ❤️"</p>
        <p className='text-center'>HTML | CSS | Bootstrap | JavaScript |JQuery | REactJs | Java | Python | JEE | SpringBoot | MySQL | JDBC </p>
        <div className="d-flex align-items-center justify-content-center mt-2 gap-4 fs-3">
  <ul className="d-flex list-unstyled gap-4 social-icons fs-1">
  <li><a href="https://github.com/Mohanapriya-Sivalingam" className="text-info"><FaGithub /></a></li>
  <li><a href="https://www.linkedin.com/in/mohanapriya-sivalingam" className="text-info"><CiLinkedin /></a></li>
  <li><a href="https://www.instagram.com/mohanapriya_sivalingam" className="text-info"><CiInstagram /></a></li>
  <li><a href="https://www.facebook.com/mohanapriya.sivalingam.3" className="text-info"><CiFacebook /></a></li>
  <a href="#home" className="text-info fs-1"><BiUpArrowCircle type='button' onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}/></a>

  </ul>
</div>
      </div>
      

    </footer>

    </>
  )
}

export default Footer

