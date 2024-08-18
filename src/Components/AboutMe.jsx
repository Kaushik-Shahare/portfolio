import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
      <h1 className="text-5xl font-bold mb-6 text-green-400">About Me</h1>
      <div className="w-48 h-48 overflow-hidden rounded-full mb-6 border-4 border-green-400 shadow-lg">
        <img
          src="/Profile.jpeg"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-xl text-center max-w-lg text-gray-300">
        Hello! I'm Kaushik Shahare, a passionate Full Stack Developer primarily
        focused on Backend Development. Currently, I’m pursuing a B.Tech in
        Computer Science and Engineering (3rd year). I enjoy exploring new
        technologies and working on diverse projects.
      </p>
      <div className="mt-6 flex space-x-4">
        <a
          href="https://linkedin.com/in/your-profile" // Replace with your LinkedIn profile
          className="text-green-400 hover:text-green-300 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/your-profile" // Replace with your GitHub profile
          className="text-green-400 hover:text-green-300 transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
