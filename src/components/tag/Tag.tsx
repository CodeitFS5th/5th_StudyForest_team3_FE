import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  theme: "black" | "white" | "gray";
}

const themeStyle = {
  black: {
    bgColor: "bg-[rgba(0,0,0,0.5)]",
    textColor: "text-white",
    borderColor: "",
  },
  white: {
    bgColor: "bg-[rgba(255,255,255,0.3)]",
    textColor: "text-custom-color-black-400",
    borderColor: "border border-[rgba(0,0,0,0.1)]",
  },
  gray: {
    bgColor: "bg-[rgba(0,0,0,0.3)]",
    textColor: "text-white",
    borderColor: "",
  },
};

export default function Tag({ children, theme, ...props }: Props) {
  const hasProps = Object.keys(props).length > 0;

  const style = {
    bgColor: themeStyle[theme].bgColor,
    textColor: themeStyle[theme].textColor,
    borderColor: themeStyle[theme].borderColor,
    cursor: hasProps ? "cursor-pointer" : "",
  };

  return (
    <div
      {...props}
      className={`inline-flex w-fit items-center justify-center gap-[5px] px-[10px] py-[6px] rounded-[30px] xl:right-[30px] ${style.bgColor} ${style.textColor} text-[16px] ${style.borderColor} ${style.cursor}`}
    >
      {children}
    </div>
  );
}
