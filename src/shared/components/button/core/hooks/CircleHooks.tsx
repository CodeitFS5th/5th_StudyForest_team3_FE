import Image from "next/image";
import PauseIcon from "../../../../../assets/images/icon/ic_pause.png";
import ReStartIcon from "../../../../../assets/images/icon/ic_restart.png";

export enum Category {
  Pause = "pause",
  Restart = "restart",
}

interface ButtonProps {
  category: Category;
  disabled?: boolean;
  [key: string]: any;
}

export function ButtonCircle({
  category,
  disabled = false,
  ...props
}: ButtonProps) {
  const buttonStyles = {
    bgColor: disabled
      ? "bg-custom-color-black-300"
      : category === Category.Pause
      ? "bg-custom-color-text-green"
      : "bg-custom-color-brand",

    shadowColor: disabled
      ? ""
      : category === Category.Pause
      ? "shadow-[0_3px] shadow-custom-color-brand"
      : "shadow-[0_3px] shadow-custom-color-text-green",

    imageSrc: category === Category.Pause ? PauseIcon : ReStartIcon,
    altText: category === Category.Pause ? "정지 버튼" : "재시작 버튼",
  };

  return (
    <button
      className={`flex justify-center px-[11px] py-[9px] md:px-[13.4px] md:pt-[13.4px] md:pb-[12.4px] xl:px-[13.4px] xl:pt-[13.4px] xl:pb-[12.4px] rounded-full ${buttonStyles.bgColor} ${buttonStyles.shadowColor} `}
      disabled={disabled}
      {...props}
    >
      <Image
        src={buttonStyles.imageSrc}
        alt={buttonStyles.altText}
        className="object-contain w-[26.4px] md:w-[35.2px] xl:w-[35.2px]"
      />
    </button>
  );
}
