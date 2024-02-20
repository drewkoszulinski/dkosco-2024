import classNames from "classnames";
import { roboto_mono } from "../../fonts";

type TextTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "span";

interface TextProps {
  size?: "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  as?: TextTag;
  color?: "primary" | "secondary" | "tertiary" | "highlight";
  isMono?: boolean;
  useBottomMargin?: boolean;
}

export const Text = (props: TextProps) => {
  const { as = "p", color = "primary", size = "md" } = props;
  const Tag: TextTag = as;

  return (
    <Tag
      className={classNames("max-w-full", {
        "text-[2.5rem] leading-[2.625rem] md:text-xl": size === "xl",
        "text-lg mb-2": size === "lg",
        "text-[1.25rem] leading-[1.75rem] md:text-lg font-medium":
          size === "lg" && props.isMono,
        "text-[1rem] leading-[1.5rem] md:text-md font-medium": size === "md",
        "text-sm font-medium": size === "sm",
        "font-bold": size === "xl" && !props.isMono,
        "font-semibold": size === "lg" && !props.isMono,

        "mb-4": props.useBottomMargin,

        "text-[var(--color-text-primary)]": color === "primary",
        "text-[var(--color-text-secondary)]": color === "secondary",
        "text-[var(--color-text-tertiary)]": color === "tertiary",
        "text-[var(--color-text-highlight)]": color === "highlight",

        "font-reg": props.isMono === true,
        [roboto_mono.className]: props.isMono === true,
      })}
    >
      {props.children}
    </Tag>
  );
};
