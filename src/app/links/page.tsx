import React from "react";
import Title from "./_components/Title";
import { Metadata } from "next";
import { links } from "@/data/links";
import Link from "./_components/Link";

export const metadata: Metadata = {
  title: "links",
  description: "all my links in one page contact me",
  openGraph: {
    title: "pitrs links",
    description: "Every link is here. Enjoy yourself",
  },
};

const page = () => {
  return (
    <main className="h-screen select-none max-w-[1200px] p-5 mx-auto">
      <section className="h-full flex flex-col items-center justify-center gap-10 py-25">
        <Title />
        <ul className="flex gap-x-6 gap-y-4 items-center justify-center flex-wrap">
          {links.map((link) => (
            <li key={link.name}>
              <Link {...link} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
export default page;
