import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white px-6 sm:px-10 md:px-20 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-0">
        {/* Logo + Tagline */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <img
            loading="lazy"
            className="w-12 mx-auto md:mx-0"
            src="https://vision-animated.vercel.app/assets/logo-Cup0Xx9b.png"
            alt="Logo"
          />
          <p className="max-w-xs text-[#5A5A5A] mx-auto md:mx-0">
            The visionary behind the lens.
          </p>
          <a href="tel:+92 333 8805362" className="text-[#5A5A5A]">Call <span className="text-[#F5F5F5]">+92 333 8805362</span></a>
        </div>

        {/* Links Section */}
        {/* <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 text-center sm:text-left justify-center md:justify-end">
          <div className="flex flex-col gap-3">
            <h1 className="text-[#C9C9CB] uppercase font-medium">Utilities</h1>
            <p className="text-[#5A5A5A] hover:text-white cursor-pointer">
              Style Guide
            </p>
            <p className="text-[#5A5A5A] hover:text-white cursor-pointer">
              Instructions
            </p>
            <p className="text-[#5A5A5A] hover:text-white cursor-pointer">
              Licenses
            </p>
            <p className="text-[#5A5A5A] hover:text-white cursor-pointer">
              Changelog
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[#C9C9CB] uppercase font-medium">Follow Us</h1>
            <p className="text-[#5A5A5A] hover:text-white cursor-pointer">
              Facebook
            </p>
            <p className="text-[#5A5A5A] hover:text-white cursor-pointer">
              Youtube
            </p>
            <p className="text-[#5A5A5A] hover:text-white cursor-pointer">
              Instagram
            </p>
          </div>
        </div> */}
      </div>

      {/* Divider */}
      <div className="border border-[#1C1C1C] mt-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-[#5A5A5A] pt-6 gap-4 sm:gap-0 text-sm">
        <p className="text-center sm:text-left">© 2025 Shahrukh Kazim. All Rights Reserved.</p>
        <p className="text-center sm:text-right">Powered By Techxudo</p>
      </div>
    </footer>
  );
};

export default Footer;
