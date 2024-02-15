import classNames from "classnames";
import styles from "./HeroAnimation.module.css";

export const HeroAnimation = () => {
  return (
    <div className={classNames(styles["animation-wrapper"])}>
      <div className={classNames(styles["shape"], styles["shape-1"])}></div>
      <div className={classNames(styles["shape"], styles["shape-2"])}></div>
      <div className={classNames(styles["shape"], styles["shape-3"])}></div>
      <div className={classNames(styles["shape"], styles["shape-4"])}></div>
      <div className={classNames(styles["shape"], styles["shape-5a"])}></div>
      <div className={classNames(styles["shape"], styles["shape-5b"])}></div>
      <div className={classNames(styles["shape"], styles["shape-6"])}></div>
      <div className={classNames(styles["shape"], styles["shape-7"])}></div>
      <div className={classNames(styles["shape"], styles["shape-8"])}></div>
      <div className={classNames(styles["shape"], styles["shape-9"])}></div>
      <div className={classNames(styles["shape"], styles["shape-10"])}></div>
      <div className={classNames(styles["shape"], styles["shape-11"])}></div>
      <div className={classNames(styles["shape"], styles["shape-12"])}></div>
      <div className={classNames(styles["shape"], styles["shape-13"])}></div>
      <div className={classNames(styles["shape"], styles["shape-14"])}></div>
      <div className={classNames(styles["shape"], styles["shape-15"])}></div>
      <div className={classNames(styles["shape"], styles["shape-16"])}></div>
      <div className={classNames(styles["shape"], styles["shape-17"])}></div>
    </div>
  );
};
