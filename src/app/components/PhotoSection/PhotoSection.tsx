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

  // Get current tab from URL params, default to landscapes (true)
  const currentTab = searchParams.get("tab");
  const [isLandscape, setIsLandscape] = React.useState(() => {
    if (currentTab === "portrait") return false;
    return true; // default to landscapes
  });

  // Update URL when tab changes
  const handleTabChange = (newIsLandscape: boolean) => {
    setIsLandscape(newIsLandscape);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", newIsLandscape ? "landscape" : "portrait");
    router.push(`?${params.toString()}`);
  };

  // Sync state with URL params on mount and param changes
  React.useEffect(() => {
    if (currentTab === "portrait") {
      setIsLandscape(false);
    } else {
      setIsLandscape(true);
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
            [styles["tab-active"]]: isLandscape,
          })}
          onClick={() => handleTabChange(true)}
        >
          <Text
            color={isLandscape ? "highlight" : "tertiary"}
            useBottomMargin={false}
            isMono
          >
            Landscapes
          </Text>
        </button>
        <button
          className={classNames(styles["tab"], {
            [styles["tab-active"]]: !isLandscape,
          })}
          onClick={() => handleTabChange(false)}
        >
          <Text
            color={isLandscape ? "tertiary" : "highlight"}
            useBottomMargin={false}
            isMono
          >
            Portraits
          </Text>
        </button>
      </div>
      {isLandscape
        ? landscapeArr.map((photo) => {
            return (
              <PhotoItem src={photo.src} alt={photo.alt} key={photo.src} />
            );
          })
        : portraitArr.map((photo) => {
            return (
              <PhotoItem src={photo.src} alt={photo.alt} key={photo.src} />
            );
          })}
    </div>
  );
};
