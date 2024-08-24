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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg z-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 glitch-box flex flex-col justify-between z-20"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-green-400 glitch-text">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {project.shortDescription}
              </p>
            </div>
            <Link
              to={`/projects/${project.id}`}
              className="text-pink-500 hover:underline glitch-text mt-auto"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
