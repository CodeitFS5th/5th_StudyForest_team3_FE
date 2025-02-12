import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
}

export function Label({ children }: LabelProps) {
  return (
    <p
      className={`text-[18px] text-white inline-block [text-shadow:0px_-2px_0px_rgba(0,0,0,0.3)] font-jeju`}
    >
      {children}
    </p>
  );
}
