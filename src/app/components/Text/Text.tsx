import classNames from "classnames";
import { roboto_mono } from "../../fonts";

type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "span";

interface TextProps {
  size?: "md" | "lg" | "xl";
  children?: React.ReactNode;
  as?: TextTag;
  color?: "primary" | "secondary" | "highlight";
  isMono?: boolean;
}

export const Text = (props: TextProps) => {
  const { as = "p", color = "primary", size = "md" } = props;
  const Tag: TextTag = as;

  return (
    <Tag
      className={classNames("max-w-full", {
        "text-xl": size === "xl",
        "text-lg": size === "lg",
        "text-md font-medium": size === "md",
        "font-bold": size === "xl" && !props.isMono,
        "font-semibold": size === "lg" && !props.isMono,

        "text-[var(--color-text-primary)]": color === "primary",
        "text-[var(--color-text-secondary)]": color === "secondary",
        "text-[var(--color-text-highlight)]": color === "highlight",

        "font-reg": props.isMono === true,
        [roboto_mono.className]: props.isMono === true,
      })}
    >
      {props.children}
    </Tag>
  );
};
