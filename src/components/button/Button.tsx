import { ReactNode, ButtonHTMLAttributes } from "react";

export enum ButtonShape {
  CIRCLE = "circle",
  RECTANGLE = "rectangle",
  ROUND = "round",
}

export enum BGColor {
  GREEN = "green",
  DARK_GREEN = "darkgreen",
  GRAY = "gray",
  DARK_GRAY = "darkGray",
}

//
const buttonShapeStyle = {
  [ButtonShape.CIRCLE]: "rounded-full p-[10px] md:p-[13px]",
  [ButtonShape.RECTANGLE]: "rounded-xl",
  [ButtonShape.ROUND]: "rounded-3xl",
};

const buttonBGColorStyle = {
  [BGColor.GREEN]: "bg-custom-color-brand",
  [BGColor.DARK_GREEN]: "bg-custom-color-text-green",
  [BGColor.GRAY]: "bg-custom-color-black-200",
  [BGColor.DARK_GRAY]: "bg-custom-color-black-300",
};

const buttonShadowColorStyle = {
  [BGColor.GREEN]: "shadow-custom-color-text-green",
  [BGColor.DARK_GREEN]: "shadow-custom-color-brand",
  [BGColor.GRAY]: "shadow-custom-color-black-300",
  [BGColor.DARK_GRAY]: "shadow-custom-color-black-400",
};

//extends 타입에서는 제한한다.
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape: ButtonShape;
  bgColor: BGColor;
  is3d?: boolean;
  children: ReactNode;
}

// 버튼을 모양 배경색 3d 여부에 따라 다르게 추상화
export default function Button({
  shape,
  bgColor,
  is3d,
  children,
  ...props // 맨 마지막에 위치해야 함 (type, disabled, onClick 등의 props를 받기 위함)
}: ButtonProps) {
  const baseStyle = "w-full py-[12px] md:py-[14px] cursor-pointer";
  const bgColorStyle = buttonBGColorStyle[bgColor];
  const shapeStyle = buttonShapeStyle[shape];
  const shadowStyle = is3d
    ? `shadow-[0_3px] ${buttonShadowColorStyle[bgColor]}`
    : "shadow-none";

  return (
    <button
      className={`${baseStyle} ${bgColorStyle} ${shapeStyle} ${shadowStyle}`}
      {...props}
    >
      {children}
    </button>
  );
}
