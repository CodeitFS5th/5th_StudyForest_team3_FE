import { useRef } from "react";

type Props = {
  isActive: boolean;
  minutesValue: string;
  secondsValue: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "minutes" | "seconds"
  ) => void;
};

export default function TimerInput({
  isActive,
  minutesValue,
  secondsValue,
  onChange,
}: Props) {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key, currentTarget } = e;
    const cursorPos = currentTarget.selectionStart; // 커서 위치

    if (key === "ArrowRight" && cursorPos === currentTarget.value.length) {
      // 오른쪽 끝에서 → 누르면 다음 인풋으로 이동
      inputRef2.current?.focus();
    } else if (key === "ArrowLeft" && cursorPos === 0) {
      // 왼쪽 끝에서 ← 누르면 이전 인풋으로 이동
      inputRef1.current?.focus();
    }
  };

  if (!isActive) return null;

  return (
    <div className="flex justify-center items-center pb-[17px] md:pb-[50px]">
      <input
        ref={inputRef1}
        value={minutesValue}
        onChange={(e) => onChange(e, "minutes")}
        onKeyDown={handleKeyDown}
        className="w-[3ch] border-0 outline-none bg-transparent p-0 m-0 text-right text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-custom-color-black-400"
      />
      <span className="text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-custom-color-black-400">
        :
      </span>
      <input
        ref={inputRef2}
        value={secondsValue}
        onChange={(e) => onChange(e, "seconds")}
        onKeyDown={handleKeyDown}
        className="w-[3ch] border-0 outline-none bg-transparent p-0 m-0 text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-custom-color-black-400"
      />
    </div>
  );
}
