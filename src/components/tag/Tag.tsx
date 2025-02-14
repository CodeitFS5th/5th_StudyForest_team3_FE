import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  theme: "black" | "white";
};

const themeStyle = {
  black: {
    bgColor: "bg-[rgba(0,0,0,0.5)]",
    textColor: "text-white",
    borderColor: "",
  },
  white: {
    bgColor: "bg-[rgba(255,255,255,0.3)]",
    textColor: "text-custom-color-black-400",
    borderColor: "border border-[rgba(0,0,0,0.1))]",
  },
};

export default function Tag({ children, theme }: Props) {
  const style = {
    bgColor: themeStyle[theme].bgColor,
    textColor: themeStyle[theme].textColor,
    borderColor: themeStyle[theme].borderColor,
  };

  return (
    <div
      className={`inline-flex items-center justify-center gap-[5px] px-[10px] py-[6px] rounded-[30px] xl:right-[30px] ${style.bgColor} ${style.textColor} text-[16px] ${style.borderColor}`}
    >
      {children}
    </div>
  );
}
