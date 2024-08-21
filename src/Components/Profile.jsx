import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [tiltStyle, setTiltStyle] = useState({});
  const skills = ["Full Stack Developer", "JavaScript", "React", "Node.js"];
  const imgRef = useRef(null);

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
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-5 ">
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
          href="https://instagram.com/0_kaushik_"
          className="text-green-400 hover:text-green-500 transition-colors duration-300 hover:glow-green"
          target="_blank"
          rel="noopener noreferrer"
          style={{ filter: "drop-shadow(0 0 5px #00ff00)" }}
        >
          <FaInstagram size={24} className="sm:size-30" />
        </a>
      </div>

      {/* Profile Content */}
      <div className="relative flex flex-col-reverse sm:flex-row justify-between w-full sm:h-80 px-4 z-10 items-center">
        <div className="text-left sm:ml-10 mt-8 sm:mt-20 h-40">
          <div className="hero-container mb-4 sm:mb-8">
            <h2
              className="hero glitch layers text-4xl sm:text-7xl"
              data-text="Kaushik Shahare"
            >
              <span className="text-4xl sm:text-7xl font-bold animate-bounce-in glow-green">
                Kaushik Shahare
              </span>
            </h2>
          </div>
          <p
            className={`text-3xl sm:text-5xl text-green-500 transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            } animate-fade-in-out glow-green`}
          >
            {skills[currentSkillIndex]}
          </p>
        </div>

        <div
          className="overflow-hidden rounded-full mt-8 sm:mt-0 sm:mr-10 transform-gpu relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={imgRef}
          style={tiltStyle}
        >
          {/* Profile Picture */}
          <img
            src="/Profile1.png"
            alt="Profile"
            className="object-cover w-40 h-40 sm:w-80 sm:h-80 z-10"
            style={{ filter: "drop-shadow(0 0 10px #00ff00)" }}
          />

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-matrix-border"></div>
        </div>
      </div>

      {/* Matrix Rain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-matrix-rain"></div>
    </div>
  );
};

export default Profile;
