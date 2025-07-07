"use client";
import { LinkType } from "@/data/links";
import Link from "next/link";
import React from "react";

const LinkExport = (link: LinkType) => {
  return (
    <Link
      draggable={false}
      className="flex items-center gap-1 font-bold bg-[#060d10] rounded-xl p-2 hover:scale-[1.02] hover:-translate-y-1 hover:bg-blue-950 transition-all"
      href={link.url}
    >
      <img alt="icon of platform" className="h-8" src={link.icon} />
      {link.name}
    </Link>
  );
};

export default LinkExport;
