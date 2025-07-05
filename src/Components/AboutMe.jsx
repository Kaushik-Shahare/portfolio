import React from "react";

const AboutMe = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-400 pt-20">
        About Me
      </h1>
      <div className="bg-black bg-opacity-80 border border-green-400 rounded-lg p-8 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        {/* Profile Image */}
        <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[40vh] lg:h-[40vh] overflow-hidden border-4 border-green-400 shadow-lg flex-shrink-0 rounded-lg">
          <img
            src="/Profile.JPG"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="text-base sm:text-lg md:text-xl text-center lg:text-left max-w-lg text-green-200 mt-6 lg:mt-0">
          <p className="mb-6">
            Hello! I'm <strong className="text-green-400">Kaushik Shahare</strong>, a dedicated Software Engineer 
            with a strong focus on <strong className="text-green-400">Backend Development</strong>. 
            I'm currently in my 4rd year of pursuing a <strong className="text-green-400">B.Tech in Computer Science and 
            Engineering</strong>. I love building meaningful tech solutions and constantly 
            strive to enhance my skills through hands-on projects and experimentation.
          </p>
          <p className="mb-6">
            I'm passionate about leveraging cutting-edge technologies to solve real-world problems. 
            My technical toolkit includes <strong className="text-green-400">Python</strong>, <strong className="text-green-400">Django</strong>, <strong className="text-green-400">Flask</strong>, and <strong className="text-green-400">Artificial Intelligence and Machine Learning</strong>. I'm a lifelong learner who enjoys diving into new frameworks, participating in hackathons, and contributing to <strong className="text-green-400">open-source projects</strong> to stay aligned with industry trends and innovations.
          </p> 

          <div className="mt-6 flex flex-col lg:flex-row lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4">
            <a
              href="https://linkedin.com/in/kaushik-shahare-84bba7267"
              className="px-4 py-2 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded hover:bg-opacity-30 transition-all duration-300 text-center"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Kaushik-Shahare"
              className="px-4 py-2 bg-transparent border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-all duration-300 text-center"
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
