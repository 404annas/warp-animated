import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const brands = [
  { src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/68711b2b9332a934a2b4247a_TerraLight.svg", alt: "Brand 1" },
  { src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/68711b2b9332a934a2b42475_PentaLight.svg", alt: "Brand 2" },
  { src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/68711b2b9332a934a2b42479_InvertLight.svg", alt: "Brand 3" },
  { src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/68711b2b9332a934a2b42477_DuneLight.svg", alt: "Brand 4" },
  { src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/68711b2b9332a934a2b42473_ProLineLight.svg", alt: "Brand 5" },
  { src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/68711b2b9332a934a2b42478_HitechLight.svg", alt: "Brand 6" },
  { src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/68711b2b9332a934a2b42476_PinpointLight.svg", alt: "Brand 7" },
  { src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/68711b2b9332a934a2b42474_Iceberglight.svg", alt: "Brand 8" },
];

const AboutUs = () => {
  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // first heading, then paragraph
      },
    },
  };

  const item = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 sm:py-28 md:py-40 bg-[#050505]">
      {/* Text Section */}
      <motion.div
        className="px-6 sm:px-10 md:px-20 text-center md:text-left"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-thin"
        >
          We Don’t Just Design for the Present —{" "}
          <span className="text-[#999999]">
            We Craft Experiences for the Future.
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={item}
          className="text-[#717171] py-8 sm:py-10 md:py-14 mx-auto md:mx-0 max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
        >
          Specializing in creating visually captivating designs that leave a
          lasting impression by transforming your ideas into stunning visuals.
          Crafting unique and immersive brand narratives that captivate
          audiences across digital platforms.
        </motion.p>
      </motion.div>

      {/* Logos */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <Marquee gradient={false} speed={50}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-3 sm:mx-4 border border-[#121212] rounded-xl w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48"
            >
              <img
                loading="lazy"
                className="max-w-[60%] max-h-[70%] object-contain"
                src={brand.src}
                alt={brand.alt}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AboutUs;
