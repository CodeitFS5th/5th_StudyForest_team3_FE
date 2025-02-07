import Link from "next/link";

interface ButtonProps {
  type: "check" | "make" | "move" | "cancel";
  label: string;
  path?: string;
  onClick?: () => void;
}

export function ButtonRectangle({ type, label, path, onClick }: ButtonProps) {
  let bgColor: string;
  let shadowColor: string;

  bgColor =
    type === "cancel" ? "bg-custom-color-black-200" : "bg-custom-color-brand";
  shadowColor =
    type === "cancel"
      ? "drop-shadow-[0_3px_bg-custom-color-black-300]"
      : "drop-shadow-[0_3px_bg-custom-color-text-green]";

  if (type === "move") {
    <Link
      href={`'/${path}'`}
      className={`flex justify-center w-[600px] h-[58px] pt-[10px] pb-[10px] pl-[78px] pr-[105px] rounded-xl ${bgColor} ${shadowColor} max-sm:w-[48px] max-sm:p-[11px]`}
    >
      <p className="text-[18px] text-white">{label}</p>
    </Link>;
  } else {
    return (
      <button
        className={`flex justify-center w-[600px] h-[58px] pt-[10px] pb-[10px] pl-[78px] pr-[105px] rounded-xl ${bgColor} ${shadowColor}  max-sm:w-[48px] max-sm:p-[11px]`}
        onClick={onClick}
      >
        <p className="text-[18px] text-white ">{label}</p>
      </button>
    );
  }
}
