import Image from "next/image";
import StartIcon from "../../../../../assets/images/icon/ic_play.png";
import StopIcon from "../../../../../assets/images/icon/ic_stop.png";
import { ButtonHTMLAttributes } from "react";

export enum Category {
  Start = "start",
  Stop = "stop",
}

interface BaseButtonProps {
  category: Category;
  disabled?: boolean;
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonRound({
  category,
  disabled = false,
  ...props
}: ButtonProps) {
  const buttonStyles = {
    bgColor: disabled ? "bg-custom-color-black-400" : "bg-custom-color-brand",
    shadowColor: disabled
      ? ""
      : "shadow-[0_3px] shadow-custom-color-text-green",
    imageSrc: category === Category.Start ? StartIcon : StopIcon,
    altText: category === Category.Start ? "시작 버튼" : "정지 버튼",
    buttonText: category === Category.Start ? "Start!" : "Stop!",
  };

  return (
    <button
      className={`flex justify-center items-center pt-[10px] pb-[7px] pl-[20px] pr-[28px] gap-[5px] md:gap-[16px] xl:gap-[16px] md:pl-[78px]  md:pr-[105px] xl:pl-[78px] xl:pr-[105px] rounded-3xl ${buttonStyles.bgColor} ${buttonStyles.shadowColor}`}
      disabled={disabled}
      {...props}
    >
      <Image
        src={buttonStyles.imageSrc}
        alt={buttonStyles.altText}
        className="object-contain w-[28px] md:w-[44px] xl:w-[44px]"
      />
      <p className="text-[18px] md:text-[28px] xl:text-[28px] text-white ">
        {buttonStyles.buttonText}
      </p>
    </button>
  );
}
