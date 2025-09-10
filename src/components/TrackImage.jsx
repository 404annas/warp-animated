// src/components/TrackedImage.jsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrackImage = ({ src, onHoverStart, onHoverEnd, key, positionRight = false }) => {
    const ref = useRef(null);

    // Is image ke liye scroll progress track karo
    const { scrollYProgress } = useScroll({
        target: ref,
        // Ye sabse important part hai
        offset: ["start end", "center center", "end start"]
        // "start end": Animation tab start ho jab image ka TOP, screen ke BOTTOM ko touch kare.
        // "center center": Animation ka mid-point tab ho jab image ka CENTER, screen ke CENTER mein ho.
        // "end start": Animation tab end ho jab image ka BOTTOM, screen ke TOP ko cross kar jaaye.
    });

    // scrollYProgress ki value 0 se 1 tak jaati hai.
    // Hum usko ek naye value mein transform karenge jo center mein peak kare.
    // Input range [0, 0.5, 1] hamare offset ke teen points ko correspond karta hai.
    // Output range [0.8, 1.1, 0.8] ka matlab hai:
    // - Start mein scale 0.8 hoga.
    // - Center mein scale 1.1 (peak) hoga.
    // - End mein scale wapas 0.8 ho jaayega.
    const skewRight = useTransform(scrollYProgress, [0, 0.5, 1], [7, 0, -7]);
    const skewLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-7, 0, 7]);

    const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, -20]);
    const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, 20]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);
    const filter = useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ['blur(5px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(5px)']
    );
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

    return (
        <motion.div ref={ref} style={{ y, x: positionRight ? xRight : xLeft, skew: positionRight ? skewRight : skewLeft, filter, scale }}>
            <motion.img

                key={key}
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className="w-28 h-28  sm:w-32 sm:h-32   object-cover cursor-pointer"
                src={src}
                alt="Tracked content"
            />
        </motion.div>
    );
};

export default TrackImage;