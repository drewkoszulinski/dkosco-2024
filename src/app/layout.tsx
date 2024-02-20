import type { Metadata } from "next";
import { syne } from "./fonts";
import "./globals.css";
import classNames from "classnames";

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
    <html lang="en" className="w-full h-screen bg-[var(--color-bg-primary)]">
      <body
        className={classNames(
          syne.className,
          "bg-[var(--color-bg-primary)] antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
