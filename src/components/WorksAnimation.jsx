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
                    className="relative min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden px-2 py-20"
                >
                    {/* Image */}
                    <img
                        loading="lazy"
                        className="w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[65%] 
                       h-[300px] sm:h-[500px] rounded-xl object-cover shadow-lg"
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
                            {Array.from({ length: 10 }).map((_, idx) => (
                                <h1
                                    key={idx}
                                    style={{ color: item.color }}
                                    className="
                    text-3xl sm:text-5xl md:text-6xl lg:text-8xl
                    font-bold uppercase tracking-wider mx-6 sm:mx-8
                    leading-none text-center
                  "
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
