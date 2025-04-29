import React, { useState } from "react";
import "./Home.css";

const skills = [
  { name: 'Python', percentage: 90 },
  { name: 'FastAPI', percentage: 85 },
  { name: 'Django', percentage: 80 },
  { name: 'Flask', percentage: 75 },
  { name: 'AWS', percentage: 70 },
  { name: 'PostgreSQL', percentage: 85 },
  { name: 'Git', percentage: 80 },
  { name: 'REST APIs', percentage: 90 },
];

const projects = [
  {
    name: "British Telecommunications",
    description: "Developed a secure web-based application for BT Group customers to manage broadband deals and services.",
    techStack: ["React", "Node.js", "AWS"],
    liveDemo: "#",
    github: "#",
  },
  {
    name: "CBS (Convergent Billing System)",
    description: "Built a telecom billing system to process bills and generate invoices with automated scripts and monitoring.",
    techStack: ["Python", "Django", "PostgreSQL"],
    liveDemo: "#",
    github: "#",
  },
  {
    name: "Uniqlo",
    description: "Developed data pipelines for moving data between sources using AWS Lambda, focusing on VOC and VOS modules.",
    techStack: ["AWS", "Lambda", "Python"],
    liveDemo: "#",
    github: "#",
  },
  {
    name: "Impetus",
    description: "A scalable backend system for real-time data processing and automation workflows, streamlining operations with asynchronous task execution, data transformation, and cloud integration.",
    techStack: [
      "Python", 
      "FastAPI", 
      "Temporal", 
      "PostgreSQL", 
      "MongoDB", 
      "Redis", 
      "Docker", 
      "AWS Batch", 
      "Kafka"
    ],
    liveDemo: "#",
    github: "#",
  },
];

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="home-container">
      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hi, I’m Shaik Khajapeer</h1>
          <p>
            A competent professional with over 4+ years of experience in Python. Expertise in developing business logic, 
            maintaining version control systems like GIT, and working with Python IDEs such as PyCharm and VS Code. 
            Proficient in object-oriented programming (OOPs) concepts, RESTful architecture, and deploying projects using GIT. 
            Skilled in handling multiple tasks, working independently or in a team, and delivering web applications on time. 
            Known for quick learning and applying new tools and technologies effectively.
          </p>
          <a href="#projects" className="hero-button">View My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Shaik Khajapeer, an enthusiastic and high-energy-driven professional with over 4 years of experience in Python development. 
            I specialize in developing business logic, creating web applications, and working with modern tools and technologies. 
            I am passionate about solving problems and delivering innovative solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              style={{ '--skill-percentage': `${skill.percentage}%` }}
            >
              <div className="circular-progress">
                <span className="percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
              <div>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a> |{" "}
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:khajapeershaik246@gmail.com">khajapeershaik246@gmail.com</a></p>
        <p>Phone: +91 8088496401</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/shaik-khajapeer" target="_blank" rel="noopener noreferrer">Shaik Khajapeer</a>
        </p>
        <a href="/resume.pdf" download className="download-button">Download Resume</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Shaik Khajapeer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
