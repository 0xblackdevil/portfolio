import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projects } from "../utils/project.utils";
import MarqueText from "./marque";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroWrapper() {
  return (
    <div className="lg:h-screen lg:relative">
      <div className="px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 py-12 lg:pt-48">
        <div className="lg:col-span-2">
          <h1 className="text-5xl lg:text-9xl font-medium">
            I&apos;m Meet Zinzuvadiya.
          </h1>
          <p className="text-xl lg:text-4xl font-light lg:font-normal mt-12 lg:mt-24">
            Build blockchain solutions with precision and purpose. Open to
            opportunities.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs lg:text-md text-stone-900 tracking-widest">
            SELECTED PROJECTS
          </p>

          <div className="mt-4 lg:mt-8 text-xl">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="border-b-3 text-sm lg:text-lg font-light border-b-2 py-4 lg:py-5 group-hover:border-black duration-500 flex justify-between items-center">
                  {project.title}

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-black lg:text-white group-hover:text-black duration-500 -translate-x-5 group-hover:translate-x-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:bottom-0">
        <MarqueText />
      </div>
    </div>
  );
}
