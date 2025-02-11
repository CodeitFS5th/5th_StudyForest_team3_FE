import { ReactNode } from "react";
import { BGColor } from "./Button";

const textShadowColorStyle = {
  [BGColor.GREEN]: "bg-custom-color-text-green",
  [BGColor.DARK_GREEN]: "bg-custom-color-brand",
  [BGColor.GRAY]: "bg-custom-color-black-300",
  [BGColor.DARK_GRAY]: "bg-custom-color-black-400",
};

interface LabelProps {
  children: ReactNode;
  bgColor: BGColor;
}

export function Label({ bgColor, children }: LabelProps) {
  const shadowStyle = `shadow-[3px_0] ${textShadowColorStyle[bgColor]}`;

  return (
    <p className={`text-[18px] text-white ${shadowStyle} font-jeju`}>
      {children}
    </p>
  );
}
