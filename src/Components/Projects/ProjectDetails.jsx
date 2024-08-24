import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "./projectsList";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
  };

  const handleVideoPlay = () => {
    setAutoplay(false);
  };

  const handleVideoPause = () => {
    setAutoplay(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-left">
      <Navbar />
      <div className="container relative flex flex-col space-y-16  p-4 md:p-8 lg:p-12">
        {/* Title Section */}
        <div className="p-4 text-left w-full md:w-3/4 lg:w-2/3 mx-auto">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        </div>

        {/* Photo and Video Carousel Section */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="carousel w-full md:w-3/4 lg:w-2/3">
            <Slider {...settings}>
              <div>
                <video
                  controls
                  className="w-full h-auto rounded-lg"
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {project.photos.map((photo, index) => (
                <div key={index}>
                  <img
                    src={photo}
                    alt={`Project ${project.title} - Photo ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Description Section */}
        <div className="p-4 text-left w-full md:w-3/4 lg:w-2/3 mx-auto">
          <p className="text-lg mb-4">{project.detailedDescription}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            Visit Project
          </a>
          <a
            href={project.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline ml-10"
          >
            View on GitHub
          </a>
        </div>

        <div className="flex flex-row w-full md:w-3/4 lg:w-2/3 mx-auto">
          {/* Tech Stack Section */}
          <div className="p-4 text-left ">
            <h2 className="text-2xl font-bold mb-2">Tech Stack</h2>
            <ul className="list-disc list-inside text-lg">
              {project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Libraries Section */}
          <div className="p-4 text-left ml-20">
            <h2 className="text-2xl font-bold mb-2">Libraries</h2>
            <ul className="list-disc list-inside text-lg">
              {project.libraries.map((library, index) => (
                <li key={index}>{library}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="p-4 text-left w-full md:w-3/4 lg:w-2/3 mx-auto">
          <h2 className="text-2xl font-bold mb-2">Additional Information</h2>
          <p className="text-lg">{project.additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
