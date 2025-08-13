"use client";
import classNames from "classnames";
import { Text } from "../Text";
import { Switch } from "../Switch";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const pathname = usePathname();
  const urlState = pathname === "/" ? true : false;
  const [isPhoto, setIsPhoto] = useState(urlState);

  const router = useRouter();

  const handleSwitchPress = () => {
    setIsPhoto(!isPhoto);
    if (isPhoto) {
      router.push("/design-dev");
    } else {
      router.push("/");
    }
  };

  return (
    <body
      className={classNames(
        "antialiased",
        isPhoto === false ? "theme-dark" : "theme-light"
      )}
    >
      <div
        className={classNames(
          "w-full flex flex-col lg:flex-row items-center lg:items-start bg-[var(--color-bg-primary)] transition-md py-4 px-4",
          {
            hidden: pathname != "/" && pathname != "/design-dev",
          }
        )}
      >
        <div
          className={classNames(
            "flex flex-col w-full pointer-events-none transition-sm",
            {
              ["opacity-0 -mt-16"]: !isPhoto,
              ["opacity-1 mt-0"]: isPhoto,
            }
          )}
        >
          <Text size="lg" as="h1" useBottomMargin={false} align="center">
            Drew Koszulinski
          </Text>
          <Text size="md" as="h2" color="highlight" align="center">
            Photographer
          </Text>
        </div>
        <Switch isPhoto={isPhoto} onClick={handleSwitchPress} />
      </div>
      <main
        className={classNames(
          "flex flex-col min-h-screen px-4 md:px-10 pt-4 md:pt-10 pb-40 bg-[var(--color-bg-primary)] transition-md"
        )}
      >
        {props.children}
      </main>
    </body>
  );
};
