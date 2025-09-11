import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Works = () => {
  const word = "WORKS";
  const letters = word.split("");

  // Define animation groups: center-out
  const groups = [
    [2],      // R
    [1, 3],   // O, K
    [0, 4],   // W, S
  ];

  // Single ref for whole heading
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true }); // 👈 run once only

  return (
    <section className="bg-[#050505] flex flex-col justify-center items-center px-4">
      <h1
        ref={ref}
        className="
          text-[40px]
          sm:text-[60px]
          md:text-[90px]
          lg:text-[120px]
          font-bold text-[#F5F5F5] flex flex-wrap justify-center text-center leading-none
        "
      >
        {letters.map((letter, i) => {
          const groupIndex = groups.findIndex((group) => group.includes(i));

          const variant = {
            hidden: { opacity: 0, y: 100 + groupIndex * 20 },
            visible: { opacity: 1, y: 0 },
          };

          return (
            <motion.span
              key={i}
              variants={variant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // 👈 trigger only first time
              transition={{
                duration: 0.8,
                delay: groupIndex * 0.2,
                ease: "easeOut",
              }}
              className="inline-block pt-10 pb-10 sm:pb-0"
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
