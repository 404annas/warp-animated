import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Numbers = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // run once
        threshold: 0.5, // 20% visible
    });

    return (
        <div
            ref={ref}
            className="px-20 py-10 bg-[#050505] text-[#F5F5F5] min-h-screen flex items-center"
        >
            <div className="flex justify-between w-full">
                {/* Left Section */}
                <div className="flex flex-col gap-40">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-[40px] leading-none font-light"
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
                        className="text-[#ADADAD] max-w-md"
                    >
                        We don’t just design—we drive results. Our creative strategies are
                        built to grow your business by increasing visibility, engagement,
                        and revenue.
                    </motion.p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-14 pr-28">
                    {/* Item 1 */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[90px] leading-none">
                            {inView && <CountUp end={37} duration={2.5} />}
                        </h1>
                        <div className="border border-[#1D1D1D] w-44"></div>
                        <p className="uppercase text-[#999999] text-sm">LOYAL CLIENTS</p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[90px] leading-none">
                            {inView && <CountUp end={85} duration={2.5} />}
                        </h1>
                        <div className="border border-[#1D1D1D] w-44"></div>
                        <p className="uppercase text-[#999999] text-sm">
                            PROJECTS COMPLETED
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[90px] leading-none">
                            {inView && <CountUp end={12} duration={2.5} />}
                        </h1>
                        <div className="border border-[#1D1D1D] w-44"></div>
                        <p className="uppercase text-[#999999] text-sm">TEAM MEMBERS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Numbers;
