"use client";
import { motion } from "framer-motion";
import { marque_text } from "../utils/marque.utils";

export const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

export default function MarqueText() {
  return (
    <div className="overflow-x-hidden relative w-screen max-w-full bg-[#fd5732]">
      <motion.div
        className="whitespace-nowrap text-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        <div className="flex  text-white py-6 text-xl items-center">
          {marque_text.map((text, index) => (
            <div key={index} className="flex items-center">
              <p className="text-clip">{text}</p>
              <div className="h-2 w-2 bg-white rounded-full mx-5 " />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
