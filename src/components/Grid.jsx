import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img3 from "../assets/images/hero-1.webp";
import img4 from "../assets/images/hero-2.webp";
import img5 from "../assets/images/hero-3.webp";
import img1 from "../assets/port1.png"
import img2 from "../assets/port2.jpg"
import img6 from "../assets/port3.jpg"
import img7 from "../assets/port4.jpg"
import img8 from "../assets/port5.jpg"
import img9 from "../assets/port6.jpg"
import img10 from "../assets/port7.jpg"
import img11 from "../assets/port8.jpg"
import img12 from "../assets/port9.jpg"
import img13 from "../assets/port19.jpg"
import img14 from "../assets/port10.jpg"
import img15 from "../assets/port11.png"
import img16 from "../assets/port12.jpg"
import img17 from "../assets/port13.jpeg"
import img18 from "../assets/port14.jpg"
import img19 from "../assets/port15.jpg"
import img20 from "../assets/port16.jpg"
import img21 from "../assets/port17.jpg"

gsap.registerPlugin(ScrollTrigger);

const images = [
  img1,
  img4,
  img5,
  img3,
  img2,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
];

const Grid = () => {
  const containerRef = useRef();
  const itemsRef = useRef([]);

  // Calculate distance from grid center (3 cols × 4 rows)
  const getDistanceFromCenter = (index) => {
    const cols = 3;
    const rows = 4;
    const col = index % cols;
    const row = Math.floor(index / cols);

    const centerCol = (cols - 1) / 2; // 1
    const centerRow = (rows - 1) / 2; // 1.5

    const deltaCol = Math.abs(col - centerCol);
    const deltaRow = Math.abs(row - centerRow);

    return Math.sqrt(deltaCol * deltaCol + deltaRow * deltaRow);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset initial state
    itemsRef.current.forEach((item) => {
      if (item) {
        gsap.set(item, {
          opacity: 0,
          scale: 0.3,
          transformOrigin: "center center",
        });
      }
    });

    // Group items by distance from center
    const itemsByDistance = {};
    images.forEach((_, index) => {
      const distance = getDistanceFromCenter(index);
      const key = distance.toFixed(2);
      if (!itemsByDistance[key]) {
        itemsByDistance[key] = [];
      }
      itemsByDistance[key].push(index);
    });

    const sortedDistances = Object.keys(itemsByDistance)
      .map(Number)
      .sort((a, b) => a - b);

    // Timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      },
    });

    // Animate center-outwards
    sortedDistances.forEach((distance, groupIndex) => {
      const indices = itemsByDistance[distance.toFixed(2)];
      const items = indices.map((i) => itemsRef.current[i]).filter(Boolean);

      if (items.length > 0) {
        tl.to(
          items,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          },
          groupIndex * 0.3
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl"
      >
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src={src}
              alt={`Grid item ${index + 1}`}
              className="w-full h-48 object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
