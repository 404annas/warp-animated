import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://fepo.co/wp-content/uploads/2025/09/aalkaram-e1756808036977.png",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-12.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-11.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-10.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-9.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-8.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-7.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-6.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-5.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-4.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-3.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault-2-1.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/asd.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/maxresdefault.jpg",
  "https://fepo.co/wp-content/uploads/2025/09/MEMORIES-Hasan-Raheem-ft-Justin-Bibis-Official-Music-Video-_-Latest-Urdu-Punjabi-Song-2025-0-6-screenshot-1536x864.png",
  "https://fepo.co/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-09-at-16.31.51-e1756768899448.jpeg",
  "https://fepo.co/wp-content/uploads/2022/02/maxresdefault-14.jpg",
  "https://fepo.co/wp-content/uploads/2022/02/maxresdefault-15.jpg",
  "https://fepo.co/wp-content/uploads/2022/01/maxresdefault-16.jpg",
  "https://fepo.co/wp-content/uploads/2022/01/maxresdefault-17.jpg",
  "https://fepo.co/wp-content/uploads/2021/08/maxresdefault-18.jpg",

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
