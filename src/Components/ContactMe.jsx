import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUser, FaPaperPlane } from "react-icons/fa";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);

  React.useEffect(() => {
    setIsFormVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        setIsSent(true);
        setError(null);
        setFormData({ name: "", email: "", message: "" });
        setSubmissionCount((prevCount) => prevCount + 1);
      },
      (err) => {
        setError("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div
      id="contactMe"
      className="relative flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 matrix-theme"
    >
      <div className={`relative z-10 glassy-container w-full max-w-4xl flex flex-col md:flex-row shadow-2xl border border-green-400/60 ${isFormVisible ? "fade-in-up" : "opacity-0"}`}>
        {/* Contact Info Section */}
        <div className="md:w-1/2 md:pr-8 text-green-300 text-left mb-8 md:mb-0 flex flex-col justify-center animate-slide-in-left pl-4">
          <h2 className="text-3xl font-extrabold mb-8 text-center md:text-left glitch-text">
            Contact Information
          </h2>
          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <FaUser className="icon-glow" />
              <span className="glow-text font-semibold">Kaushik Shahare</span>
            </div>
            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <FaEnvelope className="icon-glow" />
              <span className="glow-text font-semibold">kaushikshahare4@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <FaPhoneAlt className="icon-glow" />
              <span className="glow-text font-semibold">+91 935-913-9756</span>
            </div>
            <div className="flex items-center gap-3 hover:scale-105 transition-transform">
              <FaMapMarkerAlt className="icon-glow" />
              <span className="glow-text font-semibold">Thane, India</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 glassy-form p-8 rounded-xl border border-green-400/60 shadow-lg animate-slide-in-right"
          autoComplete="off"
        >
          <h2 className="text-3xl font-extrabold text-green-300 glitch-text mb-8 text-center md:text-left">
            Contact Me
          </h2>
          {isSent && (
            <p className="text-green-400 mb-4 animate-fade-in">Message sent successfully!</p>
          )}
          {error && <p className="text-red-400 mb-4 animate-fade-in">{error}</p>}
          <div className="mb-6 relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="floating-input peer w-full p-4 rounded-lg bg-transparent text-green-200 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              autoComplete="off"
            />
            <label htmlFor="name" className="floating-label">Name</label>
          </div>
          <div className="mb-6 relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="floating-input peer w-full p-4 rounded-lg bg-transparent text-green-200 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              autoComplete="off"
            />
            <label htmlFor="email" className="floating-label">Email</label>
          </div>
          <div className="mb-8 relative">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="floating-input peer w-full p-4 rounded-lg bg-transparent text-green-200 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-y overflow-y-auto"
              required
            ></textarea>
            <label htmlFor="message" className="floating-label">Message</label>
          </div>
          <button
            type="submit"
            className="w-full p-4 rounded-lg font-bold flex items-center justify-center gap-2 send-btn-glow hover:scale-105 transition-transform duration-300"
          >
            <span>Send Message</span>
            <FaPaperPlane className="animate-send-icon" />
          </button>
        </form>
      </div>
      {/* Matrix Rain Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-matrix-rain"></div>
    </div>
  );
};

export default ContactMe;
