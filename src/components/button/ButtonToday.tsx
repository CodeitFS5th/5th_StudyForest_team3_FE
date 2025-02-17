import Image from "next/image";
import ArrowIcon from "@/assets/images/icon/ic_arrow_right.png";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { StudyIdInHabit } from "@/types";
import Link from "next/link";

const IMAGE = {
  ARROW: { ICON: ArrowIcon, ALT: "방향 버튼" },
};

interface ButtonTodayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ButtonToday({ children, ...props }: ButtonTodayProps) {
  return (
    <button
      className="rounded-xl border border-custom-color-black-200 py-[8px] md:py-[12px] pl-3 pr-1 md:pl-6 md:pr-4 cursor-pointer"
      {...props}
    >
      <div className="flex items-center justify-center">
        <p className="text-[16px] text-custom-color-black-300">{children}</p>
        <Image
          src={IMAGE.ARROW.ICON}
          alt={IMAGE.ARROW.ALT}
          width={24}
          height={24}
        />
      </div>
    </button>
  );
}

export function ButtonTodayHabit({ studyId }: StudyIdInHabit) {
  return (
    <Link href={`/study/${studyId}/habit`}>
      <ButtonToday>오늘의 습관</ButtonToday>
    </Link>
  );
}

export function ButtonTodayFocus({ studyId }: StudyIdInHabit) {
  return (
    <Link href={`/study/${studyId}/focus`}>
      <ButtonToday>오늘의 집중</ButtonToday>
    </Link>
  );
}

export function ButtonStudyHome({ studyId }: StudyIdInHabit) {
  return (
    <Link href={`/study/${studyId}/`}>
      <ButtonToday>홈</ButtonToday>
    </Link>
  );
}
