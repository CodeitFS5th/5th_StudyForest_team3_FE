"use client";

import { ToastProps } from "./core/types";
import { useToastFade } from "./core/hooks";

export const Toast = ({
  label,
  color = "green",
  position = "bottom",
  isMounted = false,
}: ToastProps) => {
  const { isFading } = useToastFade(isMounted);

  const style = {
    color: {
      green: "bg-custom-color-card-green text-custom-color-text-green",
      red: "bg-custom-color-card-pink text-custom-color-red-200",
    },
    emoji: {
      green: "🎉",
      red: "🚨",
    },
    position: {
      top: "top-30 left-1/2 -translate-x-1/2",
      bottom: "bottom-30 left-1/2 -translate-x-1/2",
    },
    opacity: isFading ? "opacity-100" : "opacity-0",
  };

  const toastContent = style.emoji[color] + " " + label;

  return (
    isMounted && (
      <div
        className={`
        fixed ${style.position[position]}
        inline-block text-align-center px-[18px] py-[14px]
        rounded-[12px] text-[14px] md:text-[16px] font-medium
        transition-opacity duration-1000 ease-out
        ${style.color[color]} ${style.opacity}`}
      >
        {toastContent}
      </div>
    )
  );
};

export default Toast;
