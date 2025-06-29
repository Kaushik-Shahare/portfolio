import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "./projectsList";
import ReactMarkdown from "react-markdown";

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
          <h1 className="text-4xl font-bold mb-4 relative z-50">Project Not Found</h1>
          <p className="text-green-300 mb-6 relative z-50">The project you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded transition-colors duration-300 relative z-50"
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
    <div className="min-h-screen bg-black text-left relative" style={{ 
      backgroundColor: '#000000', 
      zIndex: 100,
      position: 'relative'
    }}>
      {/* Full page overlay to block matrix rain */}
      <div className="fixed inset-0 bg-black z-50" style={{ backgroundColor: '#000000' }}></div>
      
      {/* Main content container */}
      <div className="relative z-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-green-400 border border-green-400 rounded transition-colors duration-300"
            >
              ← Back to Portfolio
            </Link>
          </div>

          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
              {project.title}
            </h1>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
            <p className="text-green-300 text-lg max-w-3xl mx-auto">
              {project.shortDescription}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded transition-colors duration-300 font-semibold"
            >
              Live Demo
            </a>
          )}
          {project.gitHub && (
            <a
              href={project.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors duration-300 font-semibold"
            >
              View on GitHub
            </a>
          )}
          </div>

          {/* Media Carousel Section */}
          {(project.photos?.length > 0 || project.video?.length > 0) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Project Gallery</h2>
              <div className="bg-gray-900 border border-green-400/30 rounded-lg p-4">
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
            <div className="bg-gray-900/60 border border-green-400/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Libraries Section */}
            <div className="bg-gray-900/60 border border-green-400/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                Libraries & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.libraries?.map((library, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                  >
                    {library}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Description Section */}
          <div className="bg-gray-900/40 border border-green-400/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-400 mb-6">Project Overview</h2>
            <div className="prose prose-invert prose-green max-w-none text-left">
              <ReactMarkdown
                components={{
                  h1: ({ children, ...props }) => (
                    <h1 className="text-3xl font-bold text-green-400 mt-8 mb-4 text-left" {...props}>
                      {children}
                    </h1>
                  ),
                  h2: ({ children, ...props }) => (
                    <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-3 text-left" {...props}>
                      {children}
                    </h2>
                  ),
                  h3: ({ children, ...props }) => (
                    <h3 className="text-xl font-medium text-green-200 mt-4 mb-2 text-left" {...props}>
                      {children}
                    </h3>
                  ),
                  p: ({ children, ...props }) => (
                    <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left" {...props}>
                      {children}
                    </p>
                  ),
                  li: ({ children, ...props }) => (
                    <li className="text-gray-300 mb-1 text-left" {...props}>
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
            <div className="bg-gray-900/40 border border-green-400/30 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-green-400 mb-6">Additional Information</h2>
              <div className="prose prose-invert prose-green max-w-none text-left">
                <ReactMarkdown
                  components={{
                    h1: ({ children, ...props }) => (
                      <h1 className="text-3xl font-bold text-green-400 mt-8 mb-4 text-left" {...props}>
                        {children}
                      </h1>
                    ),
                    h2: ({ children, ...props }) => (
                      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-3 text-left" {...props}>
                        {children}
                      </h2>
                    ),
                    h3: ({ children, ...props }) => (
                      <h3 className="text-xl font-medium text-green-200 mt-4 mb-2 text-left" {...props}>
                        {children}
                      </h3>
                    ),
                    p: ({ children, ...props }) => (
                      <p className="text-gray-300 text-lg leading-relaxed mb-4 text-left" {...props}>
                        {children}
                      </p>
                    ),
                    li: ({ children, ...props }) => (
                      <li className="text-gray-300 mb-1 text-left" {...props}>
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
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300 font-semibold text-lg"
              >
                Launch Project
              </a>
            )}
            {project.gitHub && (
              <a
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 font-semibold text-lg"
              >
                Explore Code
              </a>
            )}
            <Link
              to="/"
              className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-lg transition-all duration-300 font-semibold text-lg"
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
