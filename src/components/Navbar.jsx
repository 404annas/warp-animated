import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Top Logo */}
      <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer">
        <img
          loading="lazy"
          className="w-12 sm:w-14 md:w-18"
          src="https://vision-animated.vercel.app/assets/logo-Cup0Xx9b.png"
          alt="Logo"
        />
      </nav>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 z-50 w-full px-2 sm:px-0">
        <ul className="flex justify-center flex-wrap gap-2 sm:gap-4 bg-[#0A0A0A] backdrop-blur-md px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium border border-[#171717] max-w-max mx-auto">
          <li className="hover:text-[#000000] cursor-pointer uppercase font-light transition bg-[#E7E7E9] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            Home
          </li>
          <li className="hover:text-[#969696] transition-colors duration-300 cursor-pointer uppercase px-3 sm:px-4 py-1.5 sm:py-2 text-[#CFCFCF] rounded-full">
            About
          </li>
          <li className="hover:text-[#969696] transition-colors duration-300 cursor-pointer uppercase px-3 sm:px-4 py-1.5 sm:py-2 text-[#CFCFCF] rounded-full">
            Portfolio
          </li>
          <li className="hover:text-[#969696] transition-colors duration-300 cursor-pointer uppercase px-3 sm:px-4 py-1.5 sm:py-2 text-[#CFCFCF] rounded-full">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
