"use client";
import Social from "./Social";

const soclinks = [
  {
    icon_src: "/github-mark-white.png",
    label: {
      text: "GitHub",
      color: "#000",
      background: "#fff",
    },
    href: "https://github.com/peterpacka",
  },
  {
    icon_src: "/discord.svg",
    label: {
      text: "Discord",
      color: "#fff",
      background: "#5865f2",
    },
    href: "https://discord.com/users/1022154396794097706",
  },
  {
    icon_src: "/mail.svg",
    label: {
      text: "Email",
      color: "#fff",
      background: "#000",
    },
    href: "mailto:pitr@iampitrproject.xyz",
  },
];

const Socials = () => {
  return (
    <ul className="mt-4 flex items-center gap-4">
      {soclinks.map((social) => (
        <li
          className="w-fit flex items-center justify-center"
          key={social.href}
        >
          <Social {...social} />
        </li>
      ))}
    </ul>
  );
};

export default Socials;
