import React from "react";
import './Profile.css'; // Import CSS for styling

function Profile() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src="profile-picture.jpg" alt="Profile" className="hero-picture" />
          <h1>Pavan Ponnella</h1>
          <h2>Full-Stack Developer | Java | Spring Boot | Microservices | React.js</h2>
          <p>Building scalable, high-performance applications with clean code and modern technologies.</p>
          <a href="#contact" className="hero-btn">Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I specialize in building robust and scalable backend systems using Java, Spring Boot, and Microservices architecture.
          With expertise in frontend frameworks like React, I create seamless user experiences. I focus on clean code, design patterns,
          and continuous integration/deployment pipelines to deliver production-ready software.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <h3>Backend</h3>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Microservices</li>
              <li>RESTful APIs</li>
              <li>JPA/Hibernate</li>
              <li>SQL & NoSQL</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skill">
            <h3>DevOps & Tools</h3>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>CI/CD (Jenkins)</li>
              <li>Git & GitHub</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>E-Commerce Platform</h3>
            <p>
              Developed a scalable e-commerce platform using Microservices architecture, Spring Boot for backend, and React.js for frontend.
              Integrated payment gateways and role-based authentication.
            </p>
            <a href="https://gitlab.com/ponnellapavan/secondminiproject" target="_blank">View Code</a>
          </div>
          <div className="project-card">
            <h3>Inventory Management System</h3>
            <p>
              Built a microservices-based inventory management system for real-time stock updates, reporting, and analytics using Java and React.
            </p>
            <a href="https://github.com/your-profile/inventory-system" target="_blank">View Code</a>
          </div>
          <div className="project-card">
            <h3>CI/CD Pipeline Setup</h3>
            <p>
              Automated deployment workflows using Jenkins, Docker, and Kubernetes for seamless integration and delivery.
            </p>
            <a href="https://github.com/your-profile/cicd-pipeline" target="_blank">View Code</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Let’s build something amazing together. Reach out to discuss your project or ideas!</p>
        <ul>
          <li>Email: ponnellapavan@gmail.com</li>
          <li>Phone: +91 9381502295</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/pavan-ponnella-6ba2362b5/" target="_blank">LinkedIn Profile</a></li>
          <li>GitHub: <a href="https://github.com/pavanponnella?tab=repositories" target="_blank">GitHub Profile</a></li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Pavan Ponnella | Designed & Developed with React.js</p>
      </footer>
    </div>
  );
}

export default Profile;
