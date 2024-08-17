import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="container relative overflow-hidden bg-transparent">
      <Navbar />
      <div
        className={`section transition-transform duration-1000 ease-in-out ${
          activeSection === "profile" ? "opacity-100" : "opacity-0"
        }`}
        data-section="profile"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <Profile />
      </div>
      <div
        className={`section transition-opacity duration-1000 ease-in-out ${
          activeSection === "aboutme" ? "opacity-100" : "opacity-0"
        }`}
        data-section="aboutme"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <AboutMe />
      </div>
      <div
        className={`section transition-transform duration-1000 ease-in-out ${
          activeSection === "projects" ? "opacity-100" : "opacity-0"
        }`}
        data-section="projects"
        ref={(el) => (sectionRefs.current[2] = el)}
      >
        <Projects />
      </div>
    </div>
  );
};

export default Home;
