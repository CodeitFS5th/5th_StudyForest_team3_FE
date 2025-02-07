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

// layer, make, move
export function ButtonRectangle({
  type,
  category,
  label,
  path,
  onClick,
}: ButtonProps) {
  let shadowColor: string;

  shadowColor =
    category === Category.Check
      ? ""
      : "shadow-[0_3px] shadow-custom-color-text-green";

  if (category === Category.Move) {
    return (
      <Link
        href={`"/${path}"`}
        className={`flex justify-center items-center w-[312px] h-[58px] md:w-[600px] xl:w-[600px] rounded-xl bg-custom-color-brand shadow-[0_3px] shadow-custom-color-text-green font-jeju`}
      >
        <p className="text-[18px] text-white">{label}</p>
      </Link>
    );
  } else {
    return (
      <button
        className={`flex justify-center w-[312px] h-[58px] md:w-[600px] xl:w-[600px] rounded-xl bg-custom-color-brand ${shadowColor} font-jeju`}
        onClick={onClick}
        type={type}
      >
        <p className="text-[18px] text-white ">{label}</p>
      </button>
    );
  }
}

export function ButtonRectangleModal({
  type,
  category,
  label,
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
      ? "shadow-[0_3px] shadow-custom-color-black-300"
      : "shadow-[0_3px] shadow-custom-color-text-green";

  return (
    <button
      className={`flex justify-center w-[140px] h-[58px] md:w-[288px] xl:w-[288px] rounded-xl ${bgColor} ${shadowColor} font-jeju`}
      onClick={onClick}
      type={type}
    >
      <p className="text-[18px] text-white ">{label}</p>
    </button>
  );
}
