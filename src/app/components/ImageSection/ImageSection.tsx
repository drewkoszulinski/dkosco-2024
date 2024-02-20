{
}
import classNames from "classnames";
import Image from "next/image";
import { Text } from "../Text";

interface ImageSectionProps {
  src: string;
  alt: string;
  imageHeight?: number;
  videoEmbed?: React.ReactElement;
}

export const ImageSection = (props: ImageSectionProps) => {
  return (
    <div className={classNames("w-full flex flex-col gap-y-4")}>
      <div
        className={classNames(
          "w-full rounded-lg bg-[var(--color-bg-secondary)] shadow-lg border-[6px] border-[var(--color-border-secondary)] relative overflow-hidden"
        )}
      >
        {props.videoEmbed ? (
          props.videoEmbed
        ) : (
          <Image src={props.src} alt={props.alt} width={856} height={558} />
        )}
      </div>
      <Text color="tertiary" size="sm">
        {props.alt}
      </Text>
    </div>
  );
};
