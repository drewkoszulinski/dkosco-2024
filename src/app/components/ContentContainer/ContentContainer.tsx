import classNames from "classnames";

interface ContenContainerProps {
  children: any;
}

export const ContentContainer = (props: ContenContainerProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-y-14 w-full items-center max-w-[56.25rem] px-4"
      )}
    >
      {props.children}
    </div>
  );
};
