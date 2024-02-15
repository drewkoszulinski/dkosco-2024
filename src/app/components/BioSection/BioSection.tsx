import classNames from "classnames";
import { Text } from "../Text";
import { Button } from "../Button";
import Image from "next/image";

export const BioSection = () => {
  return (
    <div
      className={classNames(
        "flex flex-col w-full max-w-[50rem] py-8 pl-10 pr-36 bg-[var(--color-bg-secondary)] mx-auto rounded-xxl relative"
      )}
    >
      <div className={classNames("mb-8")}>
        <div className={classNames("mb-4")}>
          <Text size="lg" as="h3">
            Drew Koszulinski
          </Text>
          <Text color="highlight" as="h4" isMono>
            Product Designer & Frontend Engineer
          </Text>
        </div>
        <Text color="secondary">
          Over the last decade, I have had the pleasure of refining my
          methodology for designing and building reliable, scalable, and
          repeatable user interfaces. At the center of this is the intersection
          of business goals with the needs and expectations of the user. On the
          outside is an elegant, accessible, and robust user experience. If
          there’s anything I can help with, please get in touch!
        </Text>
      </div>
      <div
        className={classNames(
          "absolute -top-4 -right-20 w-64 h-64 shadow-lg rounded-full bg-[var(--color-bg-secondary)] overflow-hidden border-[6px] border-[var(--color-bg-secondary)]"
        )}
      >
        <Image
          src="/bio-image.png"
          fill
          alt="A photo of Drew Koszulinski and his wife, product designer Zoë Knight"
        />
      </div>
      <Button
        href="https://drew61.typeform.com/to/dysVVM?typeform-source=dkos.co"
        label="Send me a message"
        rightAccessory="send"
        variant="primary"
      />
    </div>
  );
};
