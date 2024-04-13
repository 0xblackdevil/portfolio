import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meet Zinzuvadiya",
  description:
    "Meet Zinzuvadiya, a pioneering Full Stack Blockchain Developer from Pune, enhancing digital interactions with innovative projects like Domegle and Mediblock. Discover blockchain-driven solutions in social media and health record management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
