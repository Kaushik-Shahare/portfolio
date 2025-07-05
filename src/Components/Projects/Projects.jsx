import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import projects from "./projectsList";

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 matrix-theme">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-green-400 pt-20 z-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl z-20">
        {projects.slice().reverse().map((project) => (
          <div
            key={project.id}
            className="group relative bg-black bg-opacity-80 border border-green-400 rounded-lg p-6 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 flex flex-col justify-between z-20"
          >
            {/* Project Image/Preview */}
            <div className="relative overflow-hidden rounded-lg mb-4 h-48">
              {project.photos && project.photos.length > 0 ? (
                <img
                  src={project.photos[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  style={project.id === 8 ? { 
                    objectFit: 'cover',
                    objectPosition: 'top',
                    height: '192px',
                    transform: 'scale(1.5) translateY(-15%)'
                  } : {}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className="w-full h-full bg-green-400 bg-opacity-10 rounded-lg border border-green-400 border-opacity-30 flex items-center justify-center"
                style={{ display: project.photos && project.photos.length > 0 ? 'none' : 'flex' }}
              >
                <div className="text-center">
                  <div className="text-6xl text-green-400/50 mb-2">
                    {project.techStack && project.techStack[0] === 'React' ? 'R' : 
                     project.techStack && project.techStack[0] === 'Python' ? 'P' : 
                     project.techStack && project.techStack[0] === 'JavaScript' ? 'JS' : 'T'}
                  </div>
                  <p className="text-green-400 text-xs">Project</p>
                </div>
              </div>
              
              {/* Overlay with tech stack */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-green-400 font-semibold mb-2">Tech Stack</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow">
              <h2 className="text-lg font-semibold mb-3 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-green-200 text-sm mb-4 line-clamp-3">
                {project.shortDescription}
              </p>
              
              {/* Project Links */}
              <div className="flex space-x-3 mb-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-2 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded hover:bg-opacity-30 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                )}
                {project.gitHub && (
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-2 bg-transparent border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
            
            <Link
              to={`/projects/${project.id}`}
              className="inline-block text-center bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 font-medium py-2 px-4 text-sm"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
