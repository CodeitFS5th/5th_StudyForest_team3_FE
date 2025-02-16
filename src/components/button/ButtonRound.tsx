import Image from "next/image";
import StartIcon from "@/assets/images/icon/ic_play.png";
import StopIcon from "@/assets/images/icon/ic_stop.png";
import Button, { ButtonProps, BGColor, ButtonShape } from "./Button";
import { ButtonHTMLAttributes } from "react";

const IMAGE = {
  START: { ICON: StartIcon, ALT: "시작 버튼" },
  STOP: { ICON: StopIcon, ALT: "정지 버튼" },
};

function ButtonRound({
  bgColor,
  children,
  is3d,
  ...props
}: Omit<ButtonProps, "shape">) {
  return (
    <Button shape={ButtonShape.ROUND} bgColor={bgColor} is3d={is3d} {...props}>
      {children}
    </Button>
  );
}

export function ButtonStart({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="w-[140px] md:w-[333px]">
      <ButtonRound bgColor={BGColor.GREEN} is3d {...props}>
        <div className="flex justify-center items-center gap-5">
          <Image
            src={IMAGE.START.ICON}
            alt={IMAGE.START.ALT}
            className="object-contain w-[26px] md:w-[40px]"
          />
          <p className="text-[18px] md:text-[28px] text-white font-extrabold">
            Start!
          </p>
        </div>
      </ButtonRound>
    </div>
  );
}

export function ButtonStartDisabled({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="w-[140px] md:w-[333px]">
      <ButtonRound bgColor={BGColor.DARK_GRAY} is3d disabled {...props}>
        <div className="flex justify-center items-center gap-5">
          <Image
            src={IMAGE.START.ICON}
            alt={IMAGE.START.ALT}
            className="object-contain w-[26px] md:w-[40px]"
          />
          <p className="text-[18px] md:text-[28px] text-white font-extrabold">
            Start!
          </p>
        </div>
      </ButtonRound>
    </div>
  );
}

export function ButtonStop({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="w-[140px] md:w-[333px]">
      <ButtonRound bgColor={BGColor.GREEN} is3d {...props}>
        <div className="flex justify-center items-center gap-5">
          <Image
            src={IMAGE.STOP.ICON}
            alt={IMAGE.STOP.ALT}
            className="object-contain w-[26px] md:w-[40px]"
          />
          <p className="text-[18px] md:text-[28px] text-white font-extrabold">
            Stop!
          </p>
        </div>
      </ButtonRound>
    </div>
  );
}

export function ButtonStopDisabled({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="w-[140px] md:w-[333px]">
      <ButtonRound bgColor={BGColor.DARK_GRAY} disabled {...props}>
        <div className="flex justify-center items-center gap-5">
          <Image
            src={IMAGE.STOP.ICON}
            alt={IMAGE.STOP.ALT}
            className="object-contain w-[28px] md:w-[44px] xl:w-[44px]"
          />
          <p className="text-[18px] md:text-[28px] text-white font-extrabold">
            Stop!
          </p>
        </div>
      </ButtonRound>
    </div>
  );
}
