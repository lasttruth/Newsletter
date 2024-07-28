import { Metadata } from "next";


export const socials = [
    {
      id: 1,
      name: "Youtube",
      url: "https://www.youtube.com/@Focuscision",
      handle: "@Focuscision",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/mr.focuscision/",
      handle: "Fokist Kix",
    },
    {
      id: 3,
      name: "Ebay",
      url: "https://www.ebay.com/str/fokistflips",
      handle: "Fokist Flips",
    },
  ];

  const title = "Andrew Doirin";
const description =
  "Keep Going";
const image =
  "https://yt3.ggpht.com/VoEBu0KxtQkfWretx-3_NqxKnoLqfKNTtWq0KFigdqaqVQFz8CggKgqkcxXqCDW7zYWlZZJOuQ=s108-c-k-c0x00ffffff-no-rj";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://focuscision.com",
    siteName: "Focuscision Presents",
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