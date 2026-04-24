import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://baseline-basics-git-main-marwanwarnick1963-5765s-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Baseline Basics | Learn Tennis Strokes",
  description:
    "A beginner-friendly tennis site that teaches the basics of the forehand, backhand, serve, volley, and footwork with drills, videos, diagrams, and a quiz.",
  keywords: [
    "tennis basics",
    "learn tennis",
    "tennis forehand",
    "tennis backhand",
    "tennis serve",
    "tennis volley",
    "beginner tennis lessons",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Baseline Basics | Learn Tennis Strokes",
    description:
      "Learn the forehand, backhand, serve, and volley with beginner-friendly tennis lessons, videos, diagrams, and a quiz.",
    url: siteUrl,
    siteName: "Baseline Basics",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Baseline Basics | Learn Tennis Strokes",
    description:
      "Beginner-friendly tennis lessons covering the forehand, backhand, serve, and volley.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${playfairDisplay.variable}`}>{children}</body>
    </html>
  );
}
