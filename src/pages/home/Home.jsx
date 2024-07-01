/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import HomePage from "../../components/HomePage";
import SecondContent from "../../components/SecondContent";
import ThirdSection from "../../components/ThirdSection";

const Home = ({ setHoveredSection }) => {
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const firstSectionRef = useRef(null);
  const isThirdSectionInView = useInView(thirdSectionRef, { once: false });
  const isfirstSectionInView = useInView(firstSectionRef, { once: false });

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
  const slideUpVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <motion.div
        ref={firstSectionRef}
        initial="hidden"
        animate={isfirstSectionInView ? "visible" : "hidden"}
        variants={slideRightVariants}
      >
        <HomePage />
      </motion.div>

      <SecondContent ref={secondSectionRef} />

      <motion.div
        ref={thirdSectionRef}
        initial="hidden"
        animate={isThirdSectionInView ? "visible" : "hidden"}
        variants={slideUpVariants}
      >
        <ThirdSection />
      </motion.div>
    </>
  );
};

export default Home;
