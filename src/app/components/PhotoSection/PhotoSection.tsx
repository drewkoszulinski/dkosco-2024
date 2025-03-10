import classNames from "classnames";
import Image from "next/image";

interface PhotoSectionProps {
  isHidden: boolean;
}

interface PhotoItemProps {
  alt: string;
  src: string;
}

const PhotoItem = (props: PhotoItemProps) => {
  return (
    <div className={classNames("lg:px-24 lg:py-24 w-full px-2 py-6")}>
      <Image
        alt={props.alt}
        src={props.src}
        width={1200}
        height={1200}
        className="mx-auto max-h-[95vh] w-auto"
        priority
      />
    </div>
  );
};

const photoArr: PhotoItemProps[] = [
  {
    alt: "a person standing at a dramatic point on a grassy hillside that juts out over the sea. across the sea are snow-covered mountains. the sea is peppered with islands of varying sizes.",
    src: "/portfolio-photos/portfolio-photo-7.jpg",
  },
  {
    alt: "A view from above the rio grande river gorge with a warm, setting sun creating a warm glow along the mountains that stretch across the horizon",
    src: "/portfolio-photos/portfolio-photo-15.jpg",
  },
  {
    alt: "many people gathered on a busy beach near a large sea stack on Canon Beach on the Oregon Coast",
    src: "/portfolio-photos/portfolio-photo-6.jpg",
  },
  {
    alt: "two furry, white goats standing in a field backlit by strong, late-morning sun",
    src: "/portfolio-photos/portfolio-photo-11.jpg",
  },
  {
    alt: "a small, old bridge which is no longer in use sits in a lush green valley with a backdrop of dramatic, snowcapped peaks.",
    src: "/portfolio-photos/portfolio-photo-16.jpg",
  },
  {
    alt: "An old barn in a meadow below a large forested hill",
    src: "/portfolio-photos/portfolio-photo-2.jpg",
  },
  {
    alt: "4 people standing on the rocky shore of a high-alpine reservoir surrounded by snowcapped peaks",
    src: "/portfolio-photos/portfolio-photo-3.jpg",
  },
  {
    alt: "an old, decrepit outbuilding in a lush, vast field",
    src: "/portfolio-photos/portfolio-photo-4.jpg",
  },
  {
    alt: "a person and their dog are walking on a black-rock beach in very cloudy conditions",
    src: "/portfolio-photos/portfolio-photo-5.jpg",
  },
  {
    alt: "a cattle guard in a field at the base of a large mountain range",
    src: "/portfolio-photos/portfolio-photo-8.jpg",
  },
  {
    alt: "an old, wood and cable fence stretching across a lush green valley below dramatic, snowcapped peaks",
    src: "/portfolio-photos/portfolio-photo-10.jpg",
  },
  {
    alt: "a creek stretches out through a grassy field at the base of some dramatic, snowcapped peaks.",
    src: "/portfolio-photos/portfolio-photo-13.jpg",
  },
  {
    alt: "A view from above a black sand beach and a lush, green and rocky cliff.",
    src: "/portfolio-photos/portfolio-photo-14.jpg",
  },
];

export const PhotoSection = (props: PhotoSectionProps) => {
  return (
    <div
      className={classNames("flex flex-col align-items-center", {
        ["hidden"]: props.isHidden,
      })}
    >
      {photoArr.map((photo) => {
        return <PhotoItem src={photo.src} alt={photo.alt} key={photo.src} />;
      })}
    </div>
  );
};
