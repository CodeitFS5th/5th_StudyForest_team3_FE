"use client";

import { ToastProps } from "@/shared/components/core/types";
export const Toast = ({ point }: ToastProps) => {
  const style = point
    ? "bg-[var(--color-custom-color-card-green)] text-[var(--color-custom-color-text-green)]"
    : "bg-[var(--color-custom-color-card-pink)] text-[var(--color-custom-color-red-200)]";
  const text = point
    ? `🎉 ${point}포인트를 획득했습니다!`
    : "🚨 집중이 중단되었습니다.";
  return (
    <div
      className={`flex items-center justify-center inline-block px-[18px] py-[14px] rounded-[12px] text-[14px] md:text-[16px] font-medium ${style}`}
    >
      {text}
    </div>
  );
};

export default Toast;
