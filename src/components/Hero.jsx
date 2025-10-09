import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import TrackImage from "./TrackImage"
const words = ["Shahrukh", "Kazim"];
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import hero5 from "../assets/hero5.webp";
import hero6 from "../assets/hero6.webp";
import hero7 from "../assets/hero7.webp";
import hero8 from "../assets/hero8.webp";
import hero9 from "../assets/hero9.webp";
import hero10 from "../assets/hero10.webp";
import hero11 from "../assets/hero11.webp";
import hero12 from "../assets/hero12.webp";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [hoveredImg, setHoveredImg] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: {
      opacity: 1,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const char = {
    hidden: { y: "100%" },
    visible: { y: "0%", transition: { duration: 0.25, staggerChildren: 0.1 } },
    exit: { y: "-100%", transition: { duration: 0.25, staggerChildren: 0.1, staggerDirection: -1 } },
  };

  const imagesLeft = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5,
    hero6,
  ];
  
  const imagesRight = [
    hero7,
    hero8,
    hero9,
    hero10,
    hero11,
    hero12,
  ];

  return (
    <section className=" mx-auto relative bg-[#050505] min-h-screen text-white flex flex-col md:flex-row justify-center gap-8 md:gap-10 px-4 sm:px-6 md:px-20 pt-24 md:pt-52">
      {/* Fullscreen hover image */}
      <AnimatePresence>
        {hoveredImg && (
          <motion.div
            className="fixed inset-0 z-40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={hoveredImg}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left images */}
      <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-4 md:gap-14 relative z-50 justify-center">
        {imagesLeft.map((src, i) => (
          <TrackImage
            key={i}
            onHoverStart={() => setHoveredImg(src)}
            onHoverEnd={() => setHoveredImg(null)}
            src={src}
          />
        ))}
      </div>

      {/* Text column */}
      <div className="flex-1 flex flex-col items-center relative z-10">
        <div className="sticky top-1/2 -translate-y-1/2 text-center">
          <div className="flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={words[index]}
                className="font-bold uppercase text-[#F5F5F5] flex justify-center
                text-5xl sm:text-7xl md:text-[50px] lg:text-[130px] leading-none"
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {words[index].split("").map((charItem, i) => (
                  <motion.span key={i} variants={char} className="inline-block">
                    {charItem}
                  </motion.span>
                ))}
              </motion.h2>
            </AnimatePresence>
          </div>
          <p className="max-w-xs sm:max-w-md text-center mx-auto text-[#D9D9D9] pt-4 text-sm sm:text-base md:text-lg">
            The top guy featured in several national and international projects
          </p>
        </div>
      </div>

      {/* Right images */}
      <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-4 md:gap-14 relative z-50 justify-center">
        {imagesRight.map((src, i) => (
          <TrackImage
            key={i}
            onHoverStart={() => setHoveredImg(src)}
            onHoverEnd={() => setHoveredImg(null)}
            src={src}
            positionRight={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;


