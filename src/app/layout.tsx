import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "i am pitr",
  description:
    "This site and domain is just for my side projects.. totally random things. Enjoy your stay!",
  keywords: [
    "pitr",
    "projects",
    "web development",
    "next.js",
    "portfolio",
    "cats",
    "kitten",
    "web kitten",
    "web cat",
    "dev",
  ],
  openGraph: {
    title: "I am pitr",
    description:
      "This site and domain is just for my side projects.. totally random things.",
    url: "https://iampitrproject.xyz",
    siteName: "iampitrproject.xyz",
    type: "website",
  },
};

// Gets avatar from github
const MY_USERNAME = "peterpacka";
const fetchAvatarURL = (): Promise<string> => {
  return fetch(`https://api.github.com/users/${MY_USERNAME}`, {
    cache: "force-cache",
  })
    .then((response) => response.json())
    .then((data) => data.avatar_url);
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const avatar_url = await fetchAvatarURL();

  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header avatar_url={avatar_url} />
        {children}
      </body>
    </html>
  );
}
