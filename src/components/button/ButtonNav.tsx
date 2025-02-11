import Image from "next/image";
import ArrowIcon from "@/assets/images/icon/ic_arrow_right.png";
import { ButtonHTMLAttributes, ReactNode } from "react";

const IMAGE = {
  ARROW: { ICON: ArrowIcon, ALT: "방향 버튼" },
};

interface ButtonNavProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function ButtonNav({ children, ...props }: ButtonNavProps) {
  return (
    <button
      className="rounded-xl border border-custom-color-black-200  py-[8px] md:py-[12px] "
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonHome({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonNav {...props}>
      <div className="flex justify-center items-center">
        <p className="text-[16px] text-custom-color-black-300">홈</p>
        <Image
          src={IMAGE.ARROW.ICON}
          alt={IMAGE.ARROW.ALT}
          className="w-[15px] md:w-[24px]"
        />
      </div>
    </ButtonNav>
  );
}

export function ButtonHabit({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonNav {...props}>
      <div className="flex justify-center items-center">
        <p className="text-[16px] text-custom-color-black-300">오늘의 습관</p>
        <Image
          src={IMAGE.ARROW.ICON}
          alt={IMAGE.ARROW.ALT}
          className="w-[15px] md:w-[24px]"
        />
      </div>
    </ButtonNav>
  );
}

export function ButtonFocus({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonNav {...props}>
      <div className="flex justify-center items-center">
        <p className="text-[16px] text-custom-color-black-300">오늘의 집중</p>
        <Image
          src={IMAGE.ARROW.ICON}
          alt={IMAGE.ARROW.ALT}
          className="w-[15px] md:w-[24px]"
        />
      </div>
    </ButtonNav>
  );
}
