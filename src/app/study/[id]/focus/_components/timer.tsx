"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import timerImage from "@/assets/images/icon/ic_timer.png";
import {
  ButtonStart,
  ButtonStop,
  ButtonStartDisabled,
} from "@/components/button/ButtonRound";
import { ButtonRestart, ButtonPause } from "@/components/button/ButtonCircle";
import { formatTime } from "../core/utils";

const styles = {
  timerColor: {
    unsuccess: "text-custom-color-red-200",
    success: "text-custom-color-black-400",
    default: "text-custom-color-black-300",
  },
};

export default function Timer({ studyTimer }: { studyTimer: number }) {
  const [time, setTime] = useState(studyTimer);
  const [isRunning, setIsRunning] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const intervalIdRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (isRunning) {
      setIsSuccess(() => false);
      intervalIdRef.current = setInterval(() => {
        setTime((prevTime) => {
          return (prevTime ?? 0) - 1;
        });
      }, 1000);
    } else {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    if (time <= 0) {
      setIsSuccess(() => true);
    }
  }, [time]);

  const startTimer = () => {
    setIsRunning(() => true);
  };

  const pauseTimer = () => {
    setIsRunning(() => false);
  };

  const stopTimer = () => {
    setIsRunning(() => false);
    setIsSuccess(() => null);
    setTime(() => studyTimer);
  };

  return (
    <div className="flex flex-col items-center h-[342px] pt-[24px] md:pt-[40px] py-[16px] md:py-[24px] pb-[27px] rounded-[20px] border border-custom-color-black-200 md:h-[510px] xl:w-full">
      <h2 className="mb-[16px] text-[24px] font-[800] leading-[28.64px] text-custom-color-black-400 md:mb-[24px]">
        오늘의 집중
      </h2>
      <div
        className={
          "flex items-center w-fit px-[12px] py-[4px] mb-[17px] gap-[4px] border-[1px] border-custom-color-black-200 rounded-[50px] text-custom-color-black-400 md:mb-[55px] " +
          (!isRunning ? "opacity-1" : "")
        }
      >
        <Image src={timerImage} alt="time" width={19} height={19} />
        {formatTime(studyTimer)}
      </div>
      <span
        className={`mb-[40px] text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-center leading-[95.47px] md:mb-[115px] 
        ${
          isSuccess === false
            ? styles.timerColor.unsuccess
            : styles.timerColor.success
        }`}
      >
        {formatTime(time)}
      </span>
      <div className="flex gap-[8px]">
        <div>
          {isRunning && isSuccess === false && (
            <ButtonRestart onClick={stopTimer} />
          )}
        </div>
        <div>
          {!isRunning && <ButtonStart onClick={startTimer} />}
          {isRunning && isSuccess === false && <ButtonStartDisabled />}
          {isRunning && isSuccess === true && (
            <ButtonStop onClick={stopTimer} />
          )}
        </div>
        <div>
          {isRunning && isSuccess === false && (
            <ButtonPause onClick={pauseTimer} />
          )}
        </div>
      </div>
    </div>
  );
}
