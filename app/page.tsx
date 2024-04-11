"use client";
import Link from "next/link";
import MarqueText from "./components/marque";
import Navbar from "./components/navbar";
import { projects } from "./utils/project.utils";
import { motion } from "framer-motion";
import IntroScreen from "./components/intro_animation";

export default function Home() {
  return (
    <div>
      <IntroScreen />
      <div>
        <div className="h-screen">
          <Navbar />
          <div className="px-12 grid grid-cols-3 mt-24">
            <div className="col-span-2">
              <h1 className="text-9xl font-medium">I'm Meet Zinzuvadiya.</h1>
              <p className="text-4xl font-light mt-24">
                I'm a blockchain developer who build microservices that connect
                people. Available for work.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-md text-stone-900 tracking-widest">
                SELECTED PROJECTS
              </p>

              <div className="mt-8 text-xl">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border-b-3 font-light border-b-2 py-5 hover:border-black duration-500"
                  >
                    {project.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <MarqueText />
          </div>
        </div>

        {projects.map((project, index) => (
          <div key={index}>
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
                  <div className=" col-span-1">
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

            <div className="grid grid-cols-2 grid-rows-3 px-12 gap-12 -mt-[500px] py-20">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  className={`${image.position} rounded-2xl h-screen w-screen`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
