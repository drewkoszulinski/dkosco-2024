import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "./components/Layout";

export const metadata: Metadata = {
  title: "Drew Koszulinski | Product Designer & Developer",
  description:
    "Drew Koszulinski's product design and frontend engineering portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-screen">
      <Layout>{children}</Layout>
    </html>
  );
}
