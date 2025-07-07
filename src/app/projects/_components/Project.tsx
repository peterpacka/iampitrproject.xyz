"use client";
import { ProjectType } from "@/data/projects";
import { Github, ExternalLink, CornerLeftUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const Project = (project: ProjectType) => {
  return (
    <div className="bg-[#060d10] border border-[#050a0c] rounded-xl transition-all duration-300 overflow-hidden max-w-[25rem]">
      <div className="relative group">
        <div className="h-48 overflow-hidden">
          <iframe
            src={project.liveUrl!}
            className="w-[200%] h-96 scale-50 origin-top-left pointer-events-none"
            title={project.name}
          />
        </div>
        <div className="absolute inset-0 bg-black/5 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            {project.liveUrl && (
              <Link
                draggable={false}
                href={project.liveUrl}
                target="_blank"
                className="border-blue-600 border-2 hover:border-blue-700 text-white px-3 py-2 rounded-md transition-colors flex items-center gap-1"
              >
                <ExternalLink size={16} />
                View
              </Link>
            )}
            {project.githubUrl && (
              <Link
                draggable={false}
                href={project.githubUrl}
                target="_blank"
                className="border-gray-600 border-2 hover:border-gray-700 text-white px-3 py-2 rounded-md transition-colors flex items-center gap-1"
              >
                <Github size={16} />
                Code
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-xl text-white">{project.name}</h3>
          <div className="flex items-center gap-1">
            <span
              className={`text-lg px-2 py-1 font-black uppercase rounded-full ${
                project.status === "live"
                  ? "text-green-600"
                  : project.status === "in-progress"
                  ? "text-yellow-600"
                  : "text-gray-600"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        <p className="text-neutral-200 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <Link
              draggable={false}
              href={project.liveUrl}
              target="_blank"
              className="group flex items-center gap-0.5 text-white duration-100 hover:text-neutral-300 transition-all text-sm"
            >
              <CornerLeftUp
                className="group-hover:-translate-x-0.5 transition-all"
                size={16}
              />
              Visit site
            </Link>
          )}
          {project.githubUrl && (
            <Link
              draggable={false}
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-0.5 text-gray-400 hover:text-gray-500 duration-100 transition-all text-sm"
            >
              <Github size={16} />
              Github code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
