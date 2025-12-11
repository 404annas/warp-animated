import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"
import mainLogo from "../assets/fepoLogo3.svg"
import { Mail } from "lucide-react"

const Navbar = () => {
  return (
    <>
      {/* Top Logo */}
      <div>
        {/* <nav className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer">
          <img
            loading="lazy"
            className="w-12 sm:w-14 md:w-40"
            src={mainLogo}
            alt="Logo"
          />
        </nav> */}
        <div className="absolute top-4 sm:top-6 z-50 px-10 flex items-center justify-between text-white w-full">
          <Link to={"/"}><h1 className="text-xl font-bold uppercase">SHAHRUKH KAZIM</h1></Link>
          <a href="mailto:shahrukhkazim@gmail.com" className="flex items-center justify-center gap-2">
            <Mail size={20} />
            <p>shahrukhkazim@gmail.com</p>
          </a>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 z-50 w-full">
        <ul className="flex justify-center flex-wrap gap-2 sm:gap-4 bg-[#0A0A0A] backdrop-blur-md px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium border border-[#171717] max-w-max mx-auto">
          <HashLink smooth to="/#home">
            <li className="hover:text-black text-white cursor-pointer uppercase font-light transition hover:bg-[#E7E7E9] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Home
            </li>
          </HashLink>
          <HashLink smooth to="/#about">
            <li className="hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer uppercase px-3 sm:px-4 py-1.5 sm:py-2 text-[#CFCFCF] rounded-full">
              About
            </li>
          </HashLink>
          <HashLink smooth to="/#portfolio">
            <li className="hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer uppercase px-3 sm:px-4 py-1.5 sm:py-2 text-[#CFCFCF] rounded-full">
              Portfolio
            </li>
          </HashLink>
          <Link to="/contact" onClick={() => scrollTo(0, 0)}>
            <li className="hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer uppercase px-3 sm:px-4 py-1.5 sm:py-2 text-[#CFCFCF] rounded-full">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
