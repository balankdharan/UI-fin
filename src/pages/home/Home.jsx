import { motion } from "framer-motion";
import HomePage from "../../components/HomePage";
import SecondContent from "../../components/SecondContent";
import ThirdSection from "../../components/ThirdSection";

const Home = () => {
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
      <SecondContent />
      <ThirdSection />
    </>
  );
};

export default Home;
