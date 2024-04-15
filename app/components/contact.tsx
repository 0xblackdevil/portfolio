import Link from "next/link";
import { socials } from "../utils/social.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-lvh bg-black relative text-white">
      <div className="flex flex-col justify-between h-screen py-20 px-6 lg:px-12">
        <div>
          <h1 className="text-3xl lg:text-8xl lg:w-2/3 mb-12">
            Available for work, Let&apos;s connect.
          </h1>
          <div className="flex">
            <div className="border border-white rounded-full px-8 py-3 text-lg lg:text-2xl hover:bg-white hover:text-black hover:cursor-pointer duration-300 font-normal">
              <Link href={"https://calendly.com/0x-meet-zinzuvadiya/30min"}>
                Book a call
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg lg:text-2xl text-white/50 mb-5 lg:mb-8">
            Find me elsewhere on web,
          </p>
          <div className="flex flex-col lg:flex-row gap-5 text-lg lg:text-2xl">
            {socials.map((social, index) => (
              <div className="flex lg:block" key={index}>
                <Link
                  href={social.url}
                  className=" border-b border-b-white/30 hover:border-b-white duration-300 pb-2"
                >
                  {social.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm lg:text-xl">
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
          className="bg-white text-black h-8 w-8 lg:h-16 lg:w-16 rounded-full absolute bottom-20 right-6 lg:right-12 flex justify-center items-center text-sm lg:text-2xl font-thin"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
