import React from "react";
import Title from "./_components/Title";
import { projects } from "@/data/projects";
import Project from "./_components/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "projects",
  description:
    "Explore my collection of web development projects, experiments, and coding stupid things.",
  openGraph: {
    title: "pitrs projects",
    description:
      "A showcase of random side projects and web development experiments pls dont look",
  },
};

const page = () => {
  return (
    <main className="min-h-screen select-none max-w-[1200px] mx-auto">
      <section className="min-h-screen flex flex-col items-center justify-center gap-10 py-24">
        <Title />
        <ul className="flex flex-wrap items-center justify-center gap-10">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default page;
