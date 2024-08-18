import React from "react";
import ExperienceDiv from "./ExperienceDiv";
import Xarrow from "react-xarrows";

const experiences = [
  {
    id: "experience-1",
    title: "Backend Developer Intern (Express)",
    company: "Mr. Loggage",
    location: "Gujrat, India (Remote)",
    duration: "June 2024 - Present",
    description:
      "Working on backend services using Express. Involved in API development, database management, and debugging.",
  },
  {
    id: "experience-2",
    title: "Technical Intern (Backend)",
    company: "Storyvord Ltd.",
    location: "London, UK (Remote)",
    duration: "July 2024 - Present",
    description:
      "Engaged in backend development with a focus on server-side code, API development, and system integration.",
  },
  //   {
  //     id: "experience-3",
  //     title: "Technical Intern (Backend)",
  //     company: "Storyvord Ltd.",
  //     duration: "July 2024 - Present",
  //     description:
  //       "Engaged in backend development with a focus on server-side code, API development, and system integration.",
  //   },
  //   {
  //     id: "experience-4",
  //     title: "Technical Intern (Backend)",
  //     company: "Storyvord Ltd.",
  //     duration: "July 2024 - Present",
  //     description:
  //       "Engaged in backend development with a focus on server-side code, API development, and system integration.",
  //   },
  //   {
  //     id: "experience-5",
  //     title: "Technical Intern (Backend)",
  //     company: "Storyvord Ltd.",
  //     duration: "July 2024 - Present",
  //     description:
  //       "Engaged in backend development with a focus on server-side code, API development, and system integration.",
  //   },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-5xl font-bold mb-6 text-green-400 pt-20">
        Experience
      </h1>
      <div className="relative w-full max-w-4xl">
        {/* Central Timeline Line */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-1 h-full bg-green-600" id="timeline"></div>
        </div>
        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } w-full`}
            >
              {index % 2 === 0 ? (
                <>
                  <ExperienceDiv exp={exp} index={index} />
                  <div
                    id={`dot-${index}`}
                    className="w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900"
                  />
                </>
              ) : (
                <>
                  <div
                    id={`dot-${index}`}
                    className="w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900"
                  />
                  <ExperienceDiv exp={exp} index={index} />
                </>
              )}
            </div>
          ))}
          {/* Connect dots to central line */}
          {experiences.map((_, index) => (
            <Xarrow
              key={`arrow-${index}`}
              start="timeline"
              end={`dot-${index}`}
              color="lightgreen"
              strokeWidth={2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
