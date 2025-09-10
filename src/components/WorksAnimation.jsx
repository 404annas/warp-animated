import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";

const WorksAnimation = ({ data }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2,
                },
            });

            // Animate image scale and rotation
            tl.fromTo(
                ".image-wrapper",
                {
                    width: "30vw", // smaller initially
                    height: "60vh",
                    rotateX: 45,
                    rotateZ: -15,
                    borderRadius: "1rem",
                },
                {
                    width: "100vw",
                    height: "100vh",
                    rotateX: 0,
                    rotateZ: 0,
                    borderRadius: "0px",
                    ease: "power1.inOut",
                }
            ).to(".image-wrapper", {
                width: "40vw",
                height: "30vh",
                rotateX: -45,
                rotateZ: 15,
                borderRadius: "1rem",
                ease: "power1.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Image wrapper */}
            <div
                className="image-wrapper relative overflow-hidden rounded-2xl"
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            >
                <img
                    loading="lazy"
                    className="w-full h-full object-cover shadow-2xl shadow-black/50"
                    src={data.src}
                    alt={data.text}
                />
            </div>

            {/* Marquee text */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-full overflow-hidden">
                    <Marquee
                        direction={data.direction}
                        speed={80}
                        gradient={false}
                        pauseOnHover={false}
                        className="overflow-hidden"
                    >
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <h1
                                key={idx}
                                style={{ color: data.color }}
                                className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter mx-8 whitespace-nowrap leading-none h-fit"
                            >
                                {data.text}
                            </h1>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default WorksAnimation;
