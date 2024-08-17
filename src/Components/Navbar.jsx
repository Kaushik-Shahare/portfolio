import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-green-400 p-4 flex justify-between items-center fixed top-0 w-full z-10 shadow-lg">
      {/* Logo with animation */}
      <div className="text-green-400 text-3xl font-bold ml-10 animate-logo-flicker">
        KS
      </div>

      <ul className="list-none flex gap-12 mr-10">
        <li>
          <Link
            to="/"
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group"
          >
            About Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-green-400 text-xl no-underline hover:text-green-300 relative group"
          >
            Contact Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
