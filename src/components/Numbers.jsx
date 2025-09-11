import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Numbers = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // run once
        threshold: 0.5, // 50% visible
    });

    return (
        <div
            ref={ref}
            className="px-4 sm:px-10 lg:px-20 py-10 bg-[#050505] text-[#F5F5F5] min-h-screen flex items-center"
        >
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16 lg:gap-0">
                {/* Left Section */}
                <div className="flex flex-col gap-10 lg:gap-40">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl lg:text-[45px] leading-snug lg:leading-none font-semibold text-center lg:text-left text-[#F5F5F5]"
                    >
                        The Rise Of Shahrukh Kazim{" "}
                        <p className="text-[#999999] font-extrabold text-2xl sm:text-3xl lg:text-[40px] pt-2">
                            Gilgit To Global
                        </p>
                    </motion.h1>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-[#ADADAD] max-w-lg text-sm sm:text-base text-center lg:text-left mx-auto lg:mx-0"
                    >
                        FEPO, a production company that has grown into a creative powerhouse of over 200 collaborators — editors, directors, designers, and dreamers. Under his leadership, FEPO has produced some of the most remarkable visual content in the region, from viral music videos to cinematic branded campaigns.
                    </motion.p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col lg:pr-20">
                    <a href="https://example1.com" target="_blank" rel="noopener noreferrer">
                        <img className="w-40 h-auto brightness-50 invert-100" src="https://shahrukh-kazim.netlify.app/assets/logo3-CpFDPOP_.svg" alt="Logo 1" />
                    </a>
                    <a href="https://example2.com" target="_blank" rel="noopener noreferrer">
                        <img className="w-40 h-auto brightness-50 invert-100" src="https://shahrukh-kazim.netlify.app/assets/logo1-DqKnHiNi.svg" alt="Logo 2" />
                    </a>
                    <a href="https://example3.com" target="_blank" rel="noopener noreferrer">
                        <img className="w-40 h-auto brightness-50 invert-100" src="https://shahrukh-kazim.netlify.app/assets/logo2-DyzMalQs.svg" alt="Logo 3" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Numbers;
