import classNames from "classnames";
import { Text } from "../Text";
import { Button } from "../Button";

interface PageHeadingProps {
  title: string;
  subtitle: string;
}

export const PageHeading = (props: PageHeadingProps) => {
  return (
    <div className={classNames("w-full max-w-[56.25rem] px-4 relative")}>
      <div className={classNames("mb-6 xl:absolute xl:top-2 xl:-left-28")}>
        <Button leftAccessory="arrow-left" label="Back" href="/" />
      </div>
      <Text as="h1" size="xl">
        {props.title}
      </Text>
      <Text as="h2" size="lg" color="highlight" isMono>
        {props.subtitle}
      </Text>
    </div>
  );
};
