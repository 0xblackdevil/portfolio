"use client";
import Link from "next/link";
import MarqueText, { marqueeVariants } from "./components/marque";
import Navbar from "./components/navbar";
import { projects } from "./utils/project.utils";
import IntroScreen from "./components/intro_animation";
import Contact from "./components/contact";
import AnimatedText from "./components/text.animation";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll } from "framer-motion";
import { certificates } from "./utils/certificate.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const projectContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectContainer,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="relative">
      {/* Intro Screen */}
      <div className="z-50">
        <IntroScreen />
      </div>
      {/* Navbar */}
      <div className="fixed z-40 w-screen">
        <Navbar />
      </div>
      {/* Main component */}
      <div>
        <div className="fixed bg-white h-screen z-10 pointer-events-none">
          <div className="px-12 grid grid-cols-3 mt-48 pointer-events-auto">
            <div className="col-span-2">
              <h1 className="text-3xl md:text-9xl font-medium">
                <AnimatedText text="I'm Meet Zinzuvadiya." />
              </h1>
              <p className="text-4xl font-light mt-24">
                I&apos;m a blockchain developer who build microservices that
                connect people. Available for work.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-md text-stone-900 tracking-widest">
                SELECTED PROJECTS
              </p>

              <div className="mt-8 text-xl">
                {projects.map((project, index) => (
                  <div className=" group">
                    <div
                      key={index}
                      className="flex justify-between border-b-3 font-light border-b-2 py-5  group-hover:border-black duration-500"
                    >
                      {project.title}

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-white group-hover:text-black duration-500 -translate-x-10 group-hover:-translate-x-5"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <MarqueText />
          </div>
        </div>

        <div ref={projectContainer} className="relative z-20 pt-[1000px] ">
          {projects.map((project, index) => (
            <div key={index} className="snap-always snap-start bg-white">
              <div className={`px-12 ${project.backgroundColor} h-[1000px]`}>
                <div className="py-20 text-white text-sm tracking-wide ">
                  <div className="grid grid-cols-2">
                    {/* project detail component */}
                    <div className=" flex flex-col gap-24 col-span-1">
                      <div>
                        <div className="mb-14">
                          0{index + 1}{" "}
                          <span className="opacity-50">
                            {" "}
                            / 0{projects.length}
                          </span>
                        </div>
                        <div className="text-5xl">
                          {project.title} - {project.description}
                        </div>
                      </div>
                      {/* more detail grid */}
                      <div className="grid grid-cols-3 gap-16">
                        {project.projectState.map((state, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-2 text-lg"
                          >
                            <p className="opacity-50">{state.title}</p>
                            {index === 0 ? (
                              <Link
                                href={project.projectLink}
                                className={`border-b ${project.borderColor} hover:border-white duration-500`}
                              >
                                {state.data}
                              </Link>
                            ) : (
                              <p>{state.data}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* tach stack */}
                    <div className="flex justify-end items-start col-span-1">
                      <div className="flex flex-col whitespace-nowrap gap-4 items-end justify-end">
                        {project.spacialTags?.map((stack, index) => (
                          <p
                            key={index}
                            className={`border bg-white px-4 py-2 rounded-full flex w-fit border-opacity-50 ${stack.textColor} font-bold`}
                          >
                            {stack.title}
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-col whitespace-nowrap gap-4 items-end justify-end">
                        {project.tachstack.map((stack, index) => (
                          <p
                            key={index}
                            className="border border-white px-4 py-2 rounded-full flex w-fit border-opacity-50"
                          >
                            {stack}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 px-12 gap-12 -mt-[500px] py-20">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    className={`${image.position} rounded-2xl object-cover w-screen`}
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="h-[1000px] flex flex-col justify-center bg-[#cee8ff] gap-12">
            <div className="flex flex-col justify-center items-center w-screen">
              <h1 className="text-8xl w-3/5 text-center font-medium mb-14">
                There&apos;s a lot more on my github.
              </h1>
              <div className="text-2xl border border-black px-8 py-3 rounded-full">
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
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* contact component */}
      <div className="relative z-20 h-screen">
        <Contact />
      </div>
    </div>
  );
}
