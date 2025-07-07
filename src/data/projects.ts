export type ProjectType = {
  id: number;
  link_id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  image: string;
  status: "live" | "in-progress" | "archived";
};

export const projects: ProjectType[] = [
  {
    id: 1,
    link_id: "iampitrproject.xyz",
    name: "iampitrproject.xyz",
    description: "My personal website.",
    technologies: ["Next.js", "Tailwind CSS", "Motion"],
    githubUrl: "https://github.com/peterpacka/iampitrproject",
    liveUrl: "http://localhost:3000",
    image: "/project-screenshots/portfolio.png",
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
    image: "/project-screenshots/talk-xhyrom.png",
    status: "live",
  },
];
