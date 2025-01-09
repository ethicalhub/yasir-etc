import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import React from "react";
import "./globals.css";

const outFit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Digital Etceteras of My Life - @yasir-etc",
  description:
    "Journaling my journey as a developer and accumulating my resources, revision notes, and blogs on tech, growth, and personal interests in one place. Join me in exploring and learning!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outFit.className} bg-lightBg antialiased`}>
        {children}
      </body>
    </html>
  );
}
