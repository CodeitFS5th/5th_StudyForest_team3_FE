import Link from "next/link";
import Image from "next/image";
import Arrow from "../../../../../assets/images/icon/ic_arrow_right.png";

export enum Category {
  Today = "today",
  Home = "home",
}

interface ButtonProps {
  category: Category;
  path: string;
  pathName: string;
}

export function ButtonLink({ category, path, pathName }: ButtonProps) {
  let width: string;
  let mediaWidth: string;

  width = category === Category.Today ? "w-[144px]" : "w-[82px]";
  mediaWidth = category === Category.Today ? "w-[120px]" : "w-[58px]";

  return (
    //모바일 w-58 h-40
    <div
      className={`flex ${width} h-[48px] pr-[16px] pl-[24px] pt-[12px] pb-[12px] rounded-xl border border-custom-color-black-200   overflow-hidden`}
    >
      <Link href={`'/${path}'`} className="flex justify-between items-center ">
        <p className="text-[16px] text-custom-color-black-300 ">{pathName}</p>
        <Image
          src={Arrow}
          alt="Arrow Img"
          width={20}
          height={11}
          className="object-contain"
        />
      </Link>
    </div>
  );
}
