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
            <div className="flex flex-col lg:flex-row justify-between w-full gap-16 lg:gap-0">
                {/* Left Section */}
                <div className="flex flex-col gap-10 lg:gap-40">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-2xl sm:text-3xl lg:text-[40px] leading-snug lg:leading-none font-light text-center lg:text-left"
                    >
                        Every number tells a story.{" "}
                        <span className="text-[#999999]">
                            And we’re here to help you make sense of it.
                        </span>
                    </motion.h1>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-[#ADADAD] max-w-md text-sm sm:text-base text-center lg:text-left mx-auto lg:mx-0"
                    >
                        We don’t just design—we drive results. Our creative strategies are
                        built to grow your business by increasing visibility, engagement,
                        and revenue.
                    </motion.p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-10 sm:gap-14 lg:pr-28">
                    {/* Item 1 */}
                    <div className="flex flex-col gap-2 sm:gap-4 items-center lg:items-start">
                        <h1 className="text-5xl sm:text-7xl lg:text-[90px] leading-none">
                            {inView && <CountUp end={37} duration={2.5} />}
                        </h1>
                        <div className="border border-[#1D1D1D] w-24 sm:w-36 lg:w-44"></div>
                        <p className="uppercase text-[#999999] text-xs sm:text-sm tracking-wide">
                            LOYAL CLIENTS
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col gap-2 sm:gap-4 items-center lg:items-start">
                        <h1 className="text-5xl sm:text-7xl lg:text-[90px] leading-none">
                            {inView && <CountUp end={85} duration={2.5} />}
                        </h1>
                        <div className="border border-[#1D1D1D] w-24 sm:w-36 lg:w-44"></div>
                        <p className="uppercase text-[#999999] text-xs sm:text-sm tracking-wide">
                            PROJECTS COMPLETED
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col gap-2 sm:gap-4 items-center lg:items-start">
                        <h1 className="text-5xl sm:text-7xl lg:text-[90px] leading-none">
                            {inView && <CountUp end={12} duration={2.5} />}
                        </h1>
                        <div className="border border-[#1D1D1D] w-24 sm:w-36 lg:w-44"></div>
                        <p className="uppercase text-[#999999] text-xs sm:text-sm tracking-wide">
                            TEAM MEMBERS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Numbers;
