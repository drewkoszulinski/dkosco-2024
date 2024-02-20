import classNames from "classnames";
import { Text } from "../Text";
import { Button } from "../Button";
import Image from "next/image";

export const BioSection = () => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-y-6 w-full max-w-[50rem] py-6 lg:py-10 pl-6 lg:pl-10 pr-6 lg:pr-36 bg-[var(--color-bg-secondary)] mx-auto rounded-xxl relative"
      )}
    >
      <div
        className={classNames(
          "relative lg:absolute mx-auto -mt-28 lg:mt-0 lg:-top-16 lg:-right-16 mb-4 w-64 h-64 max-w-full shadow-lg rounded-full bg-[var(--color-bg-secondary)] overflow-hidden border-[6px] border-[var(--color-bg-secondary)]"
        )}
      >
        <Image
          src="/bio-image.png"
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
        <Text color="highlight" as="h4" isMono>
          Product Designer & Frontend Engineer
        </Text>
      </div>
      <Text color="secondary">
        Over the last decade, I have had the pleasure of refining my methodology
        for designing and building reliable, scalable, and repeatable user
        interfaces. At the center of this is the intersection of business goals
        with the needs and expectations of the user. On the outside is an
        elegant, accessible, and robust user experience. If there’s anything I
        can help with, please get in touch!
      </Text>
      <Button
        href="https://drew61.typeform.com/to/dysVVM?typeform-source=dkos.co"
        label="Send me a message"
        rightAccessory="send"
        variant="primary"
      />
    </div>
  );
};
