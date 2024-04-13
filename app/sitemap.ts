import { MetadataRoute } from "next";
import { projects } from "@/app/utils/project.utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const allProjects = projects.map((project) => {
    return {
      url: project.projectLink,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: "https://0xmeet.com",
      lastModified: new Date(),
    },
    ...allProjects,
  ];
}
