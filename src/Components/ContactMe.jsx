import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen p-6 matrix-theme">
      <form
        // onSubmit={handleSubmit}
        className="relative z-10 bg-gray-900 p-8 rounded-lg shadow-lg border border-green-500 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-green-400 glitch-text mb-6">
          Contact Me
        </h2>
        <div className="mb-6">
          <label
            className="block text-green-400 glitch-text mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-green-300 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-green-400 glitch-text mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-green-300 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-green-400 glitch-text mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded bg-gray-800 text-green-300 border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded bg-green-400 font-bold glitch-text hover:bg-green-300 transition duration-300"
        >
          <p className="text-black">Send Message</p>
        </button>
      </form>
      {/* Matrix Rain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-matrix-rain"></div>
    </div>
  );
};

export default ContactMe;
