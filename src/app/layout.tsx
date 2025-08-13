import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "./components/Layout";
import { syne } from "./fonts";

export const metadata: Metadata = {
  title: "Drew Koszulinski | Photography, product design & web development",
  description:
    "Drew Koszulinski's photography, product design, and web development portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`w-full h-screen ${syne.className}`}>
      <Layout>{children}</Layout>
    </html>
  );
}
