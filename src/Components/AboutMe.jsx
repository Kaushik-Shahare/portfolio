import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <h1 className="text-4xl font-bold mb-4 text-green-400">About Me</h1>
      <div className="w-40 h-40 overflow-hidden rounded-full mb-4 border-4 border-green-400">
        <img
          src="/Profile.jpeg"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-lg text-center max-w-md text-green-300">
        Hello! I'm Kaushik Shahare, a full stack developer currently pursuing my
        B.Tech in Computer Science and Engineering (3rd year). I have a strong
        passion for new technologies and love exploring them.
      </p>
    </div>
  );
};

export default AboutMe;
