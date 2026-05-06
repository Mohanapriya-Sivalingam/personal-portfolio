import React from 'react'
import "../style/Contact.css";
import { useState } from 'react';
import axios from 'axios';

function Contact() {


  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [error, setError] = useState({})

function handleSubmit(e) {
  e.preventDefault();
  
axios.post('https://personal-portfolio-backend-r8kf.onrender.com/api/contactms/sendmessage', contact)
.then(response => {  console.log(response.data);
  alert("Message sent successfully!");  
  setContact({
    name: "",
    email: "",
    message: ""
  });
  setError({})
})
.catch(error => {
  console.error("There was an error sending the message!", error);
 if(error.response && error.response.status === 400){
  setError(error.response.data);
 }
 else{
  alert("Server not Reachable!");
 }
});
}


  return (
    <>
    
    <section id="contact" className="contact-section">

      <div className="container-fluid w-75 py-5 mx-auto contact-container">
        <h2 className="text-info mb-2 mt-0 text-center text-decoration-underline">Contact Me</h2>
        <p className="text-warning fst-italic shadow-lg ms-5 fs-6 contact-para"> " I am always open to new opportunities and collaborations. Feel free to reach out to me through the contact form below or connect with me on LinkedIn."</p>
        <div className="row d-flex justify-content-center w-100 p-3 bg-info rounded-4 contactform ms-1 ">
          <div className="col-md-6 p-2 w-100">
            <form className='form' onSubmit={handleSubmit}>
              <div className="form-group">
                <h5 className="text-black fs-5 fst-italic text-center text-decoration-underline fw-bold">Get In Touch</h5>
                <label htmlFor="name" className='form-label mb-2 text-black fs-6 fst-italic'>Name : {error.name && <small className="fs-6 text-danger mt-2 mb-2">{error.name}</small>}</label>
                <input type="text" className="form-control mb-3 bg-dark text-white text-italic fs-6 opacity-100 ps-3 rounded-5 input-focus-none" id="name" value={contact.name} onChange={(e) => {setContact({...contact, name: e.target.value.trim()}); setError({...error, name:""})}}/>
                
              </div>
              <div className="form-group">
                <label htmlFor="email" className='form-label mb-2 text-black fs-6 fst-italic '>Email : {error.email && <small className="fs-6 text-danger mt-2 mb-2">{error.email}</small>}</label>
                <input type="email" className="form-control mb-3 bg-dark text-white text-italic fs-6 opacity-100 ps-3 rounded-5 input-focus-none" id="email" value={contact.email} onChange={(e) =>{ setContact({...contact, email: e.target.value.trim()}); setError({...error, email:""})}} placeholder="Your Email" />
                
              </div>
              <div className="form-group">
                <label htmlFor="message" className='form-label mb-2 text-black fs-6 fst-italic '>Message : {error.message && <small className="fs-6 text-danger mt-2 mb-2">{error.message}</small>}</label>
                <textarea className="form-control mb-3 bg-dark text-white text-italic fs-6 opacity-100 ps-3 rounded-5 input-focus-none" id="message" rows="5" value={contact.message} onChange={(e) => {setContact({...contact, message: e.target.value}); setError({...error, message:""})}} placeholder="Your Message"></textarea>
                
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-5 shadow-lg mt-3 fs-6 text-shadow hover">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Contact
