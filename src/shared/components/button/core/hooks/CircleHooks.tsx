import Image from "next/image";
import Pause from "../../../../../assets/images/icon/ic_pause.png";
import ReStart from "../../../../../assets/images/icon/ic_restart.png";

interface ButtonProps {
  type: "pause" | "restart";
  disabled?: boolean;
  onClick?: () => void;
}

export function ButtonCircle({ type, disabled = false, onClick }: ButtonProps) {
  let bgColor: string;
  let shadowColor: string;
  let imageSrc: any;

  switch (type) {
    case "pause":
      imageSrc = Pause;
      break;
    case "restart":
      imageSrc = ReStart;
      break;
  }

  bgColor = disabled
    ? "bg-custom-color-black-300"
    : type === "pause"
    ? "bg-custom-color-text-green"
    : "bg-custom-color-brand";
  shadowColor = disabled
    ? "drop-shadow-[0_3px_bg-custom-color-black-400]"
    : type === "pause"
    ? "drop-shadow-[0_3px_bg-custom-color-brand]"
    : "drop-shadow-[0_3px_bg-custom-color-text-green]";
  return (
    //미디어 쿼리 w-64 모바일만 w-48
    <button
      className={`flex justify-center w-[64px] p-[13.4px] rounded-full ${bgColor} ${shadowColor}  max-sm:w-[48px] max-sm:p-[11px]`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <Image
        src={imageSrc}
        alt={type === "pause" ? "정지 버튼" : "재시작 버튼"}
      />
    </button>
  );
}
