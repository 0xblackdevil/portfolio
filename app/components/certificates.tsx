import { motion } from "framer-motion";
import { marqueeVariants } from "./marque";
import { certificates } from "../utils/certificate.utils";

export default function Certificates() {
  return (
    <div className="h-[600px] lg:h-[1000px] flex flex-col justify-center bg-[#f1f1f1] gap-12">
      <div className="flex flex-col justify-center items-center w-screen">
        <h1 className="text-3xl lg:text-8xl w-2/3 lg:w-3/5 text-center lg:font-medium mb-14">
          There&apos;s a lot more on my github.
        </h1>
        <div className="text-lg lg:text-2xl border border-black px-8 py-3 rounded-full">
          github.com/0xblackdevil
        </div>
      </div>

      <div className="w-screen overflow-hidden">
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          className="flex flex-row gap-5 max-h-[326px] max-w-[435px] "
        >
          {certificates.map((certificate, index) => (
            <img
              key={index}
              src={certificate}
              className="object-cover rounded-xl whitespace-nowrap"
              alt={"certificate image"}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
