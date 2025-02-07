import Image from "next/image";
import StartIcon from "../../../../../assets/images/icon/ic_play.png";
import StopIcon from "../../../../../assets/images/icon/ic_stop.png";

export enum Category {
  Start = "start",
  Stop = "stop",
}

interface ButtonProps {
  type: "button" | "submit" | "reset";
  category: Category;
  disabled?: boolean;
  onClick?: () => void;
}

export function ButtonRound({
  type,
  category,
  disabled = false,
  onClick,
}: ButtonProps) {
  let bgColor: string;
  let shadowColor: string;

  bgColor = disabled ? "bg-custom-color-black-400" : "bg-custom-color-brand";
  shadowColor = disabled
    ? ""
    : "drop-shadow-[0_3px_bg-custom-color-text-green]";

  return (
    //미디어 쿼리 w-333px h-64px 모바일만 w-140px h-48px
    //미디어 쿼리 pt-10px pb-10px pl-78px pr-105px 모바일만 pt-11px pb-13px pl-20px pr-28px
    //폰트 사이즈 text-[28px] 모바일만 text-[18px]
    <button
      className={`flex justify-center w-[333px] pt-[10px] pb-[10px] pl-[78px] pr-[105px] rounded-3xl ${bgColor} ${shadowColor}  max-sm:w-[48px] max-sm:p-[11px]`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
    >
      <Image
        src={category === Category.Start ? StartIcon : StopIcon}
        alt={category === Category.Start ? "시작 버튼" : "정지 버튼"}
        width={45}
        height={11}
        className="object-contain"
      />
      <p className="text-[28px] text-white ">
        {category === Category.Start ? "Start" : "Stop"}!
      </p>
    </button>
  );
}
