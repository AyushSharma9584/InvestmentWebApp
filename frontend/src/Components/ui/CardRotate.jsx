/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const CardRotate = ({ pics = [] }) => {
  return (
    <section className="relative grid min-h-screen w-full place-content-start overflow-hidden md:mt-0 -mt-20">
      <Cards pics={pics} />
    </section>
  );
};

const Cards = ({ pics = [] }) => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10 h-[600px] md:h-auto mt-[100px]" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={pics[0]}
        alt="Example image"
        rotate="6deg"
        top="23%"
        left="1%"
        className="w-[240px] md:w-72"
      />
      <Card
        containerRef={containerRef}
        src={pics[1]}
        alt="Example image"
        rotate="12deg"
        top="50%"
        left="30%"
        className="w-[220px] md:w-52"
      />
      <Card
        containerRef={containerRef}
        src={pics[2]}
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-[230px] md:w-80"
      />

    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
