import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1509310202330-aec5af561c6b?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1633933769681-dc8d28bdeb6d?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1563330232-57114bb0823c?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1627773167916-f52e5113f0d3?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1527952613700-fb1aec7f01c9?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1633933703119-5d25460ad829?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1618234037756-5d59fe495d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljJTIwcHJvZHVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1663045771317-745e2668c779?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1627773167916-f52e5113f0d3?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1633933769681-dc8d28bdeb6d?w=900&auto=format&fit=crop&q=80",
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
