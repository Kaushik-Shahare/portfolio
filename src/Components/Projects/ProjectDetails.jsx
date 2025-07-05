import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "./projectsList";
import ReactMarkdown from "react-markdown";
import MatrixRain from "../../routes/MatrixRain";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  const [autoplay, setAutoplay] = useState(true);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 relative z-50" style={{ backgroundColor: '#000000' }}>
        <div className="absolute inset-0 bg-black bg-opacity-95 z-40"></div>
        <Navbar />
        <div className="text-center relative z-50">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 relative z-50">Project Not Found</h1>
          <p className="text-green-300 mb-6 relative z-50 text-base">The project you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="px-4 py-2 bg-transparent border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors duration-300 relative z-50 text-sm"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots custom-dots",
  };

  const handleVideoPlay = () => {
    setAutoplay(false);
  };

  const handleVideoPause = () => {
    setAutoplay(true);
  };

  return (
    <div className="min-h-screen bg-black text-left relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MatrixRain />
      </div>
      {/* Main content container */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-transparent border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors duration-300 text-sm"
            >
              ← Back to Portfolio
            </Link>
          </div>

          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">
              {project.title}
            </h1>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
            <p className="text-green-200 text-base max-w-3xl mx-auto">
              {project.shortDescription}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded hover:bg-opacity-30 transition-colors duration-300 text-sm"
              >
                Live Demo
              </a>
            )}
            {project.gitHub && (
              <a
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors duration-300 text-sm"
              >
                View on GitHub
              </a>
            )}
          </div>

          {/* Media Carousel Section */}
          {(project.photos?.length > 0 || project.video?.length > 0) && (
            <div className="mb-16">
              <h2 className="text-xl font-bold text-green-400 mb-6 text-center">Project Gallery</h2>
              <div className="bg-black bg-opacity-80 border border-green-400 rounded-lg p-6">
                <Slider {...settings}>
                  {project.video?.map((video, index) => (
                    <div key={`video-${index}`} className="px-2">
                      <video
                        controls
                        className="w-full h-auto rounded-lg border border-green-400/20"
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                      >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                  {project.photos?.map((photo, index) => (
                    <div key={`photo-${index}`} className="px-2">
                      <img
                        src={photo}
                        alt={`${project.title} - Screenshot ${index + 1}`}
                        className="w-full h-auto rounded-lg border border-green-400/20"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}

          {/* Tech Stack and Libraries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Tech Stack Section */}
            <div className="bg-black bg-opacity-80 border border-green-400 rounded-lg p-6">
              <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Libraries Section */}
            <div className="bg-black bg-opacity-80 border border-green-400 rounded-lg p-6">
              <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                Libraries & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.libraries?.map((library, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded-full text-sm"
                  >
                    {library}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Description Section */}
          <div className="bg-black bg-opacity-80 border border-green-400 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-green-400 mb-6">Project Overview</h2>
            <div className="prose prose-invert prose-green max-w-none text-left">
              <ReactMarkdown
                components={{
                  h1: ({ children, ...props }) => (
                    <h1 className="text-xl font-bold text-green-400 mt-8 mb-4 text-left" {...props}>
                      {children}
                    </h1>
                  ),
                  h2: ({ children, ...props }) => (
                    <h2 className="text-lg font-semibold text-green-300 mt-6 mb-3 text-left" {...props}>
                      {children}
                    </h2>
                  ),
                  h3: ({ children, ...props }) => (
                    <h3 className="text-base font-medium text-green-200 mt-4 mb-2 text-left" {...props}>
                      {children}
                    </h3>
                  ),
                  p: ({ children, ...props }) => (
                    <p className="text-gray-300 text-base leading-relaxed mb-4 text-left" {...props}>
                      {children}
                    </p>
                  ),
                  li: ({ children, ...props }) => (
                    <li className="text-gray-300 mb-1 text-left text-sm" {...props}>
                      {children}
                    </li>
                  ),
                  ul: ({ children, ...props }) => (
                    <ul className="list-disc list-inside mb-4 text-left" {...props}>
                      {children}
                    </ul>
                  ),
                  ol: ({ children, ...props }) => (
                    <ol className="list-decimal list-inside mb-4 text-left" {...props}>
                      {children}
                    </ol>
                  ),
                  strong: ({ children, ...props }) => (
                    <strong className="text-green-300 font-semibold" {...props}>
                      {children}
                    </strong>
                  ),
                  code: ({ children, ...props }) => (
                    <code className="bg-gray-800 text-green-300 px-1 py-0.5 rounded text-sm" {...props}>
                      {children}
                    </code>
                  ),
                }}
              >
                {project.detailedDescription}
              </ReactMarkdown>
            </div>
          </div>

          {/* Additional Information Section */}
          {project.additionalInfo && (
            <div className="bg-black bg-opacity-80 border border-green-400 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-bold text-green-400 mb-6">Additional Information</h2>
              <div className="prose prose-invert prose-green max-w-none text-left">
                <ReactMarkdown
                  components={{
                    h1: ({ children, ...props }) => (
                      <h1 className="text-xl font-bold text-green-400 mt-8 mb-4 text-left" {...props}>
                        {children}
                      </h1>
                    ),
                    h2: ({ children, ...props }) => (
                      <h2 className="text-lg font-semibold text-green-300 mt-6 mb-3 text-left" {...props}>
                        {children}
                      </h2>
                    ),
                    h3: ({ children, ...props }) => (
                      <h3 className="text-base font-medium text-green-200 mt-4 mb-2 text-left" {...props}>
                        {children}
                      </h3>
                    ),
                    p: ({ children, ...props }) => (
                      <p className="text-gray-300 text-base leading-relaxed mb-4 text-left" {...props}>
                        {children}
                      </p>
                    ),
                    li: ({ children, ...props }) => (
                      <li className="text-gray-300 mb-1 text-left text-sm" {...props}>
                        {children}
                      </li>
                    ),
                    ul: ({ children, ...props }) => (
                      <ul className="list-disc list-inside mb-4 text-left" {...props}>
                        {children}
                      </ul>
                    ),
                    ol: ({ children, ...props }) => (
                      <ol className="list-decimal list-inside mb-4 text-left" {...props}>
                        {children}
                      </ol>
                    ),
                    strong: ({ children, ...props }) => (
                      <strong className="text-green-300 font-semibold" {...props}>
                        {children}
                      </strong>
                    ),
                    code: ({ children, ...props }) => (
                      <code className="bg-gray-800 text-green-300 px-1 py-0.5 rounded text-sm" {...props}>
                        {children}
                      </code>
                    ),
                  }}
                >
                  {project.additionalInfo}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {/* Bottom Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded hover:bg-opacity-30 transition-colors duration-300 text-sm"
              >
                Launch Project
              </a>
            )}
            {project.gitHub && (
              <a
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-colors duration-300 text-sm"
              >
                Explore Code
              </a>
            )}
            <Link
              to="/"
              className="px-4 py-2 bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded transition-all duration-300 text-sm"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
