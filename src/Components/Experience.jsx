import React from "react";

const experiences = [
  {
    id: "experience-1",
    title: "Backend Developer Intern (Express)",
    company: "Mr. Loggage",
    duration: "June 2024 - Present",
    description:
      "Working on backend services using Express. Involved in API development, database management, and debugging.",
  },
  {
    id: "experience-2",
    title: "Technical Intern (Backend)",
    company: "Storyvord Ltd.",
    duration: "July 2024 - Present",
    description:
      "Engaged in backend development with a focus on server-side code, API development, and system integration.",
  },
  {
    id: "experience-2",
    title: "Technical Intern (Backend)",
    company: "Storyvord Ltd.",
    duration: "July 2024 - Present",
    description:
      "Engaged in backend development with a focus on server-side code, API development, and system integration.",
  },
  {
    id: "experience-2",
    title: "Technical Intern (Backend)",
    company: "Storyvord Ltd.",
    duration: "July 2024 - Present",
    description:
      "Engaged in backend development with a focus on server-side code, API development, and system integration.",
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-5xl font-bold mb-6 text-green-400">Experience</h1>
      <div className="relative w-full max-w-4xl">
        {/* Central Timeline Line */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-1 h-full bg-gray-600"></div>
        </div>
        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } w-full`}
            >
              {/* Dot on the Timeline */}
              <div className="w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900"></div>
              <div
                className={`ml-6 w-64 h-64 bg-gray-800 border-2 border-green-400 rounded-lg p-4 ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <h2 className="text-xl font-semibold text-green-400">
                  {exp.title}
                </h2>
                <h3 className="text-lg font-medium text-gray-300">
                  {exp.company}
                </h3>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <p className="mt-2 text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
