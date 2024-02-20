import classNames from "classnames";
import { Text } from "../Text";
import { Button } from "../Button";

interface WorkListItemProps {
  title: string;
  subtitle: string;
  href: string;
  buttonLabel: "Case Study" | "Read More";
}

export const WorkListItem = (props: WorkListItemProps) => {
  return (
    <div
      className={classNames(
        "flex w-full items-center gap-x-6 py-6 border-b border-[var(--color-border-primary)]"
      )}
    >
      <div className={classNames("flex flex-col w-full")}>
        <div className={classNames("-mb-3")}>
          <Text size="lg" as="h4">
            {props.title}
          </Text>
        </div>
        <Text as="h5" color="highlight" isMono>
          {props.subtitle}
        </Text>
      </div>
      <Button
        label={props.buttonLabel}
        variant={props.buttonLabel === "Case Study" ? "primary" : "secondary"}
        href={props.href}
        rightAccessory="arrow-right"
      />
    </div>
  );
};
