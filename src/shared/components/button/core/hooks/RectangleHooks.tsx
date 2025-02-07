import Link from "next/link";

export enum Category {
  Check = "check",
  Make = "make",
  Move = "move",
  Cancel = "cancel",
}

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  category: Category;
  label: string;
  path?: string;
  onClick?: () => void;
}

export function ButtonRectangle({
  type,
  category,
  label,
  path,
  onClick,
}: ButtonProps) {
  let bgColor: string;
  let shadowColor: string;

  bgColor =
    category === Category.Cancel
      ? "bg-custom-color-black-200"
      : "bg-custom-color-brand";
  shadowColor =
    category === Category.Cancel
      ? "drop-shadow-[0_3px_bg-custom-color-black-300]"
      : "drop-shadow-[0_3px_bg-custom-color-text-green]";

  if (category === Category.Move) {
    return (
      <Link
        href={`"/${path}"`}
        className={`flex justify-center w-[600px] h-[58px] pt-[10px] pb-[10px] pl-[78px] pr-[105px] rounded-xl ${bgColor} ${shadowColor} max-sm:w-[48px] max-sm:p-[11px]`}
      >
        <p className="text-[18px] text-white">{label}</p>
      </Link>
    );
  } else {
    return (
      <button
        className={`flex justify-center w-[600px] h-[58px] pt-[10px] pb-[10px] pl-[78px] pr-[105px] rounded-xl ${bgColor} ${shadowColor}  max-sm:w-[48px] max-sm:p-[11px]`}
        onClick={onClick}
        type={type}
      >
        <p className="text-[18px] text-white ">{label}</p>
      </button>
    );
  }
}
