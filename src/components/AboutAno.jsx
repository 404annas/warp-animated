import React from "react";
import { motion, useInView } from "framer-motion";

const AboutAno = () => {
    const word = "ABOUT";
    const letters = word.split("");

    const groups = [
        [2],      // U
        [1, 3],   // O, T
        [0, 4],   // A, T
    ];

    return (
        <section className="bg-[#050505] flex flex-col justify-center items-center px-4">
            <h1
                className="
          text-[40px]
          sm:text-[60px]
          md:text-[90px]
          lg:text-[120px]
          xl:text-[140px]
          2xl:text-[180px]
          font-bold text-[#F5F5F5] flex flex-wrap justify-center text-center leading-none
        "
            >
                {letters.map((letter, i) => {
                    const groupIndex = groups.findIndex((group) => group.includes(i));

                    const ref = React.useRef(null);
                    const inView = useInView(ref, { amount: 0.5, once: true });

                    const variant = {
                        hidden: { opacity: 0, y: 100 + groupIndex * 20 },
                        visible: { opacity: 1, y: 0 },
                    };

                    return (
                        <motion.span
                            ref={ref}
                            key={i}
                            variants={variant}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"} // 👈 only animates once
                            transition={{
                                duration: 0.8,
                                delay: groupIndex * 0.2,
                                ease: "easeOut",
                            }}
                            className="inline-block pt-20 sm:pt-40"
                        >
                            {letter}
                        </motion.span>
                    );
                })}
            </h1>
        </section>
    );
};

export default AboutAno;
