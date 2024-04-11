interface IProject {
  backgroundColor: string;
  borderColor: string;
  title: string;
  description: string;
  projectState: {
    title: string;
    data: string;
  }[];
  projectLink: string;
  tachstack: string[];
  images: { url: string; position: string }[];
}

export const projects: IProject[] = [
  {
    backgroundColor: "bg-black",
    borderColor: "border-black",
    title: "Domegle",
    description: "A chat application that connects people.",
    projectState: [
      {
        title: "Project",
        data: "Domegle.com",
      },
      {
        title: "Role",
        data: "Full Stack Dev",
      },
      {
        title: "Date",
        data: "2024 - present",
      },
    ],
    projectLink: "https://0xdomegle.com",
    tachstack: [
      "React Ts",
      "Node js | Socket.io",
      "wagmi",
      "solidity | polygon network",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "col-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "",
      },
      {
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "col-span-2",
      },
    ],
  },
  {
    backgroundColor: "bg-[#6c35de]",
    borderColor: "border-[#6c35de]",
    title: "Incognance",
    description:
      "A chat application that connects people with similar interests.",
    projectState: [
      {
        title: "Project",
        data: "Domegle.com",
      },
      {
        title: "Role",
        data: "Full Stack Dev",
      },
      {
        title: "Date",
        data: "2024 - present",
      },
    ],
    projectLink: "https://0xdomegle.com",
    tachstack: ["React", "TypeScript", "Socket.IO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "col-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "",
      },
      {
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "col-span-2",
      },
    ],
  },
  {
    backgroundColor: "bg-[#2E8B57]",
    borderColor: "border-[#2E8B57]",
    title: "Mediblock",
    description:
      "A chat application that connects people with similar interests.",
    projectState: [
      {
        title: "Project",
        data: "Domegle.com",
      },
      {
        title: "Role",
        data: "Full Stack Dev",
      },
      {
        title: "Date",
        data: "2024 - present",
      },
    ],
    projectLink: "https://0xdomegle.com",
    tachstack: ["React", "TypeScript", "Socket.IO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "col-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "",
      },
      {
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "col-span-2",
      },
    ],
  },
  {
    backgroundColor: "bg-[#fd5732]",
    borderColor: "border-[#fd5732]",
    title: "Drivably",
    description:
      "A chat application that connects people with similar interests.",
    projectState: [
      {
        title: "Project",
        data: "Domegle.com",
      },
      {
        title: "Role",
        data: "Full Stack Dev",
      },
      {
        title: "Date",
        data: "2024 - present",
      },
    ],
    projectLink: "https://0xdomegle.com",
    tachstack: ["React", "TypeScript", "Socket.IO"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "col-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "",
      },
      {
        url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "col-span-2",
      },
    ],
  },
];
