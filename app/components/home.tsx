import { projects } from "../utils/project.utils";
import MarqueText from "./marque";

export default function HomeView() {
  return (
    <div className="h-screen absolute top-0 ">
      <div className="px-12 grid grid-cols-3 mt-48">
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
                className="border-b-3  font-light border-b-2 py-5 hover:border-black duration-500"
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
  );
}
