"use client";
import { BioSection } from "./components/BioSection";
import { useState } from "react";
import { PhotoSection } from "./components/PhotoSection";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const urlState = pathname === "/" ? true : false;
  const [isPhoto] = useState(urlState);

  return (
    <>
      <PhotoSection isHidden={!isPhoto} />
      <BioSection variant={isPhoto ? "photo" : "design-dev"} />
    </>
  );
}
