import React from "react";
import { motion } from "framer-motion";

const ServicesAno = () => {
    const word = "SERVICES";
    const letters = word.split("");

    // Define animation groups: center-out
    const groups = [
        [2],      // R
        [1, 3],   // O, K
        [0, 4],   // W, S
        [5, 7],
    ];

    return (
        <section className="bg-[#050505] flex flex-col justify-center items-center px-4">
            <h1
                className="
          text-[40px]    /* small mobile */
          sm:text-[60px] /* larger mobile */
          md:text-[90px] /* tablets */
          lg:text-[120px] /* laptops */
          xl:text-[150px] /* desktops */
          2xl:text-[180px] /* very large screens */
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
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{
                                duration: 0.8,
                                delay: groupIndex * 0.2,
                                ease: "easeOut",
                            }}
                            className="inline-block pt-10" // little spacing between letters
                        >
                            {letter}
                        </motion.span>
                    );
                })}
            </h1>
        </section>
    );
};

export default ServicesAno;
