import Link from "next/link";
import { projects } from "../utils/project.utils";

export default function Projects() {
  return (
    <div className="relative">
      {projects.map((project, index) => (
        <div key={index} className=" bg-white" id={project.title}>
          <div
            className={`px-6 lg:px-12 ${project.backgroundColor} h-[600px] lg:h-[1000px]`}
          >
            <div className="py-12 lg:py-20 text-white text-sm tracking-wide ">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* project detail component */}
                <div className=" flex flex-col gap-12 lg:gap-24 col-span-1">
                  <div>
                    <div className="mb-14">
                      0{index + 1}{" "}
                      <span className="opacity-50"> / 0{projects.length}</span>
                    </div>
                    <div className="text-2xl lg:text-5xl">
                      {project.title} - {project.description}
                    </div>
                  </div>
                  {/* more detail grid */}
                  <div className="grid grid-rows-3 lg:grid-cols-3 gap-6 lg:gap-16">
                    {project.projectState.map((state, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-1 lg:gap-2 text-md lg:text-lg"
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
                <div className="hidden lg:flex justify-end items-start lg:col-span-1">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-12 gap-3 lg:gap-12 -mt-[100px] lg:-mt-[500px] pb-8 lg:py-20">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                className={`${image.position} rounded-2xl object-cover w-screen`}
                alt="project image"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
