
import './App.css'
import Navbar from './components/Navbar'
import Education from './Pages/Education'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Home1 from './Pages/Home1'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  
 useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
   
          <Navbar />

      <Home1 />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </>
  )
}

export default App
