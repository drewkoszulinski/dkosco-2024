// "use client";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "./PhotoSection.module.css";
import { Text } from "../Text";
import { useRouter, useSearchParams } from "next/navigation";

interface PhotoSectionProps {
  isHidden: boolean;
}

interface PhotoItemProps {
  alt: string;
  src: string;
}

const landscapeArr: PhotoItemProps[] = [
  {
    alt: "a person standing at a dramatic point on a grassy hillside that juts out over the sea. across the sea are snow-covered mountains. the sea is peppered with islands of varying sizes.",
    src: "/portfolio-photos/landscape-7.jpg",
  },
  {
    alt: "A view from above the rio grande river gorge with a warm, setting sun creating a warm glow along the mountains that stretch across the horizon",
    src: "/portfolio-photos/landscape-15.jpg",
  },
  {
    alt: "many people gathered on a busy beach near a large sea stack on Canon Beach on the Oregon Coast",
    src: "/portfolio-photos/landscape-6.jpg",
  },
  {
    alt: "two furry, white goats standing in a field backlit by strong, late-morning sun",
    src: "/portfolio-photos/landscape-11.jpg",
  },
  {
    alt: "a small, old bridge which is no longer in use sits in a lush green valley with a backdrop of dramatic, snowcapped peaks.",
    src: "/portfolio-photos/landscape-16.jpg",
  },
  {
    alt: "An old barn in a meadow below a large forested hill",
    src: "/portfolio-photos/landscape-2.jpg",
  },
  {
    alt: "4 people standing on the rocky shore of a high-alpine reservoir surrounded by snowcapped peaks",
    src: "/portfolio-photos/landscape-3.jpg",
  },
  {
    alt: "an old, decrepit outbuilding in a lush, vast field",
    src: "/portfolio-photos/landscape-4.jpg",
  },
  {
    alt: "a person and their dog are walking on a black-rock beach in very cloudy conditions",
    src: "/portfolio-photos/landscape-5.jpg",
  },
  {
    alt: "a cattle guard in a field at the base of a large mountain range",
    src: "/portfolio-photos/landscape-8.jpg",
  },
  {
    alt: "an old, wood and cable fence stretching across a lush green valley below dramatic, snowcapped peaks",
    src: "/portfolio-photos/landscape-10.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/landscape-17.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/landscape-18.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/landscape-19.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/landscape-20.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/landscape-22.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/landscape-23.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/landscape-24.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/landscape-25.jpg",
  },
];

const portraitArr: PhotoItemProps[] = [
  {
    alt: "a portrait of a man sitting on a weight bench in a gym",
    src: "/portfolio-photos/portrait-7.jpg",
  },
  {
    alt: "a boxing coach receives a punch in his focus mitt",
    src: "/portfolio-photos/portrait-6.jpg",
  },
  {
    alt: "a woman walking on a bridge with a guitar",
    src: "/portfolio-photos/portrait-3.jpg",
  },
  {
    alt: "a close-up portrait of a weathered man with sharp eyes and a beard",
    src: "/portfolio-photos/portrait-8.jpg",
  },
  {
    alt: "a moody portrait of a main in a field of tall grass",
    src: "/portfolio-photos/portrait-2.jpg",
  },
  {
    alt: "a black and white image of a man wearing all black standing in front of a white background",
    src: "/portfolio-photos/portrait-4.jpg",
  },
  {
    alt: "a portrait of a man in front of a bamboo wall",
    src: "/portfolio-photos/portrait-5.jpg",
  },
  {
    alt: "an environmental portrait of a man wearing a purple suit jacket in front of a fireplace",
    src: "/portfolio-photos/portrait-9.jpg",
  },
  {
    alt: "a dyptic of a man wearing two different shirts",
    src: "/portfolio-photos/portrait-10.jpg",
  },
  {
    alt: "a husband and wife covered in splotches of brightly colored chalk dust",
    src: "/portfolio-photos/portrait-12.jpg",
  },
  {
    alt: "a man in a yellow sweater walking on a bridge",
    src: "/portfolio-photos/portrait-1.jpg",
  },
];

const architectureArr: PhotoItemProps[] = [
  {
    alt: "",
    src: "/portfolio-photos/architecture-1.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/architecture-2.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/architecture-3.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/architecture-4.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/architecture-5.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/architecture-6.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/architecture-7.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/architecture-8.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/architecture-9.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/architecture-10.jpg",
  },
];

const PhotoItem = (props: PhotoItemProps) => {
  return (
    <div
      className={classNames("lg:px-24 lg:pb-24 pb-12 w-full px-2 max-w-full")}
    >
      <Image
        alt={props.alt}
        src={props.src}
        width={1200}
        height={1200}
        style={{ objectFit: "contain" }}
        className="mx-auto max-w-[1060px] max-h-[95vh] w-full"
        priority
      />
    </div>
  );
};

export const PhotoSection = (props: PhotoSectionProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current tab from URL params, default to landscape
  const currentTab = searchParams.get("tab");
  const [activeTab, setActiveTab] = React.useState<
    "landscape" | "portrait" | "architecture"
  >(() => {
    if (currentTab === "portrait") return "portrait";
    if (currentTab === "architecture") return "architecture";
    return "landscape"; // default to landscape
  });

  // Update URL when tab changes
  const handleTabChange = (
    newTab: "landscape" | "portrait" | "architecture"
  ) => {
    setActiveTab(newTab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", newTab);
    router.push(`?${params.toString()}`);
  };

  // Sync state with URL params on mount and param changes
  React.useEffect(() => {
    if (currentTab === "portrait") {
      setActiveTab("portrait");
    } else if (currentTab === "architecture") {
      setActiveTab("architecture");
    } else {
      setActiveTab("landscape");
    }
  }, [currentTab]);
  return (
    <div
      className={classNames("flex flex-col align-items-center", {
        ["hidden"]: props.isHidden,
      })}
    >
      <div className={classNames("flex flex-row justify-center mb-10 gap-x-6")}>
        <button
          className={classNames(styles["tab"], {
            [styles["tab-active"]]: activeTab === "landscape",
          })}
          onClick={() => handleTabChange("landscape")}
        >
          <Text
            color={activeTab === "landscape" ? "highlight" : "tertiary"}
            useBottomMargin={false}
          >
            Landscape
          </Text>
        </button>
        <button
          className={classNames(styles["tab"], {
            [styles["tab-active"]]: activeTab === "portrait",
          })}
          onClick={() => handleTabChange("portrait")}
        >
          <Text
            color={activeTab === "portrait" ? "highlight" : "tertiary"}
            useBottomMargin={false}
          >
            Portrait
          </Text>
        </button>
        <button
          className={classNames(styles["tab"], {
            [styles["tab-active"]]: activeTab === "architecture",
          })}
          onClick={() => handleTabChange("architecture")}
        >
          <Text
            color={activeTab === "architecture" ? "highlight" : "tertiary"}
            useBottomMargin={false}
          >
            Architecture
          </Text>
        </button>
      </div>
      {activeTab === "landscape" &&
        landscapeArr.map((photo) => {
          return <PhotoItem src={photo.src} alt={photo.alt} key={photo.src} />;
        })}
      {activeTab === "portrait" &&
        portraitArr.map((photo) => {
          return <PhotoItem src={photo.src} alt={photo.alt} key={photo.src} />;
        })}
      {activeTab === "architecture" &&
        architectureArr.map((photo) => {
          return <PhotoItem src={photo.src} alt={photo.alt} key={photo.src} />;
        })}
    </div>
  );
};
