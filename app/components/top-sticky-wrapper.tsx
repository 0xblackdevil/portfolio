import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../utils/project.utils";
import MarqueText from "./marque";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroWrapper() {
  return (
    <div className="h-screen relative">
      <div className="px-12 grid grid-cols-3 gap-20 pt-48">
        <div className="col-span-2">
          <h1 className="text-9xl font-medium">I&apos;m Meet Zinzuvadiya.</h1>
          <p className="text-4xl font-light mt-24">
            I&apos;m a blockchain developer who build microservices that connect
            people. Available for work.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-md text-stone-900 tracking-widest">
            SELECTED PROJECTS
          </p>

          <div className="mt-8 text-xl">
            {projects.map((project, index) => (
              <div className="group">
                <div
                  key={index}
                  className="border-b-3  font-light border-b-2 py-5 group-hover:border-black duration-500 flex justify-between items-center"
                >
                  {project.title}

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white group-hover:text-black duration-500 -translate-x-5 group-hover:translate-x-0"
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
  );
}
