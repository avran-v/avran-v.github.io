import React, { useEffect, useState } from 'react';
import Project from "../components/Project";

const Projects = ({ className }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/assets/projDescriptions.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className={className}>
      <main className="w-full">
        <div className="flex flex-col items-center mt-5 w-full">
          <p className="text-center w-full mb-3">Want to see what I'm working on currently? Check out my <a target="_blank" className="text-blue-500 hover:text-blue-700" href="https://github.com/avran-v">Github</a>!</p>
          <p className="text-center w-full">Here are some of my recent projects!</p>
          <div className="flex flex-col items-center w-full">
            {projects.map((project, index) => (
              <div key={index} className="w-2/3">
                <Project 
                  title={project.title} 
                  content={project.content} 
                  github={project.github} 
                  image={project.image} 
                  devpost={project.devpost}
                  demovid={project.demovid}
                  subtitle={project.subtitle}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projects;
