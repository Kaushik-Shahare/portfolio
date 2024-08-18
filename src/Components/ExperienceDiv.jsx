import React from "react";

const ExperienceDiv = ({ exp, index }) => {
  return (
    <div
      className={`ml-6 mr-6 w-64 h-64 bg-gray-800 border-2 border-green-400 rounded-lg p-4 ${
        index % 2 === 0 ? "text-left" : "text-right"
      }`}
    >
      <h2 className="text-xl font-semibold text-green-400">{exp.title}</h2>
      <h3 className="text-lg font-medium text-gray-300">{exp.company}</h3>
      <p className="text-sm text-gray-300">{exp.location}</p>
      <p className="text-sm text-gray-400">{exp.duration}</p>
      <p className="mt-2 text-gray-300">{exp.description}</p>
    </div>
  );
};

export default ExperienceDiv;
