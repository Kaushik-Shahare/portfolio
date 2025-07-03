import React, { useEffect, useState } from "react";
import ExperienceDiv from "./ExperienceDiv";

const experiences = [
  {
    id: "experience-1",
    title: "Backend Developer Intern",
    company: "Mr. Loggage",
    location: "Gujrat, India",
    duration: "June 2024 - December 2024",
    shortDescription:
      "Completed backend services development using Express with API development and database management.",
    certificate: "/certificates/Experience/MrLoggageCertificate.pdf",
    detailedDescription: `
# Backend Developer Intern - Mr. Loggage

## Role Overview
As a Backend Developer Intern at Mr. Loggage, I've been instrumental in developing robust backend services using Express.js. This role has provided me with extensive hands-on experience in server-side development and API architecture.

## Key Responsibilities
- **API Development**: Designed and implemented RESTful APIs to support various client applications
- **Database Management**: Worked with SQL and NoSQL databases for data storage and retrieval
- **Debugging & Testing**: Identified and resolved backend issues, ensuring smooth application performance
- **Code Optimization**: Improved existing code structure for better performance and maintainability
- **Documentation**: Created comprehensive API documentation for team collaboration

## Technical Achievements
- Successfully reduced API response time by 30% through query optimization
- Implemented authentication and authorization systems for secure access
- Developed middleware for logging and error handling
- Integrated third-party services and payment gateways

## Skills Developed
- Advanced Express.js and Node.js development
- Database design and optimization (MongoDB, PostgreSQL)
- API security and authentication (JWT, OAuth)
- Version control with Git and collaborative development
- Testing frameworks (Jest, Mocha)
    `,
    skills: [
      "Express.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "REST APIs",
      "Git",
    ],
    type: "Backend Development",
    status: "Completed",
  },
  {
    id: "experience-2",
    title: "Backend Developer Intern",
    company: "Storyvord Ltd.",
    location: "London, UK (Remote)",
    duration: "July 2024 - Jan 2025",
    shortDescription:
      "Focused on Django backend development with server-side code and system integration.",
    certificate: "/certificates/Experience/StoryvordCertificate.pdf",
    detailedDescription: `
# Backend Developer Intern - Storyvord Ltd.

## Company Overview
Storyvord Ltd. is a London-based technology company specializing in digital storytelling platforms and content management solutions.

## Role Details
During my tenure as a Backend Developer Intern, I worked extensively with Django framework to build scalable backend solutions for the company's digital platforms.

## Key Contributions
- **Django Development**: Built robust backend systems using Django and Django REST Framework
- **API Integration**: Developed and integrated various APIs for content management
- **Database Design**: Designed efficient database schemas using Django ORM
- **Server-side Logic**: Implemented complex business logic for content processing
- **System Integration**: Integrated multiple third-party services and APIs

## Major Projects
### Content Management System
- Developed a comprehensive CMS backend supporting multi-user content creation
- Implemented role-based access control and content approval workflows
- Built automated content processing pipelines

### API Development
- Created RESTful APIs serving mobile and web applications
- Implemented real-time features using Django Channels
- Developed comprehensive API documentation using Django REST Swagger

## Technical Skills Gained
- Advanced Django and Python development
- RESTful API design and implementation
- Database optimization and query performance
- Cloud deployment and DevOps practices
- Agile development methodologies
    `,
    skills: [
      "Django",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
    type: "Backend Development",
    status: "Completed",
  },
  {
    id: "experience-3",
    title: "Software Engineer Intern",
    company: "Storyvord Ltd.",
    location: "London, UK (Remote)",
    duration: "Jan 2025 - Present",
    shortDescription:
      "Managing server-side code, Azure deployment, cloud monitoring infrastructure, and developing AI agents using LangGraph.",
    detailedDescription: `
# Software Engineer Intern - Storyvord Ltd.

## Role Evolution
Following my successful completion as a Backend Developer Intern, I was promoted to Software Engineer Intern, expanding my responsibilities to include cloud infrastructure and DevOps practices.

## Current Responsibilities
- **Server Management**: Maintaining and optimizing server-side applications
- **Azure Deployment**: Managing application deployments on Microsoft Azure cloud platform
- **Cloud Monitoring**: Implementing comprehensive monitoring solutions using industry-standard tools
- **AI Agent Development**: Designing and implementing intelligent AI agents using LangGraph for automated workflows and decision-making processes

## AI Agent Development
### LangGraph Integration
- Designed and developed intelligent AI agents using LangGraph framework
- Implemented multi-step reasoning workflows for complex business logic automation
- Created stateful conversation flows and decision trees for enhanced user interactions
- Integrated AI agents with existing backend systems for seamless data processing

### Agent Architecture
- Built modular agent systems with clear separation of concerns
- Implemented agent memory and context management for persistent conversations
- Developed custom tools and function calling capabilities for agents
- Created monitoring and logging systems specifically for AI agent performance


## Monitoring & Observability Stack
### Grafana
- Set up dashboards for real-time application performance monitoring
- Created custom visualizations for business metrics and KPIs
- Implemented alerting systems for proactive issue detection

### Prometheus
- Configured metrics collection from various application components
- Set up service discovery and monitoring targets
- Developed custom metrics for application-specific monitoring needs

### Promtail & Grafana Loki
- Implemented centralized logging infrastructure
- Set up log aggregation from multiple services and containers
- Created log-based alerting and monitoring rules


## Cloud Infrastructure
- **Azure Services**: Working with Azure App Service, Azure SQL Database, Azure Storage
- **DevOps Practices**: Implementing CI/CD pipelines using Azure DevOps
- **Container Management**: Working with Docker containers and orchestration
- **Security**: Implementing security best practices for cloud deployments

## Impact & Achievements
- Reduced system downtime by 40% through proactive monitoring
- Implemented automated deployment pipelines improving deployment frequency
- Set up comprehensive logging reducing debugging time significantly
- Optimized cloud resource usage resulting in cost savings
- Developed AI agents that automated 60% of repetitive business processes
- Created intelligent decision-making systems reducing manual intervention by 45%

## Future Goals
- Expanding knowledge in Kubernetes and container orchestration
- Learning Infrastructure as Code (IaC) with Terraform
- Exploring microservices architecture patterns
    `,
    skills: [
      "Azure",
      "LangChain/LangGraph",
      "Grafana",
      "Prometheus",
      "Promtail",
      "Grafana Loki",
      "Docker",
      "DevOps",
      "CI/CD",
    ],
    type: "Cloud & DevOps",
    status: "Current",
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  const openCertificate = (certificate) => {
    if (certificate) {
      window.open(certificate, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-20">
      <h1 className="text-5xl font-bold mb-6 text-green-400 pt-20">
        Experience
      </h1>
      <div className="relative w-full max-w-6xl">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>

        <div className="relative space-y-16">
          {experiences
            .slice()
            .reverse()
            .map((exp, index) => (
              <div
                key={exp.id}
                className={`flex items-center w-full ${index % 2 === 0
                    ? "justify-start pr-1/2"
                    : "justify-end pl-1/2"
                  }`}
              >
                {index % 2 === 0 ? (
                  <div className="flex items-center w-full">
                    <div className="w-1/2 pr-8">
                      <ExperienceDiv
                        exp={exp}
                        index={index}
                        onViewDetails={() => openModal(exp)}
                        alignment="right"
                      />
                    </div>
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 z-10 relative"></div>
                      {/* Arrow pointing from timeline to card */}
                      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 w-8 h-0.5 bg-green-400"></div>
                      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 translate-x-8 w-0 h-0 border-l-4 border-l-green-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ) : (
                  <div className="flex items-center w-full">
                    <div className="w-1/2"></div>
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 z-10 relative"></div>
                      {/* Arrow pointing from timeline to card */}
                      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 w-8 h-0.5 bg-green-400"></div>
                      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 -translate-x-8 w-0 h-0 border-r-4 border-r-green-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <ExperienceDiv
                        exp={exp}
                        index={index}
                        onViewDetails={() => openModal(exp)}
                        alignment="left"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Experience Details Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border-2 border-green-400 rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6 border-b border-green-400/30">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  {selectedExperience.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                  <span className="font-semibold">
                    {selectedExperience.company}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>{selectedExperience.location}</span>
                  <span className="text-gray-400">•</span>
                  <span>{selectedExperience.duration}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${selectedExperience.status === "Current"
                        ? "bg-green-600 text-white"
                        : "bg-gray-600 text-gray-300"
                      }`}
                  >
                    {selectedExperience.status}
                  </span>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl font-bold ml-4"
              >
                ×
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
              {/* Skills Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              <div className="prose prose-invert prose-green max-w-none text-left">
                <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {selectedExperience.detailedDescription
                    .split("\n")
                    .map((line, index) => {
                      if (line.startsWith("# ")) {
                        return (
                          <h1
                            key={index}
                            className="text-2xl font-bold text-green-400 mt-6 mb-4 text-left"
                          >
                            {line.substring(2)}
                          </h1>
                        );
                      } else if (line.startsWith("## ")) {
                        return (
                          <h2
                            key={index}
                            className="text-xl font-semibold text-green-300 mt-5 mb-3 text-left"
                          >
                            {line.substring(3)}
                          </h2>
                        );
                      } else if (line.startsWith("### ")) {
                        return (
                          <h3
                            key={index}
                            className="text-lg font-medium text-green-200 mt-4 mb-2 text-left"
                          >
                            {line.substring(4)}
                          </h3>
                        );
                      } else if (line.startsWith("- ")) {
                        const bulletText = line.substring(2);
                        return (
                          <li
                            key={index}
                            className="text-gray-300 mb-1 ml-4 text-left"
                          >
                            {bulletText
                              .split(/(\*\*[^*]+\*\*)/)
                              .map((part, partIndex) => {
                                if (
                                  part.startsWith("**") &&
                                  part.endsWith("**")
                                ) {
                                  return (
                                    <strong
                                      key={partIndex}
                                      className="text-green-300 font-semibold"
                                    >
                                      {part.slice(2, -2)}
                                    </strong>
                                  );
                                }
                                return part;
                              })}
                          </li>
                        );
                      } else if (line.trim() === "") {
                        return <br key={index} />;
                      } else {
                        return (
                          <p
                            key={index}
                            className="text-gray-300 mb-3 text-left"
                          >
                            {line
                              .split(/(\*\*[^*]+\*\*)/)
                              .map((part, partIndex) => {
                                if (
                                  part.startsWith("**") &&
                                  part.endsWith("**")
                                ) {
                                  return (
                                    <strong
                                      key={partIndex}
                                      className="text-green-300 font-semibold"
                                    >
                                      {part.slice(2, -2)}
                                    </strong>
                                  );
                                }
                                return part;
                              })}
                          </p>
                        );
                      }
                    })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-green-400/30 bg-gray-900">
              <div className="flex gap-3">
                {selectedExperience.certificate && (
                  <button
                    onClick={() =>
                      openCertificate(selectedExperience.certificate)
                    }
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors duration-300"
                  >
                    Download Certificate
                  </button>
                )}
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
