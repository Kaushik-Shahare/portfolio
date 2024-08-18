import React from "react";
import "./Projects.css"; // Import the CSS file with styles for glitch and matrix effects

const Projects = () => {
  const projects = [
    {
      title: "Event Manager",
      description:
        "Web application to manage events of a organization. Know upcomming events, past events, and create new events. Register for events and get notifications.",
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
        "This is my portfolio website, where I tell the world about myself. I also showcase my projects, skills, experience.",
      link: "https://example.com/project-three",
    },
    {
      title: "News Summary",
      description:
        "User can click the photo of the news article and see a summary of the article. If user wants a summary of a article on a website they can paste the URL and get a summary of the article with title, date, auther, etc.",
      link: "https://example.com/project-three",
    },
    {
      title: "Virtual Piano Player",
      description:
        "User can draw on a plane white surface (paper) and then place the camera on top of the paper. The camera will detect the keys (white, black) and play the piano sounds. The implementation of hand detection and finger detection is remaining to implement.",
      link: "https://example.com/project-three",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 ">
      <h1 className="text-4xl font-bold mb-8 text-green-400 glitch-text">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 glitch-box"
          >
            <h2 className="text-2xl font-bold mb-2 text-green-400 glitch-text">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline glitch-text"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      {/* Matrix Rain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-matrix-rain"></div>
    </div>
  );
};

export default Projects;
