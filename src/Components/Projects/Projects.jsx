import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import projects from "./projectsList";

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 matrix-theme">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-green-400 glitch-text pt-20 z-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl z-20">
        {projects.slice().reverse().map((project) => (
          <div
            key={project.id}
            className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-lg shadow-2xl border border-green-500 glitch-box flex flex-col justify-between z-20 hover:border-green-400 hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105"
          >
            {/* Project Image/Preview */}
            <div className="relative overflow-hidden rounded-lg mb-4 h-48">
              {project.photos && project.photos.length > 0 ? (
                <img
                  src={project.photos[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div 
                className="w-full h-full bg-gradient-to-br from-green-500/20 to-green-700/20 flex items-center justify-center"
                style={{ display: project.photos && project.photos.length > 0 ? 'none' : 'flex' }}
              >
                <div className="text-6xl text-green-400/50">
                  {project.techStack && project.techStack[0] === 'React' ? 'R' : 
                   project.techStack && project.techStack[0] === 'Python' ? 'P' : 
                   project.techStack && project.techStack[0] === 'JavaScript' ? 'JS' : 'T'}
                </div>
              </div>
              
              {/* Overlay with tech stack */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-green-400 font-semibold mb-2">Tech Stack</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">
                {project.shortDescription}
              </p>
              
              {/* Project Links */}
              <div className="flex space-x-3 mb-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                )}
                {project.gitHub && (
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
            
            <Link
              to={`/projects/${project.id}`}
              className="inline-block text-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
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
