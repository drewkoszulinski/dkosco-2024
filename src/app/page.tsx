"use client";
import { BioSection } from "./components/BioSection";
import { Suspense, useState } from "react";
import { PhotoSection } from "./components/PhotoSection";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const urlState = pathname === "/" ? true : false;
  const [isPhoto] = useState(urlState);

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <PhotoSection isHidden={!isPhoto} />
      {/* </Suspense> */}
      <BioSection variant={isPhoto ? "photo" : "design-dev"} />
    </>
  );
}
