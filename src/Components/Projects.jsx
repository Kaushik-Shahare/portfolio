import React from "react";
import "./Projects.css"; // Import the CSS file with styles for glitch and matrix effects

const Projects = () => {
  const projects = [
    {
      title: "Event Manager",
      description:
        "Web application to manage events of an organization. Know upcoming events, past events, and create new events. Register for events and get notifications.",
      link: "https://example.com/project-one",
    },
    {
      title: "Chat App",
      description:
        "User can live chat with other users on the website implemented using socket.io. User can see the online status of other users. Emojis are supported. User can edit their profile.",
      link: "https://example.com/project-two",
    },
    {
      title: "Portfolio Website",
      description:
        "This is my portfolio website, where I tell the world about myself. I also showcase my projects, skills, and experience.",
      link: "https://example.com/project-three",
    },
    {
      title: "News Summary",
      description:
        "User can click the photo of the news article and see a summary of the article. If the user wants a summary of an article on a website, they can paste the URL and get a summary of the article with title, date, author, etc.",
      link: "https://example.com/project-four",
    },
    {
      title: "Virtual Piano Player",
      description:
        "User can draw on a white surface (paper) and then place the camera on top of the paper. The camera will detect the keys (white, black) and play the piano sounds. Hand detection and finger detection are pending implementation.",
      link: "https://example.com/project-five",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-green-400 glitch-text pt-20 z-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 glitch-box flex flex-col justify-between z-20"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-green-400 glitch-text">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline glitch-text mt-auto"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      {/* Matrix Rain Overlay */}
      {/* <div className="absolute inset-0 z-10 pointer-events-none animate-matrix-rain opacity-50"></div> */}
    </div>
  );
};

export default Projects;
