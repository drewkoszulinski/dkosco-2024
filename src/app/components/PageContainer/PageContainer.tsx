import classNames from "classnames";

interface PageContainerProps {
  children: any;
}

export const PageContainer = (props: PageContainerProps) => {
  return (
    <div
      className={classNames("flex flex-col gap-y-14 items-center w-full py-24")}
    >
      {props.children}
    </div>
  );
};
