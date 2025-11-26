import React, { useState, useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [tiltStyle, setTiltStyle] = useState({});
  const navigate = useNavigate();
  const skills = [
    "Python",
    "Django",
    "PostgreSQL",
    "AI Agents",
    "Langchain",
    "JavaScript",
    "Express.js",
    "MongoDB",
    "Git",
  ];
  const imgRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the home page
      navigate("/");

      // Retry scrolling after a short delay
      setTimeout(() => {
        const retrySection = document.getElementById(id);
        if (retrySection) {
          retrySection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills.length]);

  const handleMouseMove = (e) => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const maxTilt = 20; // Adjusted tilt angle
      const tiltX = (y / rect.height) * maxTilt;
      const tiltY = -(x / rect.width) * maxTilt;
      setTiltStyle({
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`,
        boxShadow: `${-tiltY * 2}px ${tiltX * 2}px 20px rgba(0, 255, 0, 0.3)`,
        transition: "transform 0.1s ease, box-shadow 0.1s ease",
      });
    }
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      boxShadow: "0 10px 20px rgba(0, 255, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      {/* Social Media Vertical Bar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-5 z-30">
        <a
          href="https://linkedin.com/in/kaushik-shahare-84bba7267"
          className="text-green-400 hover:text-green-500 transition-colors duration-300 hover:glow-green"
          target="_blank"
          rel="noopener noreferrer"
          style={{ filter: "drop-shadow(0 0 5px #00ff00)" }}
        >
          <FaLinkedin size={24} className="sm:size-30" />
        </a>
        <a
          href="https://github.com/Kaushik-Shahare"
          className="text-green-400 hover:text-green-500 transition-colors duration-300 hover:glow-green"
          target="_blank"
          rel="noopener noreferrer"
          style={{ filter: "drop-shadow(0 0 5px #00ff00)" }}
        >
          <FaGithub size={24} className="sm:size-30" />
        </a>
        <a
          href="https://www.youtube.com/@Kaushik-Shahare"
          className="text-green-400 hover:text-green-500 transition-colors duration-300 hover:glow-green"
          target="_blank"
          rel="noopener noreferrer"
          style={{ filter: "drop-shadow(0 0 5px #00ff00)" }}
        >
          <FaYoutube size={24} className="sm:size-30" />
        </a>
        <a
          href="https://instagram.com/0_kaushik_"
          className="text-green-400 hover:text-green-500 transition-colors duration-300 hover:glow-green"
          target="_blank"
          rel="noopener noreferrer"
          style={{ filter: "drop-shadow(0 0 5px #00ff00)" }}
        >
          <FaInstagram size={24} className="sm:size-30" />
        </a>
      </div>

      {/* Main Profile Content */}
      <div className="relative flex flex-col lg:flex-row justify-between w-full max-w-7xl mx-auto px-4 z-10 items-center gap-8 lg:gap-16">
        {/* Profile Picture - Mobile First, Desktop Right */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <div
            className="overflow-hidden rounded-full transform-gpu relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={imgRef}
            style={tiltStyle}
          >
            {/* Profile Picture */}
            <img
              src="/FormalPhoto1.jpeg"
              alt="Kaushik Shahare - Software Engineer"
              className="object-cover w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 z-10 rounded-full"
              style={{
                filter: "grayscale(100%) drop-shadow(0 0 10px #00ff00)",
              }}
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full z-20"></div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-matrix-border"></div>
          </div>
        </div>

        {/* Left Side - Profile Info */}
        <div className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-green-400 glow-green">
              Kaushik Shahare
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-green-300 font-semibold">
              Software Engineer - Backend
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto lg:mx-0"></div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-xl text-green-400 font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded-full text-sm hover:bg-opacity-30 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          {/* <div className="space-y-3">
            <h3 className="text-xl text-green-400 font-semibold">Currently Working With</h3>
            <p
              className={`text-xl sm:text-2xl text-green-500 transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              } animate-fade-in-out glow-green font-medium`}
            >
              {skills[currentSkillIndex]}
            </p>
          </div> */}

          {/* Contact Information */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl text-green-400 font-semibold">
              Contact Information
            </h3>
            <div className="space-y-3">
              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaMapMarkerAlt className="text-green-400" size={18} />
                <span className="text-green-200 text-base">
                  Mumbai, Maharashtra, India
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaEnvelope className="text-green-400" size={18} />
                <a
                  href="mailto:kaushikshahare@gmail.com"
                  className="text-green-200 text-base hover:text-green-400 transition-colors duration-300 hover:underline"
                >
                  kaushikshahare4@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <FaPhone className="text-green-400" size={18} />
                <a
                  href="tel:+919359139756"
                  className="text-green-200 text-base hover:text-green-400 transition-colors duration-300 hover:underline"
                >
                  +91 935-913-9756
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-6">
            <div
              onClick={() => scrollToSection("contactMe")}
              className="inline-block px-8 py-3 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 font-medium text-lg cursor-pointer"
            >
              Let's Connect
            </div>
          </div>
        </div>
      </div>

      {/* Matrix Rain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-matrix-rain"></div>
    </div>
  );
};

export default Profile;
