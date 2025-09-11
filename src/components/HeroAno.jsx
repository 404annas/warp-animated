import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrackImage from "./TrackImage"

const words = ["Shahrukh", "Kazim"];

const HeroAno = () => {
    const [index, setIndex] = useState(0);
    const [hoveredImg, setHoveredImg] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.1, staggerDirection: -1 },
        },
    };

    const char = {
        hidden: { y: "100%", opacity: 0 },
        visible: { y: "0%", opacity: 1, transition: { duration: 0.3 } },
        exit: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
    };

    const imagesLeft = [
        "https://vision-animated.vercel.app/assets/hero2-DpRIJbuA.jpg",
        "https://vision-animated.vercel.app/assets/hero8-Qqk7mg8-.jpg",
        "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-5.jpg",
        "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-4.jpg",
        "https://fepo.co/wp-content/uploads/2024/06/maxresdefault-13.jpg",
        "https://fepo.co/wp-content/uploads/2025/09/maxresdefault.jpg",
    ];

    const imagesRight = [
        "https://vision-animated.vercel.app/assets/hero6-Btc3J3kZ.jpg",
        "https://vision-animated.vercel.app/assets/hero1-BPIOk_hP.jpg",
        "https://vision-animated.vercel.app/assets/hero3-X1uWCD5x.jpg",
        "https://vision-animated.vercel.app/assets/hero5-DtcNxun_.jpg",
        "https://vision-animated.vercel.app/assets/hero7-C9CCZGv-.png",
        "https://vision-animated.vercel.app/assets/hero4-C1i8dCzk.jpg",
    ];

    return (
        <div className="bg-[#050505] flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-20">
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

            <div className="flex-1 flex flex-col items-center text-center">
                {/* Heading */}
                <div className="flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={words[index]}
                            className="
                font-bold uppercase text-[#F5F5F5]
                text-5xl sm:text-6xl leading-none
              "
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {words[index].split("").map((charItem, i) => (
                                <motion.span
                                    key={i}
                                    variants={char}
                                    className="inline-block"
                                >
                                    {charItem}
                                </motion.span>
                            ))}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Subtitle */}
                <p className="max-w-xs sm:max-w-sm text-center text-[#D9D9D9] pt-6 sm:pb-0 pb-4 text-base sm:text-lg">
                    The top guy featured in several national and international projects
                </p>
            </div>

            <div className="flex flex-row items-center gap-28">
                {/* Left images */}
                <div className="flex flex-col flex-wrap md:flex-nowrap gap-4 md:gap-10 relative z-40 justify-center">
                    {imagesLeft.map((src, i) => (
                        <TrackImage
                            key={i}
                            onHoverStart={() => setHoveredImg(src)}
                            onHoverEnd={() => setHoveredImg(null)}
                            src={src}
                        />
                    ))}
                </div>

                {/* Right images */}
                <div className="flex flex-col flex-wrap md:flex-nowrap gap-4 md:gap-10 relative z-40 justify-center">
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
            </div>
        </div>
    );
};

export default HeroAno;
