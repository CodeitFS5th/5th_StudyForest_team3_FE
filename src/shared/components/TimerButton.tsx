"use client";

import React from "react";
import Image from "next/image";
import playIcon from "@/assets/icons/ic_play.png";
import stopIcon from "@/assets/icons/ic_stop.png";

type TimerButtonMode = "start" | "stop";

interface TimerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: TimerButtonMode;
  isActive: boolean;
  onClick?: () => void;
}

const TimerButton: React.FC<TimerButtonProps> = ({
  mode,
  isActive,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        // 기본 스타일
        flex items-center justify-between
        w-[140px] h-[48px]
        pl-[20px] pr-[28px]
        pt-[11px] pb-[13px]
        rounded-[30.48px]
        
        // 태블릿 스타일
        md:w-[333px] md:h-[64px]
        md:pl-[78px] md:pr-[105px]
        md:pt-[10px] md:pb-[11px]
        md:rounded-[50px]
        
        // isActive 스타일 - 색상 및 그림자
        ${
          isActive
            ? "bg-[#99C08E] shadow-[inset_0_-4px_0_#578246]"
            : "bg-[#818181] shadow-[inset_0_-4px_0_#414141]"
        }
        `}
      {...props}
      disabled={!isActive}
    >
      <Image
        src={mode === "start" ? playIcon : stopIcon}
        alt={mode}
        className="w-[24px] h-[24px] md:w-[44px] md:h-[44px]"
      />
      <p className="text-[#FFFFFF] font-[800] text-[18px] md:text-[28px]">
        {mode[0].toUpperCase() + mode.slice(1)}!
      </p>
    </button>
  );
};

export default TimerButton;
