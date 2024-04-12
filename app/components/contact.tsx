import Link from "next/link";
import { socials } from "../utils/social.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-screen bg-black  text-white">
      <div className="flex flex-col justify-between h-screen py-20 px-12">
        <div>
          <h1 className="text-8xl w-2/3 mb-12">
            Available for work, Let&apos;s connect.
          </h1>
          <div className="flex">
            <div className="border border-white rounded-full px-8 py-3 text-2xl hover:bg-white hover:text-black hover:cursor-pointer duration-300 font-normal">
              <Link href={"https://calendly.com/0x-meet-zinzuvadiya/30min"}>
                Book a call
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl text-white/50 mb-8">
            Find me elsewhere on web,
          </p>
          <div className="flex gap-5 text-2xl">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className=" border-b border-b-white/30 hover:border-b-white duration-300 pb-2"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-xl">
          Inspired from{" "}
          <Link
            href={"https://dribbble.com/shots/23502486-Design-Portfolio"}
            className="border-b border-b-white/30 hover:border-b-white duration-300 pb-1"
          >
            @Vishnu.design
          </Link>
        </p>
      </div>

      <AnimatePresence>
        <motion.div
          variants={{
            animate: {
              y: -30,
              transition: { ease: "linear", duration: 0.5 },
            },
          }}
          animate={isHovered ? "animate" : "end"}
          className="bg-white text-black h-16 w-16 rounded-full absolute bottom-20 right-12 flex justify-center items-center text-2xl"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
