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
    src: "/portfolio-photos/jeeves-01.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-02.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-03.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-04.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-05.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-06.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-07.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-08.jpg",
  },
  {
    alt: "",
    src: "/portfolio-photos/jeeves-09.jpg",
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
