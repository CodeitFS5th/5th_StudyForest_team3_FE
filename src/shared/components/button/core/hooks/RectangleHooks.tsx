import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export enum Category {
  Check = "check",
  Make = "make",
  Move = "move",
  Cancel = "cancel",
}

export enum Status {
  Done = "DONE",
  UnDone = "UNDONE",
}

interface BaseButtonProps {
  category: Category;
  label: string;
}

interface LinkProps extends BaseButtonProps {
  path?: string;
}

interface ListProps extends BaseButtonProps {
  status: Status;
}

type ButtonProps = LinkProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonListProps = ListProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonRectangle({
  category,
  label,
  path,
  ...props // 다른 속성들 받기
}: ButtonProps) {
  const shadowColorMap = {
    [Category.Check]: "",
    [Category.Move]: "shadow-[0_3px] shadow-custom-color-text-green",
    [Category.Make]: "shadow-[0_3px] shadow-custom-color-text-green",
    [Category.Cancel]: "shadow-[0_3px] shadow-custom-color-black-300",
  };

  const shadowColor = shadowColorMap[category];

  if (category === Category.Move) {
    return (
      <Link href={`"${path}"`} legacyBehavior>
        <a
          className={`flex justify-center items-center w-[312px] h-[58px] md:w-[600px] xl:w-[600px] rounded-xl bg-custom-color-brand shadow-[0_3px] ${shadowColor} font-jeju`}
          {...props}
        >
          <p className="text-[18px] text-white">{label}</p>
        </a>
      </Link>
    );
  } else {
    return (
      <button
        className={`flex justify-center items-center w-[312px] h-[58px] md:w-[600px] xl:w-[600px] rounded-xl bg-custom-color-brand ${shadowColor} font-jeju`}
        {...props}
      >
        <p className="text-[18px] text-white ">{label}</p>
      </button>
    );
  }
}

export function ButtonRectangleList({
  category,
  label,
  status = Status.UnDone,
  ...props
}: ButtonListProps) {
  const buttonStyles = {
    bgColor:
      status === "UNDONE"
        ? "bg-custom-color-black-100"
        : "bg-custom-color-brand",
    textColor:
      status === "UNDONE" ? "text-custom-color-black-300" : "text-white",
  };

  return (
    <button
      className={`flex justify-center items-center w-[280px] h-[58px] md:w-[400px] xl:w-[400px] rounded-xl ${buttonStyles.bgColor}`}
      {...props}
    >
      <p className={`text-[18px] ${buttonStyles.textColor} `}>{label}</p>
    </button>
  );
}

export function ButtonRectangleModal({
  category,
  label,
  ...props
}: ButtonProps) {
  const bgColorMap = {
    [Category.Check]: "bg-custom-color-brand",
    [Category.Move]: "bg-custom-color-brand",
    [Category.Make]: "bg-custom-color-brand",
    [Category.Cancel]: "bg-custom-color-black-200",
  };

  const bgColor = bgColorMap[category];

  const shadowColorMap = {
    [Category.Check]: "shadow-[0_3px] shadow-custom-color-text-green",
    [Category.Move]: "shadow-[0_3px] shadow-custom-color-text-green",
    [Category.Make]: "shadow-[0_3px] shadow-custom-color-text-green",
    [Category.Cancel]: "shadow-[0_3px] shadow-custom-color-black-300",
  };

  const shadowColor = shadowColorMap[category];

  return (
    <button
      className={`flex justify-center items-center w-[140px] h-[58px] md:w-[288px] xl:w-[288px] rounded-xl ${bgColor} ${shadowColor} font-jeju`}
      {...props}
    >
      <p className="text-[18px] text-white ">{label}</p>
    </button>
  );
}
