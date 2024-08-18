import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-black text-green-400 p-4 flex justify-between items-center fixed top-0 w-full z-10 shadow-lg">
      {/* Logo with animation */}
      <div className="text-green-400 text-3xl font-bold ml-10 animate-logo-flicker">
        KS
      </div>

      <ul className="list-none flex gap-12 mr-10">
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
            onClick={() => scrollToSection("contact")}
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group cursor-pointer"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
