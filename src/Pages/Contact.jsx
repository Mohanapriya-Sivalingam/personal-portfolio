import React from 'react'
import "../style/Contact.css";

function Contact() {
  return (
    <>
    
    <section id="contact">

      <div className="container-fluid w-75 py-5 mx-auto">
        <h2 className="text-info mb-3 text-center text-decoration-underline">Contact Me</h2>
        <p className="text-warning fst-italic shadow-lg ms-5 mb-5 fs-5"> " I am always open to new opportunities and collaborations. Feel free to reach out to me through the contact form below or connect with me on LinkedIn."</p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className='form p-5 rounded-5 bg-info contactform'>
              <div className="form-group">
                <h5 className="text-black fs-5 fst-italic text-center text-decoration-underline fw-bold">Get In Touch</h5>
                <label htmlFor="name" className='form-label mb-2 text-black fs-5 fst-italic'>Name :</label>
                <input type="text" className="form-control mb-3 bg-dark text-white text-italic fs-6 opacity-100 ps-3 rounded-5" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className='form-label mb-2 text-black fs-5 fst-italic '>Email :</label>
                <input type="email" className="form-control mb-3 bg-dark text-white text-italic fs-6 opacity-100 ps-3 rounded-5" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className='form-label mb-2 text-black fs-5 fst-italic '>Message :</label>
                <textarea className="form-control mb-3 bg-dark text-white text-italic fs-6 opacity-100 ps-3 rounded-5" id="message" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-light w-100 rounded-5 shadow-lg mt-3 fs-6 text-shadow hover">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Contact
