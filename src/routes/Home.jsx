import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import ContactMe from "../Components/ContactMe";

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

  const handleScroll = (e) => {
    const container = e.target;
    const currentScrollPos = container.scrollTop;
    const maxScrollPos = container.scrollHeight - container.clientHeight;

    // If the user has scrolled to the bottom, snap to the next section
    if (currentScrollPos >= maxScrollPos) {
      const currentIndex = sectionRefs.current.findIndex(
        (ref) => ref.dataset.section === activeSection
      );
      const nextSection = sectionRefs.current[currentIndex + 1];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <Navbar />
      <div
        className="container relative flex flex-col space-y-16 md:space-y-24 lg:space-y-32 p-4 md:p-8 lg:p-12"
        onScroll={handleScroll}
      >
        <div
          className={`section transition-opacity duration-1000 ease-in-out ${
            activeSection === "profile" ? "opacity-100" : "opacity-0"
          }`}
          data-section="profile"
          ref={(el) => (sectionRefs.current[0] = el)}
          id="home"
        >
          <Profile />
        </div>
        <div
          className={`section transition-opacity duration-1000 ease-in-out ${
            activeSection === "aboutme" ? "opacity-100" : "opacity-0"
          }`}
          data-section="aboutme"
          ref={(el) => (sectionRefs.current[1] = el)}
          id="about"
        >
          <AboutMe />
        </div>
        <div
          className={`section transition-opacity duration-1000 ease-in-out ${
            activeSection === "experience" ? "opacity-100" : "opacity-0"
          }`}
          data-section="experience"
          ref={(el) => (sectionRefs.current[2] = el)}
          id="experience"
        >
          <Experience />
        </div>
        <div
          className={`section transition-opacity duration-1000 ease-in-out ${
            activeSection === "projects" ? "opacity-100" : "opacity-0"
          }`}
          data-section="projects"
          ref={(el) => (sectionRefs.current[3] = el)}
          id="projects"
        >
          <Projects />
        </div>
        <div
          className={`section transition-opacity duration-1000 ease-in-out ${
            activeSection === "contactMe" ? "opacity-100" : "opacity-0"
          }`}
          data-section="contactMe"
          ref={(el) => (sectionRefs.current[4] = el)}
          id="contactMe"
        >
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default Home;
