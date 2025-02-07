import Image from "next/image";
import PauseIcon from "../../../../../assets/images/icon/ic_pause.png";
import ReStartIcon from "../../../../../assets/images/icon/ic_restart.png";

export enum Category {
  Pause = "pause",
  Restart = "restart",
}

interface ButtonProps {
  type: "button" | "submit" | "reset";
  category: Category;
  disabled?: boolean;
  onClick?: () => void;
}

export function ButtonCircle({
  type,
  category,
  disabled = false,
  onClick,
}: ButtonProps) {
  let bgColor: string;
  let shadowColor: string;

  bgColor = disabled
    ? "bg-custom-color-black-300"
    : category === Category.Pause
    ? "bg-custom-color-text-green"
    : "bg-custom-color-brand";
  shadowColor = disabled
    ? "drop-shadow-[0_3px_bg-custom-color-black-400]"
    : category === Category.Pause
    ? "drop-shadow-[0_3px_bg-custom-color-brand]"
    : "drop-shadow-[0_3px_bg-custom-color-text-green]";
  return (
    //미디어 쿼리 w-64 모바일만 w-48
    <button
      className={`flex justify-center w-[64px] p-[13.4px] rounded-full ${bgColor} ${shadowColor}  max-sm:w-[48px] max-sm:p-[11px]`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
    >
      <Image
        src={category === Category.Pause ? PauseIcon : ReStartIcon}
        alt={category === Category.Pause ? "정지 버튼" : "재시작 버튼"}
      />
    </button>
  );
}
