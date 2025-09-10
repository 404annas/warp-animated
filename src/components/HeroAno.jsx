import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrackImage from "./TrackImage"

const words = ["Warp®", "Studio"];

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
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cbe7ce1fe8d45c86e80aa_Orange_gradient.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cf1dba22945ac811c0c1a_1753015059832-2.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cbe71216fcb9d157da3b9_Future.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cbe038d6eb8bbcf7a5074_Concret.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cf4d796472d7e54a7a709_KrateWork2.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cf409ab424fc85061beec_1753014837852-2.webp",
    ];

    const imagesRight = [
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cf607456506919fc45012_1753014920558-2.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cbe715508bb1c6f3ae025_Sport.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cbe024772311d32f3c4fe_Work1us.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cf4442784720960d2d83e_HeroCar-p-1600.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cbe03f6cc2d379a12c599_Hatguy.webp",
        "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cf7105b273fec7fd698b5_1753015140492.webp",
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
                <p className="max-w-xs sm:max-w-sm text-center text-[#D9D9D9] pt-6 text-base sm:text-lg">
                    From Concept to Creation — Beautiful design has the power to
                    captivate audiences.
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
