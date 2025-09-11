import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.jpeg";

const brands = [
  { src: "https://static.vecteezy.com/system/resources/previews/019/956/122/non_2x/coca-cola-transparent-coca-cola-free-free-png.png", alt: "Brand 1" },
  { src: brand2, alt: "Brand 2" },
  { src: brand5, alt: "Brand 5" },
  { src: brand3, alt: "Brand 3" },
  { src: brand4, alt: "Brand 4" },
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
          Widely known as FEPO —{" "}
          <span className="text-[#999999]">
            is a celebrated Pakistani video producer.
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={item}
          className="text-[#717171] py-8 sm:py-10 md:py-14 mx-auto md:mx-0 max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg"
        >
          <p className="pb-4">Shahrukh Kazim Ali is known for <a className="text-[#aaaaaa]" href="https://www.imdb.com/title/tt2400629/?ref_=nm_ov_bio_lk">Coke Studio Pakistan (2008)</a>, <a className="text-[#aaaaaa]" href="https://www.imdb.com/title/tt9373234/?ref_=nm_ov_bio_lk">Laal Kabootar (2019)</a> and <a className="text-[#aaaaaa]" href="https://www.imdb.com/title/tt37937230/?ref_=nm_ov_bio_lk">Faltu Pyar (2022)</a>.</p>
          My work as a video producer and director includes projects with artists such as Hasan Raheem, Natasha Noorani, Talha Anjum, Talha Yunus, Quick Style,Nayel, Faris Shafi and HYDR among others. voices shaping the cutting edge of South Asian music.
          <p className="pt-4">My Productions for Pepsi’s ‘Why Not Meri Jaan’ and ‘Sohna Tu’ redefined the brand’s identity for Gen Z, merging music, fashion, and rebellion into high-impact digital storytelling.</p>
        </motion.p>
      </motion.div>

      {/* Logos */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <Marquee gradient={false} speed={50}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-3 sm:mx-4 border border-[#121212] rounded-xl w-28 h-28 sm:w-36 sm:h-36 md:w-60 md:h-60"
            >
              <img
                loading="lazy"
                className="max-w-[70%] max-h-[70%] object-contain"
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
