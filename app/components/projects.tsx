import Link from "next/link";
import { projects } from "../utils/project.utils";

export default function Projects() {
  return (
    <div className="relative">
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
                      <span className="opacity-50"> / 0{projects.length}</span>
                    </div>
                    <div className="text-5xl">
                      {project.title} - {project.description}
                    </div>
                  </div>
                  {/* more detail grid */}
                  <div className="grid grid-cols-3 gap-16">
                    {project.projectState.map((state, index) => (
                      <div key={index} className="flex flex-col gap-2 text-lg">
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
    </div>
  );
}
