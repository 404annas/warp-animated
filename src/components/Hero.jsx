import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import hero1 from "../assets/images/hero-1.webp";
import hero2 from "../assets/images/hero-2.webp";
import hero3 from "../assets/images/hero-3.webp";
import hero4 from "../assets/images/hero-4.webp";
import hero5 from "../assets/images/hero-5.webp";
import hero6 from "../assets/images/hero-6.webp";
import hero7 from "../assets/images/hero-7.webp";
import hero8 from "../assets/images/hero-8.webp";
import hero9 from "../assets/images/hero-9.webp";
import hero10 from "../assets/images/hero-10.webp";
import hero11 from "../assets/images/hero-11.webp";
import hero12 from "../assets/images/hero-12.webp";

import TrackImage from "./TrackImage";
const words = ["Shahrukh", "Kazim"];

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
    exit: {
      y: "-100%",
      transition: {
        duration: 0.25,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  // ...existing imports and code...

  const imagesLeft = [
    {
      src: hero1,
      links:
        "https://www.youtube.com/watch?v=O3pUsXxCfEk&list=RDO3pUsXxCfEk&start_radio=1",
    },
    {
      src: hero2,
      links: "https://www.youtube.com/watch?v=wB0CqUJa3Z8",
    },
    {
      src: hero3,
      links:
        "https://www.youtube.com/watch?v=dB0AFSUl2Vk&list=RDdB0AFSUl2Vk&start_radio=1",
    },
    {
      src: hero4,
      links:
        "https://www.youtube.com/watch?v=9dcwnIgBrCk&list=RD9dcwnIgBrCk&start_radio=1",
    },
    {
      src: hero5,
      links:
        "https://www.youtube.com/watch?v=-urTPhh7gNk&list=RD-urTPhh7gNk&start_radio=1",
    },
    {
      src: hero6,
      links:
        "https://www.youtube.com/watch?v=ztLDdpHK2hM&list=RDztLDdpHK2hM&start_radio=1",
    },
  ];

  const imagesRight = [
    {
      src: hero7,
      link: "https://www.youtube.com/watch?v=GX0j3FFp8mI&list=RDGX0j3FFp8mI&start_radio=1",
    },
    {
      src: hero8,
      link: "https://www.youtube.com/watch?v=7D4vNcK6D38&list=RD7D4vNcK6D38&start_radio=1",
    },
    {
      src: hero9,
      link: "https://www.youtube.com/watch?v=bdxMc06WvqI&list=RDbdxMc06WvqI&start_radio=1",
    },
    {
      src: hero10,
      link: "https://www.youtube.com/watch?v=9mNaNMmxJ1I&list=RD9mNaNMmxJ1I&start_radio=1",
    },
    {
      src: hero11,
      link: "https://www.youtube.com/watch?v=5eHoTy0mvzU&list=RD9mNaNMmxJ1I&index=3",
    },
    {
      src: hero12,
      link: "https://www.youtube.com/watch?v=BnNG7sayL2w&list=RD9mNaNMmxJ1I&index=7",
    },
  ];

  // ...rest of the existing code...

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
        {imagesLeft.map((img, i) => (
          <TrackImage
            key={i}
            onHoverStart={() => setHoveredImg(src)}
            onHoverEnd={() => setHoveredImg(null)}
            src={img.src}
            link={img.links}
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
        {imagesRight.map((img, i) => (
          <TrackImage
            key={i}
            onHoverStart={() => setHoveredImg(src)}
            onHoverEnd={() => setHoveredImg(null)}
            src={img.src}
            link={img.link}
            positionRight={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
