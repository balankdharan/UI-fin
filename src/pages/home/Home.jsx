/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HomePage from "../../components/HomePage";
import SecondContent from "../../components/SecondContent";
import ThirdSection from "../../components/ThirdSection";

const Home = ({ setHoveredSection }) => {
  const secondSectionRef = useRef(null);

  useEffect(() => {
    const secondSection = secondSectionRef.current;

    const handleMouseEnter = () => {
      setHoveredSection("second");
    };

    const handleMouseLeave = () => {
      setHoveredSection(null);
    };

    if (secondSection) {
      secondSection.addEventListener("mouseenter", handleMouseEnter);
      secondSection.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        secondSection.removeEventListener("mouseenter", handleMouseEnter);
        secondSection.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [setHoveredSection]);

  const slideRightVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideRightVariants}
      >
        <HomePage />
      </motion.div>

      <SecondContent ref={secondSectionRef} />
      {/* Use ref here */}
      <ThirdSection />
    </>
  );
};

export default Home;
