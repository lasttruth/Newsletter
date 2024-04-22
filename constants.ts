import { Metadata } from "next";


export const socials = [
    {
      id: 1,
      name: "Twitter",
      url: "https://twitter.com/lastruth",
      handle: "@lastruth",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/rewindxxii",
      handle: "rewindxxii",
    },
  ];

  const title = "Robin Doirin";
const description =
  "Full-Stack Software Engineer 🧑🏻‍💻 working with cutting-edge stuff.";
const image =
  "https://yt3.ggpht.com/VoEBu0KxtQkfWretx-3_NqxKnoLqfKNTtWq0KFigdqaqVQFz8CggKgqkcxXqCDW7zYWlZZJOuQ=s108-c-k-c0x00ffffff-no-rj";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://kamekuma.com",
    siteName: "KameKuma",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@lastruth",
  },
};