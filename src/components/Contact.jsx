import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row bg-white rounded-xl overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 p-6 sm:p-12 lg:p-16 flex flex-col justify-center items-start sm:items-center sm:text-center md:items-start md:text-left bg-white">
          <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8 sm:mb-10">
            NEED COOL WORK DONE? LEAVE US A MESSAGE!
          </p>
          <div className="text-base sm:text-lg text-[#5A554A] mb-8 sm:mb-10">
            <p>Office No. 305, 3rd Floor, Plot No. 21-C,</p>
            <p>Stadium Commercial, Lane No. 2,</p>
            <p>Phase V, D.H.A. Karachi.</p>
          </div>
          <a href='tel:+92 333 8805362' className="text-base sm:text-xl font-bold text-gray-900 mb-8 sm:mb-10">
            CALL +92 333 8805362
          </a>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 bg-white">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder='John Doe'
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-xs placeholder-gray-500 outline-none sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder='johndoe@gmail.com'
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-xs placeholder-gray-500 sm:text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <div className="mt-1">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder='Video Production'
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-xs placeholder-gray-500 sm:text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  required
                  placeholder='I have a project in my mind.'
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-xs placeholder-gray-500 sm:text-sm resize-none outline-none"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:scale-95 cursor-pointer transition-all duration-300 uppercase tracking-wider"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;