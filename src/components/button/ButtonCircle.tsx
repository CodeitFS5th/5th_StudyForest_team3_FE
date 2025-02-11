import Image from "next/image";
import PauseIcon from "@/assets/images/icon/ic_pause.png";
import ReStartIcon from "@/assets/images/icon/ic_restart.png";
import Button, { ButtonShape, BGColor, ButtonProps } from "./Button";
import { ButtonHTMLAttributes } from "react";

const IMAGE = {
  PAUSE: { ICON: PauseIcon, ALT: "정지 버튼" },
  RESTART: { ICON: ReStartIcon, ALT: "재시작 버튼" },
};

function ButtonCircle({
  bgColor,
  children,
  is3d,
  ...props
}: Omit<ButtonProps, "shape">) {
  return (
    <Button shape={ButtonShape.CIRCLE} bgColor={bgColor} is3d={is3d} {...props}>
      {children}
    </Button>
  );
}

export function ButtonPause({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="w-[48px] md:w-[64px]">
      <ButtonCircle bgColor={BGColor.DARK_GREEN} is3d {...props}>
        <Image
          src={IMAGE.PAUSE.ICON}
          alt={IMAGE.PAUSE.ALT}
          className="object-contain w-[26.4px] md:w-[35.2px] xl:w-[35.2px]"
        />
      </ButtonCircle>
    </div>
  );
}

export function ButtonPauseDisabled({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="w-[48px] md:w-[64px]">
      <ButtonCircle bgColor={BGColor.DARK_GRAY} disabled {...props}>
        <Image
          src={IMAGE.PAUSE.ICON}
          alt={IMAGE.PAUSE.ALT}
          className="object-contain w-[26.4px] md:w-[35.2px] xl:w-[35.2px]"
        />
      </ButtonCircle>
    </div>
  );
}

export function ButtonRestart({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonCircle bgColor={BGColor.GREEN} is3d {...props}>
      <Image
        src={IMAGE.RESTART.ICON}
        alt={IMAGE.RESTART.ALT}
        className="object-contain w-[26.4px] md:w-[35.2px] xl:w-[35.2px]"
      />
    </ButtonCircle>
  );
}

export function ButtonRestartDisabled({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonCircle bgColor={BGColor.GREEN} disabled {...props}>
      <Image
        src={IMAGE.RESTART.ICON}
        alt={IMAGE.RESTART.ALT}
        className="object-contain w-[26.4px] md:w-[35.2px] xl:w-[35.2px]"
      />
    </ButtonCircle>
  );
}
