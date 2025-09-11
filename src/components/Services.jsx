// src/components/Services.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import shah1 from "../assets/shah1.jpg";
import shah2 from "../assets/shah2.jpg";
import shah3 from "../assets/shah3.jpg";
import shah4 from "../assets/shah4.jpg";

// --- Data for each face of the cube ---
const services = [
  {
    src: "https://vision-animated.vercel.app/assets/who1-BMj9rT3U.png",
    title: "Video Production",
    description: "Transforming ideas into stunning visuals with professional video production",
    img: shah1
  },
  {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEI3NUQyRjk2Q0ZEMTFFQThFMzZFQUJBRjk5OEYzNkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEI3NUQyRkE2Q0ZEMTFFQThFMzZFQUJBRjk5OEYzNkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQjc1RDJGNzZDRkQxMUVBOEUzNkVBQkFGOTk4RjM2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQjc1RDJGODZDRkQxMUVBOEUzNkVBQkFGOTk4RjM2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoFThHwAAAVdSURBVHja7F1fiFVFGJ+97katK8GG5YZBUJFJQvWSgUkFPfSgL9FLBLpUbuZDGZLYgy4+mBBoPbSbURlobT0V9FYSpYGYbkrlmpVhRP4JWlMs01W337f3U2+zM3POuef+mXvv7wc/Dpw5Z+6Z77fffDPfOTPbNj4+boj6o0ATUAiCQlAIgkJQCIJCUAiCQlAIgkJQCIJCNBfa81bQ3d0dKn4YfBKcD/aAZ8B94FbwLfBcZPa4CnwKfAK8C7wGPApuB98GP6v0D46Ojk4c2/KmwT1CzALfBO8P3PpVQnk9sAOcl1C+BPyh0kJUo2t6HBxOYWRp8MyIRJiZIILRNg1rG6OOEUvB98DOlNdfF5EQaZ+lU9u4NFYhngYHsngl+GNEQsiz/Jnh+gFtc1RCPAgOZrj+GPiYBu9YcEaf6ViGewa17blRiWAtI6/vwds9l4yBn4OHwOPgXh19/BvpSPJqHe3dDd4A3gI+BHZ4rj8I3gmer/eoqQ+HNzzFX4KLwcMNPsy/GdwMPuApfwbcVDchIEIXDj+BMxzF74O9Ec4V8swxNntGTNKd3Qaertfw9QWPCF80mQhG29KrbbMxQ21R+xgBb7geh1/AqVbREfAejQfNCIkb34A3Wuf/1nhyvNYesdohgmBRE4tgtG2LHOenqk1qN3yFN0h/2OcoegfcZpof27StNpZorKjZPOJlMzlheAJcYVoHK7TNpWhX21RfCHjDXBwedRT1Ox6smXFC22xDbDO3Fh7xiuPcoYwz62bBoLY9jY0qJwS8YaFxZyjX6Ay61TCmbbchNlpYleGrpjK+M8V3DaU4oFP8i6Y1IX/MkuK5wzov7yzmJKU+yhm+9jpEuBS4W1UEo213BehZarPKeQS8QcbIPztm0b/pJGbMtDY6NFbc5Eh93KqTvYp4hC+VsZEiXI4VG/OkPhI9QlMZonaXVfSPTvNPUocJXGuK6R377eRp7TX+yOsRqx0iCLagEopwBWKLLY7zXWlSH4UyUxmCAdo+tU36klIfSR7hSmUIdsAbvqXdJ0Fsst1xPjH1UQh4w72eVAa9oTyvCKY+ChlTGRPxBfyI9vbiY7VRFpu6hYA3LDD+D8SG0C2dpb29ENsMecok9bEglRCaylgf+KF3aetEhGy03hV3XR6xGJztqWQ/vGEP7ZwIsdF+T9lstbFfCHiDTEbWBn5gK22cGiFbrbUnfgVHKqMnUMEQ7ZsaIVv12KmPQok3TMfhxcDNu9At/Ur7pobYalegXGw93eURMg2fFrjxA9o2M0I2m1aa+iiN3jtN8dt/Hz6hXTNDck9/Bcovf4BXrRVDREpUc8UQUQbaS/6y+2mOuqD/f10ThODmfvXpmtrYNUUEChFbjHDgtUieUZZQzc9Zh7ys2RtJe55znfTGiEt9VwTD1+eN+wuJLFgOvhqJEOOMEYwRBIWgEASFoBAEhaAQRLVn1o2AZ82VHW5k27cBClF7/G4mL6B8ycS1K1pLdE1fO87tZoyoPXanFIdCVBmuLw6HKQQ9oiWFkBWurs9UTmoZhahjoG5or2hUIfaUWUYh6BGNL4S9S9oFU9zo3Yd9ek2oDgqREbJlm737y4gJbKmgZSPWuTXGvf0bhUiAvFBfZ4pLoOyNbz9Ncb99TYfWtU7rphApICtpPgRXOco2gCtT1LFSr7WxSuvujO4vr0E+uZQ+f5nJvtuwrPh/HZwSa8Ma6XOaU+AjprwtnzfpvacYrPPhsCmu1s/zL2Xk3vtM5PuTxyyErGCSbSgOVKCuEa1rZ6yNzb1iiGjtmTWFICgEhSAoBIUgKASFICgEhaAJKARBISgEQSHixn8CDADiUT6Xgj3/sgAAAABJRU5ErkJggg==",
    title: "Video Direction",
    description: "Crafting powerful visuals through expert video direction that brings stories to life.",
    img: shah2
  },
  {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ5NjM0QjM2Q0ZEMTFFQUI1NjBDQzM5NDI3NkRCNUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ5NjM0QjQ2Q0ZEMTFFQUI1NjBDQzM5NDI3NkRCNUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNDk2MzRCMTZDRkQxMUVBQjU2MENDMzk0Mjc2REI1QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNDk2MzRCMjZDRkQxMUVBQjU2MENDMzk0Mjc2REI1QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgG6HoYAAAYESURBVHja7F0JbFRV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",
    title: "Video Filming",
    description: "Capturing cinematic moments with precision and creativity through professional video filming.",
    img: shah3
  },
  {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjM5MDA3MTc2Q0ZEMTFFQUFFOTJGRTNBM0Q1OUU3OEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjM5MDA3MTg2Q0ZEMTFFQUFFOTJGRTNBM0Q1OUU3OEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMzkwMDcxNTZDRkQxMUVBQUU5MkZFM0EzRDU5RTc4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMzkwMDcxNjZDRkQxMUVBQUU5MkZFM0EzRDU5RTc4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsST7TUAAAjhSURBVHja7F0JjBRF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",
    title: "Video Entertainment",
    description: "Delivering engaging video entertainment that inspires, excites, and connects with audiences.",
    img: shah4
  }
];

const CUBE_SIZE = 340; // Define cube size in pixels

const Services = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Set up scroll tracking for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  // 2. Create transformations for cube rotation based on scroll progress
  // We'll rotate on Y axis for the first two transitions, and on X for the next two
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1], // Input scroll progress
    [0, 90, 90, 180, 180]    // Output rotation in degrees
  );
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"])
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, -90, -90, 0]
  );

  // 3. Track the active index based on scroll progress to sync text
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const newIndex = Math.min(Math.floor(latest * services.length), services.length - 1);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });
  }, [scrollYProgress, activeIndex]);

  return (
    // The section needs to be tall enough to allow for scrolling
    <section ref={sectionRef} className="relative bg-black text-white h-[600vh]">
      {/* This div will stick to the center of the viewport */}
      <div className="sticky  top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl relative w-full mx-auto flex justify-center items-center px-8">

          <motion.div className='flex  justify-between items-center absolute z-10 inset-0 w-[600vw] ' style={{ x }}>
            {services.map((service, i) => (
              <div key={i} className='w-[330px]'>
                <img loading='lazy' className='invert-100 brightness-200 mb-4 w-20' src={service.src} alt="Image" />
                <h1 className='text-5xl md:text-7xl leading-16 mb-4 font-bold text-[#F5F5F5]'>
                  {service.title}
                </h1>
                <p className='font-light text-base text-[#C0C0C0]' >
                  {service.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right Side: 3D Cube */}
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ perspective: '1000px' }} // This enables the 3D effect
          >
            <motion.div
              className="relative"
              style={{
                width: CUBE_SIZE,
                height: CUBE_SIZE,
                transformStyle: 'preserve-3d', // Crucial for 3D
                rotateY, // Apply the y-rotation from our hook
                rotateX, // Apply the x-rotation from our hook
              }}
            >
              {/* --- Cube Faces --- */}
              {/* Each face is positioned absolutely and then transformed into its 3D position */}

              {/* Front Face */}
              <div className="absolute w-full h-full bg-gray-800" style={{ transform: `rotateY(0deg) translateZ(${CUBE_SIZE / 2}px)` }}>
                <img src={services[0].img} alt={services[0].title} className="w-full h-full object-cover" />
              </div>

              {/* Right Face */}
              <div className="absolute w-full h-full bg-gray-800" style={{ transform: `rotateY(-90deg) translateZ(${CUBE_SIZE / 2}px)` }}>
                <img src={services[1].img} alt={services[1].title} className="w-full h-full object-cover" />
              </div>

              {/* Top Face */}
              <div className="absolute w-full h-full bg-gray-800" style={{ transform: `rotateX(90deg) translateZ(${CUBE_SIZE / 2}px)` }}>
                <img src={services[2].img} alt={services[2].title} className="w-full h-full object-cover" />
              </div>

              {/* Back Face */}
              <div className="absolute w-full h-full bg-gray-800" style={{ transform: `rotateY(180deg) translateZ(${CUBE_SIZE / 2}px)` }}>
                <img src={services[3].img} alt={services[3].title} className="w-full h-full object-cover" />
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;