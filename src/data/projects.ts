export type ProjectType = {
  id: number;
  link_id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: "live" | "in-progress" | "archived";
};

export const projects: ProjectType[] = [
  {
    id: 1,
    link_id: "iampitrproject.xyz",
    name: "iampitrproject.xyz",
    description: "My personal website.",
    technologies: ["Next.js", "Tailwind CSS", "Motion", "Lucide"],
    githubUrl: "https://github.com/peterpacka/iampitrproject.xyz",
    liveUrl: "https://www.iampitrproject.xyz/",
    status: "live",
  },
  {
    id: 2,
    link_id: "talk.xhyrom.dev",
    name: "talk.xhyrom.dev",
    description: "AI chat application built for my friend.",
    technologies: ["Next.js", "Tailwind CSS", "Motion", "Lucide"],
    githubUrl: null,
    liveUrl: "https://talk.xhyrom.dev",
    status: "live",
  },
  {
    id: 3,
    link_id: "quotes.iampitrproject.xyz",
    name: "quotes.iampitrproject.xyz",
    description: "Idk i am bored",
    technologies: ["Vite", "React", "Motion", "Taiwind CSS"],
    githubUrl: null,
    liveUrl: "https://quotes.iampitrproject.xyz",
    status: "live",
  },
];
