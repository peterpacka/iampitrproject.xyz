import React from "react";
import Title from "./_components/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about me",
  description:
    "Learn about me - 16 year old web developer who loves making websites, cats, and random projects.",
  openGraph: {
    title: "about pitr",
    description:
      "Learn about the person behind the random projects and things... lol",
  },
};

const page = () => {
  return (
    <main className="min-h-screen select-none max-w-[1200px] mx-auto">
      <section className="min-h-screen flex flex-col items-center justify-center gap-10 py-25">
        <Title />
        <article className="flex flex-col gap-4 max-w-[900px] mx-auto text-2xl px-10">
          <p>
            I’m 16, just a dude (pronouns cat/kitty — JK, he/him default lol). I
            love making websites for fun, that’s kinda my thing. I mess with
            Next.js a lot and Svelte too (just a bit but I vibe with it). I do
            random stuff, random projects. Like 95% of my projects get deleted
            cuz I get bored fast. I think I’m pretty decent at it, not the best
            for sure, got a lot to learn still.
          </p>
          <p>
            I didn’t have any profile picture but I saw a TikTok video with this
            <span className="font-bold"> cat </span>
            <img
              alt="cat picture"
              draggable={false}
              className="inline h-8"
              src="/kitten-dance.gif"
            />{" "}
            on 7/6/2025 and was laughing so hard, so I got the idea to rebrand
            myself as Cat. Now I finally have a profile picture ’cause I didn’t
            before, so that’s the day I changed my life and career.
          </p>
          <p>
            Oh and I made a Discord bot too but that was just for the dumb badge
            so I look fancy lmao.
          </p>
          <p>
            This is my domain btw, for my side projects. I paid for it, yes
            sirrr. I got some projects online, some not, some I nuked cuz they
            were dumb. But yeah, that’s my liiiifeeee…{" "}
            <img
              alt="cat picture"
              draggable={false}
              src="/kitten-is-rainbow.gif"
              className="inline h-8"
            />
          </p>
          <p className="text-gray-500 text-sm">
            And i like drinking alcohol tooo UWU
          </p>
        </article>
      </section>
    </main>
  );
};
export default page;
