import React from 'react';

const projects = [
  {
    title: 'Project 1',
    overview: 'A brief description of the project and its objectives.',
    role: 'Frontend Developer',
    technologies: ['React', 'Node.js', 'CSS'],
    challenges: 'Faced performance issues with large datasets.',
    solutions: 'Implemented lazy loading and optimized API calls.',
    results: 'Improved load time by 40%.',
    image: '/path/to/project1-image.jpg',
    demoLink: 'https://project1-demo.com',
  },
  // ...other projects...
];

const Projects = () => {
  return (
    <section className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={`${project.title} screenshot`} />
          <h3>{project.title}</h3>
          <p>{project.overview}</p>
          <p><strong>Role:</strong> {project.role}</p>
          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          <p><strong>Challenges:</strong> {project.challenges}</p>
          <p><strong>Solutions:</strong> {project.solutions}</p>
          <p><strong>Results:</strong> {project.results}</p>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
