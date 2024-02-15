import classNames from "classnames";
import { Text } from "../Text";
import { Icon } from "../Icon";

interface HomepageCardProps {
  iconName: "design" | "atom" | "code";
  cardTitle: string;
  cardBody: string;
}

export const HomepageCard = (props: HomepageCardProps) => {
  return (
    <div
      className={classNames(
        "flex gap-x-4 bg-[var(--color-bg-secondary)] rounded-xl p-4"
      )}
    >
      <Icon name={props.iconName} color="highlight" size={40} />
      <div className={classNames("flex flex-col w-full")}>
        <Text size="lg">{props.cardTitle}</Text>
        <Text color="secondary" isMono>
          {props.cardBody}
        </Text>
      </div>
    </div>
  );
};
