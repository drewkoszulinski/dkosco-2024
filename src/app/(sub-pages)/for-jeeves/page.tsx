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
    <div
      className={classNames("lg:px-24 lg:pb-24 pb-12 w-full px-2 max-w-full")}
    >
      <Image
        alt={props.alt}
        src={props.src}
        width={1200}
        height={1200}
        className="mx-auto max-w-[1060px] max-h-[95vh] w-full"
        priority
      />
    </div>
  );
};

const photoArr: PhotoItemProps[] = [
  {
    alt: "",
    src: "/portfolio-photos/jeeves-1.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-2.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-3.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-4.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-5.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-6.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-1.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-1.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-7.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-8.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-9.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-10.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-11.jpg",
  },
];

const PhotoSection = (props: PhotoSectionProps) => {
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

import { BioSection } from "@/app/components/BioSection";

export default function JeevesPage() {
  return (
    <>
      <PhotoSection isHidden={false} />
      <BioSection variant="photo" />
    </>
  );
}
