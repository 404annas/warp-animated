import React from "react";
import { motion } from "framer-motion";

const Works = () => {
  const word = "WORKS";
  const letters = word.split("");

  // Define animation groups: center-out
  const groups = [
    [2],      // R
    [1, 3],   // O, K
    [0, 4],   // W, S
  ];

  return (
    <section className="bg-[#050505] pb-10 flex flex-col justify-center items-center">
      <h1 className="text-[80px] md:text-[121px] font-bold text-[#F5F5F5] flex">
        {letters.map((letter, i) => {
          const groupIndex = groups.findIndex(group => group.includes(i));

          const variant = {
            hidden: { opacity: 0, y: 100 + groupIndex * 20 },
            visible: { opacity: 1, y: 0 }
          };

          return (
            <motion.span
              key={i}
              variants={variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: groupIndex * 0.2,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          );
        })}
      </h1>
    </section>
  );
};

export default Works;
