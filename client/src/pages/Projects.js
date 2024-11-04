import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => setProjects(response.data.projects))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.tech.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
