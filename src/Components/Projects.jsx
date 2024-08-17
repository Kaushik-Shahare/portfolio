import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "This is a brief description of Project One.",
      link: "https://example.com/project-one",
    },
    {
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      link: "https://example.com/project-two",
    },
    {
      title: "Project Three",
      description: "This is a brief description of Project Three.",
      link: "https://example.com/project-three",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4 ">
      <h1 className="text-4xl font-bold mb-8 text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-yellow-400">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
