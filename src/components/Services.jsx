// src/components/Services.jsx
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import shah1 from "../assets/shah1.webp";
import shah2 from "../assets/shah2.webp";
import shah3 from "../assets/shah3.webp";
import shah4 from "../assets/shah4.webp";
import icon1 from "../assets/videoicon1.png";
import icon2 from "../assets/videoicon.png";
import icon3 from "../assets/videoicon3.png";
import icon4 from "../assets/videoicon4.png";

// --- Data for each face of the cube ---
const services = [
  {
    src: icon1,
    title: "Video Production",
    description:
      "Transforming ideas into stunning visuals with professional video production",
    img: shah1,
  },
  {
    src: icon2,
    title: "Video Direction",
    description:
      "Crafting powerful visuals through expert video direction that brings stories to life.",
    img: shah2,
  },
  {
    src: icon3,
    title: "Video Filming",
    description:
      "Capturing cinematic moments with precision and creativity through professional video filming.",
    img: shah3,
  },
  {
    src: icon4,
    title: "Video Entertainment",
    description:
      "Delivering engaging video entertainment that inspires, excites, and connects with audiences.",
    img: shah4,
  },
];

const CUBE_SIZE = 340; // Define cube size in pixels

const Services = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Set up scroll tracking for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // 2. Create transformations for cube rotation based on scroll progress
  // We'll rotate on Y axis for the first two transitions, and on X for the next two
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1], // Input scroll progress
    [0, 90, 90, 180, 180] // Output rotation in degrees
  );
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, -90, -90, 0]
  );

  // 3. Track the active index based on scroll progress to sync text
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const newIndex = Math.min(
        Math.floor(latest * services.length),
        services.length - 1
      );
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });
  }, [scrollYProgress, activeIndex]);

  return (
    // The section needs to be tall enough to allow for scrolling
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-black text-white h-[600vh]"
    >
      {/* This div will stick to the center of the viewport */}
      <div className="sticky  top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl relative w-full mx-auto flex justify-center items-center px-8">
          <motion.div
            className="flex  justify-between items-center absolute z-10 inset-0 w-[600vw] "
            style={{ x }}
          >
            {services.map((service, i) => (
              <div key={i} className="w-[330px]">
                <img
                  loading="lazy"
                  className="invert-100 brightness-200 mb-4 w-20"
                  src={service.src}
                  alt="Image"
                />
                <h1 className="text-5xl md:text-7xl leading-16 mb-4 font-bold text-[#F5F5F5]">
                  {service.title}
                </h1>
                <p className="font-light text-base text-[#C0C0C0]">
                  {service.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Side: 3D Cube */}
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ perspective: "1200px" }} // This enables the 3D effect
          >
            <motion.div
              className="relative"
              style={{
                width: CUBE_SIZE,
                height: CUBE_SIZE,
                transformStyle: "preserve-3d", // Crucial for 3D
                rotateY, // Apply the y-rotation from our hook
                rotateX, // Apply the x-rotation from our hook
              }}
            >
              {/* --- Cube Faces --- */}
              {/* Each face is positioned absolutely and then transformed into its 3D position */}

              {/* Front Face */}
              <div
                className="absolute w-full h-full bg-gray-800"
                style={{
                  transform: `rotateY(0deg) translateZ(${CUBE_SIZE / 2}px)`,
                }}
              >
                <img
                  src={services[0].img}
                  alt={services[0].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Face */}
              <div
                className="absolute w-full h-full bg-gray-800"
                style={{
                  transform: `rotateY(-90deg) translateZ(${CUBE_SIZE / 2}px)`,
                }}
              >
                <img
                  src={services[1].img}
                  alt={services[1].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Face */}
              <div
                className="absolute w-full  h-full bg-gray-800"
                style={{
                  transform: `rotateX(90deg) translateZ(${CUBE_SIZE / 2}px)`,
                }}
              >
                <img
                  src={services[2].img}
                  alt={services[2].title}
                  className="w-full h-full rotate-90  object-cover"
                />
              </div>

              {/* Back Face */}
              <div
                className="absolute w-full h-full bg-gray-800"
                style={{
                  transform: `rotateY(180deg) translateZ(${CUBE_SIZE / 2}px)`,
                }}
              >
                <img
                  src={services[3].img}
                  alt={services[3].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
