import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Updated hook

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
      }, 100); // Adjust the delay as needed
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-green-400 p-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-lg">
      {/* Logo with animation */}
      <div
        className="text-green-400 text-3xl font-bold ml-4 md:ml-10 animate-logo-flicker"
        onClick={() => scrollToSection("home")}
      >
        KS
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </div>

      {/* Navigation Links */}
      <ul
        className={`list-none flex-col md:flex-row md:flex gap-x-12 gap-y-2 mr-4 md:mr-10 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <li>
          <div
            onClick={() => scrollToSection("home")}
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group cursor-pointer"
          >
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>
        </li>
        <li>
          <div
            onClick={() => scrollToSection("about")}
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group cursor-pointer"
          >
            About Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>
        </li>
        <li>
          <div
            onClick={() => scrollToSection("experience")}
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group cursor-pointer"
          >
            Experience
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>
        </li>
        <li>
          <div
            onClick={() => scrollToSection("projects")}
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group cursor-pointer"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>
        </li>
        <li>
          <div
            onClick={() => scrollToSection("contactMe")}
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group cursor-pointer"
          >
            Contact Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
