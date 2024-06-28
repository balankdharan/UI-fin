import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function HomePage() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const slideRightVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideRightVariants}
      ref={ref}
      style={{ display: "inline" }}
    >
      {inView && !isLoaded && <div></div>}
      {inView && (
        <Spline
          scene="https://prod.spline.design/pz1keHkLV-K7GsTw/scene.splinecode"
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
      )}
    </motion.div>
  );
}
