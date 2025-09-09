import React from "react";
import Marquee from "react-fast-marquee";

const images = [
    {
        src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42362/687cef9ab58621cec61e46a6_1753016094200-p-1080.webp",
        text: "Sports",
        direction: "left",
        color: "#3F205F",
    },
    {
        src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42362/687cefb89916140832b515d6_1753015059832-p-1080.webp",
        text: "Modern",
        direction: "right",
        color: "#D79D64",
    },
    {
        src: "https://cdn.prod.website-files.com/68711b2b9332a934a2b42342/687cbe71216fcb9d157da3b9_Future.webp",
        text: "Future",
        direction: "left",
        color: "#C8F1F2",
    },
];

const WorksAnimation = () => {
    return (
        <div className="bg-[#050505] overflow-hidden">
            {images.map((item, i) => (
                <section
                    key={i}
                    className="relative h-screen w-full flex items-center justify-center overflow-hidden"
                >
                    {/* Image */}
                    <img
                        loading="lazy"
                        className="w-[800px] h-[400px] object-cover"
                        src={item.src}
                        alt={item.text}
                    />

                    {/* Marquee centered over image */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden">
                        <Marquee
                            direction={item.direction}
                            speed={80}
                            gradient={false}
                            pauseOnHover={false}
                            className="w-full overflow-hidden"
                        >
                            {/* Repeat same colored text multiple times for infinite flow */}
                            {Array.from({ length: 10 }).map((_, idx) => (
                                <h1
                                    key={idx}
                                    style={{ color: item.color }}
                                    className="text-6xl font-bold uppercase tracking-wider mx-8 leading-none"
                                >
                                    {item.text}
                                </h1>
                            ))}
                        </Marquee>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default WorksAnimation;
