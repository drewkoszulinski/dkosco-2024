import styles from "./Button.module.css";
import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { Icon, IconNameProps } from "../Icon";
import { roboto_mono } from "@/app/fonts";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  isExternal?: boolean;
  target?: "_blank" | "_self";
  isDisabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: any) => void;
  href?: string;
  leftAccessory?: IconNameProps;
  rightAccessory?: IconNameProps;
}

export const Button = (props: ButtonProps) => {
  const { variant = "primary", label, onClick, isDisabled, href } = props;

  const buttonClasses = classNames(
    "transition-sm min-w-max max-w-max rounded-md py-3 px-4",
    styles["button"],
    roboto_mono.className,
    {
      [styles["button-primary"]]: variant === "primary" && !isDisabled,
      [styles["button-secondary"]]: variant === "secondary" && !isDisabled,
    }
  );

  const buttonInner = (
    <>
      <div
        className={classNames(
          "inline-flex gap-3 justify-center text-center items-center text-[1rem] leading-[1.5rem] md:text-md"
        )}
      >
        {props.leftAccessory ? (
          <Icon name={props.leftAccessory} size={20} />
        ) : undefined}
        {props.label}
        {props.rightAccessory ? (
          <Icon name={props.rightAccessory} size={20} />
        ) : undefined}
      </div>
    </>
  );

  if (href) {
    if (!props.isExternal) {
      return (
        <Link href={href} className={buttonClasses} target={props.target}>
          {buttonInner}
        </Link>
      );
    } else {
      return (
        <a href={href} className={buttonClasses} target={props.target}>
          {buttonInner}
        </a>
      );
    }
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick ? onClick : undefined}
      tabIndex={isDisabled ? -1 : 0}
      disabled={isDisabled}
      aria-label={label}
    >
      {buttonInner}
    </button>
  );
};
