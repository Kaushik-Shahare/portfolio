import React from "react";

const AboutMe = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-green-400 glitch-text pt-20 pb-10 text-center">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-6xl">
        {/* Profile Image */}
        <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[60vh] lg:h-[60vh] overflow-hidden border-4 border-green-400 shadow-lg flex-shrink-0">
          <img
            src="/Profile.jpeg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="text-base sm:text-lg md:text-xl text-center lg:text-left max-w-lg text-gray-300 mt-6 lg:mt-0">
          <p className="mb-8">
            Hello! I'm Kaushik Shahare, a passionate Full Stack Developer
            primarily focused on Backend Development. Currently, I’m pursuing a
            B.Tech in Computer Science and Engineering (3rd year). I enjoy
            exploring new technologies and working on diverse projects.
          </p>
          <p className="mb-8">
            I am deeply interested in exploring cutting-edge technologies and
            applying my skills to solve real-world problems. My expertise spans
            various programming languages and frameworks, including JavaScript,
            React, Node, Python, Django, Flask, and ML. I’m passionate about
            continuous learning and actively contribute to open-source projects
            to stay at the forefront of industry trends.
          </p>

          <div className="mt-6 flex flex-col lg:flex-row lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
            <a
              href="https://linkedin.com/in/kaushik-shahare-84bba7267"
              className="text-green-400 hover:text-green-300 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Kaushik-Shahare"
              className="text-green-400 hover:text-green-300 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      {/* Matrix Rain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-matrix-rain"></div>
    </div>
  );
};

export default AboutMe;
