import classNames from "classnames";
import { Text } from "../Text";
import { Button } from "../Button";
import Image from "next/image";

interface BioSectionProps {
  variant: "photo" | "design-dev";
}

export const BioSection = (props: BioSectionProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-y-6 w-full max-w-[50rem] py-6 my-40 lg:py-10 pl-6 lg:pl-10 pr-6 lg:pr-36 bg-[var(--color-bg-secondary)] mx-auto rounded-xxl relative"
      )}
    >
      <div
        className={classNames(
          "relative lg:absolute mx-auto -mt-28 lg:mt-0 lg:-top-16 lg:-right-16 mb-4 w-64 aspect-h-1 max-w-full shadow-lg rounded-full bg-[var(--color-bg-secondary)] overflow-hidden border-[6px] border-[var(--color-bg-secondary)]"
        )}
      >
        <Image
          src={props.variant === "design-dev" ? "/pfp1.png" : "/pfp2.jpg"}
          width={256}
          height={256}
          alt="A photo of Drew Koszulinski and his wife, product designer Zoë Knight"
        />
      </div>
      <div className={classNames("w-full")}>
        <div className={classNames("-mb-3")}>
          <Text size="lg" as="h3">
            Drew Koszulinski
          </Text>
        </div>
        {props.variant === "design-dev" ? (
          <Text color="highlight" as="h4" isMono>
            Product Designer & Frontend Engineer
          </Text>
        ) : (
          <Text color="highlight" as="h4" isMono>
            Landscape & portrait photographer
          </Text>
        )}
      </div>
      {props.variant === "design-dev" ? (
        <Text color="secondary">
          Over the last decade, I have had the pleasure of refining my
          methodology for designing and building reliable, scalable, and
          repeatable user interfaces. At the center of this is the intersection
          of business goals with the needs and expectations of the user. On the
          outside is an elegant, accessible, and robust user experience. If
          there’s anything I can help with, please get in touch!
        </Text>
      ) : (
        <Text color="secondary">
          Since earning my Bachelor of Arts in Photography in 2013, my travels
          across the American West and beyond have shown me that landscape
          photography is more than just showcasing grand vistas—it is an
          opportunity to create moments of stillness and refuge in an unsettled
          world. Through my work, I strive to preserve these fleeting moments,
          inviting others to pause, reflect, and find solace in the immutable
          tranquility of the world around them.
        </Text>
      )}
      <div className={classNames("flex gap-x-3")}>
        <Button
          href="https://drew61.typeform.com/to/dysVVM?typeform-source=dkos.co"
          label="Send me a message"
          rightAccessory="send"
          variant="primary"
          target="_blank"
        />
        {/* {props.variant === "design-dev" && (
          <Button
            href="/cv-drew-koszulinski.pdf"
            label="CV"
            rightAccessory="download"
            variant="primary"
            target="_blank"
          />
        )} */}
      </div>
    </div>
  );
};
