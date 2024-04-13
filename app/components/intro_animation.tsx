import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [isExited, setIsExited] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExited(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isExited && (
        <motion.div
          variants={{
            end: {
              opacity: 0,
              y: 10000,
              filter: "blur(3px)",
              transition: { ease: "easeIn", duration: 1.5, delay: 0.3 },
            },
          }}
          exit="end"
          className="h-screen w-screen flex justify-center items-center bg-black z-50 text-white fixed overflow-hidden"
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
                transition: { type: "spring", duration: 0.5 },
              },
              end: {
                opacity: 0,
                y: 50,
                filter: "blur(5px)",
                transition: { ease: "easeIn", duration: 0.7 },
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
            You&apos;ve landed on Meet Zinzuvadiya&apos;s Portfolio
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
