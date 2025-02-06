"use client";

import { ToastProps } from "@/shared/components/core/types";
import { useToastFade } from "@/shared/components/core/hooks";
export const Toast = ({ point, position = "bottom" }: ToastProps) => {
  const { isVisible } = useToastFade();

  const text: string = point
    ? `🎉 ${point}포인트를 획득했습니다!`
    : "🚨 집중이 중단되었습니다.";

  const style = {
    color: point
      ? "bg-[var(--color-custom-color-card-green)] text-[var(--color-custom-color-text-green)]"
      : "bg-[var(--color-custom-color-card-pink)] text-[var(--color-custom-color-red-200)]",
    position: {
      top: "top-30 left-1/2 -translate-x-1/2",
      bottom: "bottom-30 left-1/2 -translate-x-1/2",
    },
    opacity: isVisible ? "opacity-100" : "opacity-0",
  };

  return (
    <div
      className={`
        fixed ${style.position[position]}
        flex items-center justify-center inline-block px-[18px] py-[14px]
        rounded-[12px] text-[14px] md:text-[16px] font-medium
        transition-opacity duration-1000 ease-out
        ${style.color} ${style.opacity}`}
    >
      {text}
    </div>
  );
};

export default Toast;
