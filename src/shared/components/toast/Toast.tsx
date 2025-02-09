"use client";

import { ToastProps } from "./core/types";
import { useToastFade } from "./core/hooks";

export const Toast = ({
  point,
  position = "bottom",
  isMounted = false,
}: ToastProps) => {
  const { isFading } = useToastFade(isMounted);

  const text = point
    ? `🎉 ${point}포인트를 획득했습니다!`
    : "🚨 집중이 중단되었습니다.";

  const style = {
    color: point
      ? "bg-custom-color-card-green text-custom-color-text-green"
      : "bg-custom-color-card-pink text-custom-color-red-200",
    position: {
      top: "top-30 left-1/2 -translate-x-1/2",
      bottom: "bottom-30 left-1/2 -translate-x-1/2",
    },
    opacity: isFading ? "opacity-100" : "opacity-0",
  };

  return (
    isMounted && (
      <div
        className={`
        fixed ${style.position[position]}
        inline-block text-align-center px-[18px] py-[14px]
        rounded-[12px] text-[14px] md:text-[16px] font-medium
        transition-opacity duration-1000 ease-out
        ${style.color} ${style.opacity}`}
      >
        {text}
      </div>
    )
  );
};

export default Toast;
