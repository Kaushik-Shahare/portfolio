import React from "react";

const ExperienceDiv = ({ exp, index, onViewDetails, alignment }) => {
  return (
    <div
      className={`group relative glass-card border-2 border-green-400 rounded-lg p-6 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 transform hover:scale-105 cursor-pointer max-w-md ${
        alignment === "right" ? "text-right ml-auto" : "text-left mr-auto"
      }`}
      onClick={onViewDetails}
    >
      {/* Status Badge */}
      <div className={`absolute top-4 ${alignment === "right" ? "left-4" : "right-4"}`}>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded text-xs font-semibold ${
            exp.status === 'Current' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-600 text-gray-300'
          }`}>
            {exp.status}
          </span>
          {exp.certificate && (
            <span className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-semibold">
              Certified
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
          {exp.title}
        </h2>
        <h3 className="text-lg font-medium text-gray-300 mb-1">{exp.company}</h3>
        {exp.location && (
          <p className="text-sm text-gray-400 mb-1">{exp.location}</p>
        )}
        <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{exp.shortDescription}</p>
        
        {/* Skills Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1 justify-start">
            {exp.skills.slice(0, 3).map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-xs">
                {skill}
              </span>
            ))}
            {exp.skills.length > 3 && (
              <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                +{exp.skills.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <button
          className={`inline-block bg-green-700/80 hover:bg-green-600/90 text-white font-semibold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 text-sm ${
            alignment === "right" ? "mr-auto" : "ml-auto"
          }`}
        >
          View Details →
        </button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ExperienceDiv;
