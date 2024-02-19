{
}
import classNames from "classnames";
import Image from "next/image";
import { Text } from "../Text";

interface ImageSectionProps {
  src: string;
  alt: string;
  imageHeight?: number;
}

export const ImageSection = (props: ImageSectionProps) => {
  const heightClass = !props.imageHeight ? "h-auto" : "h-[35.25rem]";
  return (
    <div className={classNames("w-full flex flex-col gap-y-4")}>
      <div
        className={classNames(
          "w-full h-full rounded-lg bg-[var(--color-bg-secondary)] shadow-lg border-[6px] border-[var(--color-border-secondary)] relative overflow-hidden",
          heightClass
        )}
      >
        <Image src={props.src} alt={props.alt} width={856} height={558} />
      </div>
      <Text color="tertiary" size="sm">
        {props.alt}
      </Text>
    </div>
  );
};
