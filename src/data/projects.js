
// import ecommerce from "../images/ecommerce.png"
// import employee from "../images/employee.png"
// import movieticket from "../images/movieticket.png"
// import portfolio from "../images/portfolio.png"
// import student from "../images/student.png"
// import todolist from "../images/todolist.png"
// import formvalidation from"../images/formvalidation.png"
// import login from "../images/login.png"

import ecommerce from "../assets/images/ecommerce.png"
import employee from "../assets/images/employee.png"
import movieticket from "../assets/images/movieticket.png"
import portfolio from "../assets/images/portfolio.png"      
import student from "../assets/images/student.png"
import todolist from "../assets/images/todolist.png"
import formvalidation from "../assets/images/formvalidation.png"
import login from "../assets/images/login.png"  

const projects = [
  {
    title: "E-Commerce Website",
    description: "Built with React & Spring Boot, featuring user authentication, product listing, shopping cart, and order management. ",
    github: "https://github.com/Mohanapriya-Sivalingam/ecommerce-vite-app",    
    image: ecommerce
  },
  {
    title: "Personal Portfolio Website",
    description: "A personal portfolio website built with React, showcasing my projects, experience, and skills. The website features a clean and responsive design, allowing visitors to easily navigate through my work and learn more about me.",
    github: "https://github.com/Mohanapriya-Sivalingam/personal-portfolio",
    image: portfolio

  },
  {
    title: "Movie Ticket Reservation System",
    description: "Java + JDBC Console Project, allowing users to browse movies, select showtimes, and reserve tickets. Implemented features include user registration, movie listing and reservation management. admin can add movies, manage showtimes and view reservations.",
    github: "https://github.com/Mohanapriya-Sivalingam/movie-ticket-reservation",
    image: movieticket
  },
  {
    title: "Employee Management System",
    description: "A React & Redux Tool Kit (RTK) application for managing employee records. The system allows users to add, edit, and delete employee information, as well as view a list of all employees. It also includes features such as search and filter functionality to easily find specific employees. Managing former employees is also supported. The application is designed to be user-friendly and efficient, making it easy for HR departments to manage their workforce effectively. ",
    github: "https://github.com/Mohanapriya-Sivalingam/employee-management-system",
    image: employee
  },
  {
    title: "Student Management System",
    description: "A Java Servlet & JDBC web application for managing student records. The system allows users to add, edit, and delete student information, as well as view a list of all students. The application is designed to be user-friendly and efficient, making it easy for educational institutions to manage their student data effectively. Managing former students is also supported. former students can be added to the system with their details and can be viewed in a separate section. This feature allows educational institutions to keep track of their alumni and maintain a connection with them.",
    github: "https://github.com/Mohanapriya-Sivalingam/student-management-system",
    image:  student
  },
  {
    title:"Servlet Login Validation",
    description: "A Java Servlet application that validates user login credentials. The application allows users to enter their username and password, and then checks the credentials against a predefined list of valid users. If the credentials are valid, the user is granted access to the system; otherwise, an error message is displayed. This project demonstrates the use of Java Servlets for handling user authentication and managing session data with HTML pages.",
    github: "https://github.com/Mohanapriya-Sivalingam/servlet-login-validation-html",
    image: login
  },
  {
    title: "Todo List Application",
    description: "A simple todo list application built with HTML & jQuery, allowing users to add, edit, and delete tasks. The application features a clean and intuitive user interface, making it easy to manage daily tasks and improve productivity. Users can easily organize their tasks and keep track of their progress with this efficient and user-friendly todo list application.",
    github: "https://github.com/Mohanapriya-Sivalingam/todo-list-jquery",
    image: todolist
  },
  {
    title:"Form Validation with JavaScript",
    description: "A JavaScript application that validates user input in a form. The application checks for various validation rules, such as required fields, email format, and password strength. If the input is valid, the form can be submitted; otherwise, error messages are displayed to guide the user in correcting their input. This project demonstrates the use of JavaScript for client-side form validation, enhancing user experience and ensuring data integrity.",
    github: "https://github.com/Mohanapriya-Sivalingam/form-validation-project",
    image: formvalidation
  },
  {
    title:"Python To-Do List Application",
    description: "A simple console-based to-do list application built with Python, allowing users to add, edit, and delete tasks. The application features a command-line interface, making it easy to manage daily tasks and improve productivity. Users can easily organize their tasks and keep track of their progress with this efficient and user-friendly to-do list application.",
    github: "https://github.com/Mohanapriya-Sivalingam/python-todo-list",
    image: todolist
  }
];

export default projects;