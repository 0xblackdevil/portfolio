import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [isExited, setIsExited] = useState(false); // Start with false to show the intro

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExited(true); // Hide the intro after 1 second
    }, 1000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run only once on mount

  return (
    <AnimatePresence>
      {!isExited && ( // Change this to !isExited to show the component initially
        <motion.div
          variants={{
            end: {
              opacity: 0,
              y: 10000,
              filter: "blur(10px)",
              transition: { ease: "easeIn", duration: 1.5, delay: 0.3 },
            },
          }}
          exit="end"
          className="h-screen w-screen flex justify-center items-center bg-black absolute z-50 text-white"
        >
          <motion.div
            variants={{
              start: {
                opacity: 0,
                y: -50,
                filter: "blur(5px)",
                transition: { ease: "easeIn", duration: 0.5 },
              },
              stop: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { type: "spring", duration: 0.7 },
              },
              end: {
                opacity: 0,
                y: 50,
                filter: "blur(5px)",
                transition: { ease: "easeIn", duration: 0.5 },
              },
            }}
            initial="start"
            animate="stop"
            exit="end"
            className="h-max w-max pb-2"
          >
            <h1 className="text-7xl">નમસ્કાર 🙏🏻</h1>
          </motion.div>
          <p className="absolute bottom-8 opacity-25 text-lg">
            You`&apos;`ve landed on Meet Zinzuvadiya`&apos;`s Portfolio
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
