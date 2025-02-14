"use client";

import Image from "next/image";
import timerImage from "@/assets/images/icon/ic_timer.png";
import { formatTime } from "../core/utils";
import { useRef } from "react";
import {
  ButtonStart,
  ButtonStop,
  ButtonStartDisabled,
} from "@/components/button/ButtonRound";
import { ButtonRestart, ButtonPause } from "@/components/button/ButtonCircle";
import { TimerProps } from "../core/type";

const styles = {
  timerColor: {
    unsuccess: "text-custom-color-red-200",
    success: "text-custom-color-black-300",
    default: "text-custom-color-black-400",
  },
};

export default function Timer({
  goalTimeInput,
  timeStatus,
  timerStatus,
  getTime,
  handleGoalTimeInputChange,
  handleTimer,
}: TimerProps) {
  const timerColor =
    (timerStatus.isRunning &&
      (timerStatus.isSuccess
        ? styles.timerColor.success
        : styles.timerColor.unsuccess)) ||
    styles.timerColor.default;

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

  return (
    <>
      <div
        className="flex flex-col items-center
                  h-[342px] pt-[24px] md:pt-[40px] py-[16px] md:py-[24px] pb-[27px]
                  rounded-[20px] border border-custom-color-black-200 md:h-[510px] xl:w-full"
      >
        <h2
          className="mb-[16px] md:mb-[24px]
                    text-[24px] font-[800] leading-[28.64px] text-custom-color-black-400"
        >
          오늘의 집중
        </h2>
        <div
          className={`flex items-center w-fit
                      px-[12px] py-[4px] gap-[4px]
                      border-[1px] border-custom-color-black-200 rounded-[50px] text-custom-color-black-400
          ${!timerStatus.isFocusStart ? "opacity-1" : ""}`}
        >
          <Image src={timerImage} alt="time" width={19} height={19} />
          {formatTime(timeStatus.goalTime)}
        </div>
        {!timerStatus.isFocusStart && (
          <div className="flex justify-center items-center pb-[17px] md:pb-[50px]">
            <input
              ref={inputRef1}
              value={goalTimeInput.minutes}
              onChange={(e) => handleGoalTimeInputChange(e, "minutes")}
              onKeyDown={handleKeyDown}
              className="border-0 outline-none bg-transparent p-0 m-0 text-right w-[120px] md:w-[200px] xl:w-[250px]
                        text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-custom-color-black-400"
            />
            <span className="text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-custom-color-black-400">
              :
            </span>
            <input
              ref={inputRef2}
              value={goalTimeInput.seconds}
              onChange={(e) => handleGoalTimeInputChange(e, "seconds")}
              onKeyDown={handleKeyDown}
              className="border-0 outline-none bg-transparent p-0 m-0 w-[120px] md:w-[200px] xl:w-[250px]
                        text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-custom-color-black-400"
            />
          </div>
        )}
        {timerStatus.isFocusStart && (
          <div className="flex justify-center items-center pb-[17px] md:pb-[50px]">
            <span
              className={`text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
            >
              {getTime.minutes(timeStatus.time)}
            </span>
            <span
              className={`text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
            >
              :
            </span>
            <span
              className={`text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
            >
              {getTime.seconds(timeStatus.time)}
            </span>
          </div>
        )}

        <div className="flex gap-[8px]">
          <div>
            {timerStatus.isFocusStart && !timerStatus.isSuccess && (
              <ButtonPause onClick={handleTimer.pause} />
            )}
          </div>
          <div>
            {!timerStatus.isFocusStart ? (
              <ButtonStart onClick={handleTimer.start} />
            ) : timerStatus.isSuccess ? (
              <ButtonStop onClick={handleTimer.stop} />
            ) : (
              <ButtonStartDisabled />
            )}
          </div>
          <div>
            {timerStatus.isFocusStart && !timerStatus.isSuccess && (
              <ButtonRestart onClick={handleTimer.stop} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
