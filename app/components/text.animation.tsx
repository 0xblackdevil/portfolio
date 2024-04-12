"use client";
import { motion } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <motion.div
      variants={{
        start: {
          opacity: 0,
          y: -100,
          filter: "blur(10px)",
          transition: { type: "spring", duration: 1 },
        },
        stop: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { type: "spring", duration: 0.7 },
        },
      }}
      initial="start"
      animate="stop"
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
