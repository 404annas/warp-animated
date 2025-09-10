
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const main = document.querySelector('main');
        if (!main) return;

        const onMouseMove = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.7,
                ease: 'power3.out',
            });
        };

        const onMouseEnter = () => {
            gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' });
        };

        const onMouseLeave = () => {
            gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3, ease: 'power3.out' });
        };

        main.addEventListener('mousemove', onMouseMove);
        main.addEventListener('mouseenter', onMouseEnter);
        main.addEventListener('mouseleave', onMouseLeave);

        return () => {
            main.removeEventListener('mousemove', onMouseMove);
            main.removeEventListener('mouseenter', onMouseEnter);
            main.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-28 h-28 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white font-semibold uppercase tracking-widest text-xs pointer-events-none -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 z-50"
            style={{ willChange: 'transform' }}
        >
            Warp
        </div>
    );
};

export default Cursor;