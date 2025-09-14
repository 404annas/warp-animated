import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// OptionButton component remains the same
const OptionButton = ({ label, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-6 py-2 border border-gray-600 rounded-full text-sm transition-colors duration-300
            ${
              isSelected
                ? "bg-white text-black"
                : // Added focus-visible for better accessibility
                  "bg-transparent text-gray-300 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            }`}
  >
    {label}
  </button>
);

const Contact = () => {
  // State for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for the selectable options
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  // NEW: State for the custom budget input
  const [customBudget, setCustomBudget] = useState("");

  const services = ["Videography", "Photography", "Editing", "Other"];
  const budgets = ["<$5K", "$5K-$10K", "$10K+", "Custom"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleBudgetClick = (budget) => {
    setSelectedBudget(budget);
    // If user selects a non-custom option, clear the custom input
    if (budget !== "Custom") {
      setCustomBudget("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine all data, using the custom budget value if 'Custom' is selected
    const submission = {
      ...formData,
      service: selectedService,
      budget: selectedBudget === "Custom" ? customBudget : selectedBudget,
    };
    console.log("Form Submitted:", submission);
    // Here you would typically send the data to a server or API
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        {/* Left Section: Contact Info */}
        <div className="flex flex-col justify-between">
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-thin leading-none">
            Contact us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 lg:mt-0">
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
                Email Address
              </h3>
              <p className="text-lg">hello@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
                Phone
              </h3>
              <p className="text-lg">+92 333 8805362</p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Service Selection */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
              Service
            </h3>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <OptionButton
                  key={service}
                  label={service}
                  isSelected={selectedService === service}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
              Budget
            </h3>
            <div className="flex flex-wrap gap-3">
              {budgets.map((budget) => (
                <OptionButton
                  key={budget}
                  label={budget}
                  isSelected={selectedBudget === budget}
                  onClick={() => handleBudgetClick(budget)}
                />
              ))}
            </div>

            {/* NEW: Conditionally rendered custom budget input */}
            <AnimatePresence>
              {selectedBudget === "Custom" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: "1.5rem" }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <label
                    className="text-xs uppercase tracking-[0.3em] text-gray-400"
                    htmlFor="customBudget"
                  >
                    Please Specify
                  </label>
                  <input
                    type="text"
                    id="customBudget"
                    name="customBudget"
                    value={customBudget}
                    onChange={(e) => setCustomBudget(e.target.value)}
                    placeholder="Enter your budget"
                    className="w-full bg-transparent border-b border-gray-600 py-3 mt-1 outline-none focus:border-white transition-colors"
                    required
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Name and Email Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                className="text-xs uppercase tracking-[0.3em] text-gray-400"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-gray-600 py-3 mt-1 outline-none focus:border-white transition-colors"
                required
              />
            </div>
            <div>
              <label
                className="text-xs uppercase tracking-[0.3em] text-gray-400"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your e-mail"
                className="w-full bg-transparent border-b border-gray-600 py-3 mt-1 outline-none focus:border-white transition-colors"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label
              className="text-xs uppercase tracking-[0.3em] text-gray-400"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message..."
              rows="3"
              className="w-full bg-transparent border-b border-gray-600 py-3 mt-1 outline-none focus:border-white transition-colors resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="self-start mt-4">
            <button type="submit" className="flex items-center gap-4 group">
              <span className="bg-white text-black px-8 py-4 font-semibold uppercase tracking-widest transition-transform duration-300 group-hover:scale-105">
                Let's Connect
              </span>
              <span className="flex items-center justify-center w-14 h-14 bg-white rounded-full transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8 sm:mb-10">
            NEED COOL WORK DONE? LEAVE US A MESSAGE!
          </p> */
}
