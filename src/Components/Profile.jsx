import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-5 z-20">
        <a
          href="https://linkedin.com/in/kaushik-shahare-84bba7267"
          className="text-green-400 hover:text-green-500 transition-colors duration-300 hover:glow-green"
          target="_blank"
          rel="noopener noreferrer"
          style={{ filter: "drop-shadow(0 0 5px #00ff00)" }}
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Kaushik-Shahare"
          className="text-green-400 hover:text-green-500 transition-colors duration-300 hover:glow-green"
          target="_blank"
          rel="noopener noreferrer"
          style={{ filter: "drop-shadow(0 0 5px #00ff00)" }}
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://instagram.com/0_kaushik_"
          className="text-green-400 hover:text-green-500 transition-colors duration-300 hover:glow-green"
          target="_blank"
          rel="noopener noreferrer"
          style={{ filter: "drop-shadow(0 0 5px #00ff00)" }}
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Profile Content */}
      <div className="relative flex justify-between w-full h-80 px-4 z-10">
        <div className="text-left ml-40 h-40">
          <h1 className="text-8xl font-bold text-green-400 mb-2 animate-bounce-in glow-green">
            Kaushik Shahare
          </h1>
          <p
            className={`text-5xl text-green-500 transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            } animate-fade-in-out glow-green`}
          >
            {skills[currentSkillIndex]}
          </p>
        </div>

        <div
          className="overflow-hidden rounded-full mr-40 transform-gpu relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={imgRef}
          style={tiltStyle}
        >
          {/* Profile Picture */}
          <img
            // src="/Profile.jpg"
            src="/Profile1.png"
            alt="Profile"
            className="object-cover w-80 h-80 z-10"
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
