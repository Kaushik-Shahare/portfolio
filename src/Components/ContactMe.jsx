import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const [submissionCount, setSubmissionCount] = useState(0); // Track submissions

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if submission limit is reached
    if (submissionCount >= 5) {
      setError(
        "You have reached the submission limit. Please try again later."
      );
      return;
    }

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    const templateParams = {
      from_name: formData.name,
      to_name: "Kaushik Shahare",
      message: formData.message,
      from_email: formData.email,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
        setError(null); // Clear any previous errors

        // Reset form data
        setFormData({ name: "", email: "", message: "" });
        setSubmissionCount((prevCount) => prevCount + 1); // Increment submission count
      },
      (err) => {
        console.error("FAILED...", err);
        setError("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div
      id="contactMe"
      className="relative flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 matrix-theme"
    >
      <div className="relative z-10 bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg border border-green-500 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl flex flex-col md:flex-row">
        {/* Contact Info Section */}
        <div className="md:w-1/2 md:pr-6 text-green-400 text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left glitch-text">
            Contact Information
          </h2>
          <div>
            <p className="mb-4">
              <a className="glow-text">Name:</a> Kaushik Shahare
            </p>
            <p className="mb-4">
              <a className="glow-text">Email:</a> kaushikshahare4@gmail.com
            </p>
            <p className="mb-4">
              <a className="glow-text">Phone:</a> +91 935-913-9756
            </p>
            <p className="mb-4">
              <a className="glow-text">Location:</a> Thane, India
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-gray-900 p-6 sm:p-8 rounded-lg border border-green-500"
        >
          <h2 className="text-2xl font-bold text-green-400 glitch-text mb-6 text-center md:text-left">
            Contact Me
          </h2>
          {isSent && (
            <p className="text-green-500 mb-4">Message sent successfully!</p>
          )}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label
              className="block text-green-400 text-left mb-2"
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
          <div className="mb-4">
            <label
              className="block text-green-400 text-left mb-2"
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
              className="block text-green-400 text-left mb-2"
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
      </div>

      {/* Matrix Rain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-matrix-rain"></div>
    </div>
  );
};

export default ContactMe;
