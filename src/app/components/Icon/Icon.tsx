import classNames from "classnames";
import { IconNameProps } from ".";
import { Icons } from "./IconList";

interface IconProps {
  name: IconNameProps;
  size?: 16 | 20 | 40;
  color?: "primary" | "secondary" | "highlight";
}

export const Icon = (props: IconProps) => {
  const { name, size = 16, color = "inherit" } = props;

  return (
    <div
      className={classNames({
        "w-4 h-4 min-w-[1rem]": size === 16,
        "w-5 h-5 min-w-[1.25rem]": size === 20,
        "w-10 h-10 min-w-[2.5rem]": size === 40,

        "text-[var(--color-text-primary)]": color === "primary",
        "text-[var(--color-text-secondary)]": color === "secondary",
        "text-[var(--color-text-highlight)]": color === "highlight",
      })}
    >
      {name ? Icons[name.toString()] : "rocket"}
    </div>
  );
};
