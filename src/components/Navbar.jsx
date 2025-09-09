import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer">
        <img
          loading="lazy"
          className="w-8"
          src="https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687ca147ad466abd53276c96_Vertigo.svg"
          alt="Logo"
        />
      </nav>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <ul className="flex space-x-4 sm:space-x-4 bg-[#0A0A0A] backdrop-blur-md px-8 py-3 rounded-full text-sm sm:text-base font-medium border border-[#171717]">
          <li className="hover:text-[#000000] cursor-pointer uppercase font-light transition bg-[#E7E7E9] px-4 py-2 rounded-full">Home</li>
          <li className="hover:text-[#969696] transition-colors duration-300 cursor-pointer uppercase px-4 py-2 text-[#CFCFCF] rounded-full">About</li>
          <li className="hover:text-[#969696] transition-colors duration-300 cursor-pointer uppercase px-4 py-2 text-[#CFCFCF] rounded-full">Portfolio</li>
          <li className="hover:text-[#969696] transition-colors duration-300 cursor-pointer uppercase px-4 py-2 text-[#CFCFCF] rounded-full">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
