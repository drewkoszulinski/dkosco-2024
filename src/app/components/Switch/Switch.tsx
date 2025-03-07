"use client";
import classNames from "classnames";
import styles from "./Switch.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface SwitchProps {
  isPhoto: boolean;
  onClick: () => void;
}

export const Switch = (props: SwitchProps) => {
  const pathname = usePathname();
  const router = useRouter();
  // const [isPhoto, setIsPhoto] = useState(false);

  return (
    <Link href={pathname === "/photo" ? "/" : "/photo"} onClick={props.onClick}>
      <button
        className={classNames(
          "relative rounded-full transition-sm cursor-pointer w-24 p-1 lg:-ml-24",
          styles["switch-container"]
        )}
      >
        <div
          className={classNames(
            "rounded-full transition-md w-10 h-10 flex justify-items-center align-items-center relative z-50",
            styles["switch-handle"],
            {
              ["ml-12"]: props.isPhoto === true,
            }
          )}
        >
          <Image
            width={24}
            height={24}
            alt="a camera icon"
            src="/icon-camera.svg"
            className={classNames("absolute ml-2 mt-2 transition-sm", {
              ["hidden"]: !props.isPhoto,
            })}
          />
          <Image
            width={24}
            height={24}
            alt="a code icon"
            src="/icon-code.svg"
            className={classNames("absolute ml-2 mt-2 transition-sm", {
              ["hidden"]: props.isPhoto,
            })}
          />
        </div>
        <Image
          width={24}
          height={24}
          alt="a camera icon"
          src="/icon-camera.svg"
          className={classNames("absolute right-4 top-3 transition-sm z-10", {
            ["hidden"]: props.isPhoto,
            ["opacity-30"]: !props.isPhoto,
          })}
        />
        <Image
          width={24}
          height={24}
          alt="a code icon"
          src="/icon-code.svg"
          className={classNames("absolute left-4 top-3 transition-sm z-10", {
            ["hidden"]: !props.isPhoto,
            ["opacity-10"]: props.isPhoto,
          })}
        />
      </button>
    </Link>
  );
};
