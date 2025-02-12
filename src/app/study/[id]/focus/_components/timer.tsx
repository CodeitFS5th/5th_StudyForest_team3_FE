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
import { Toast } from "@/components/toast/Toast";
import { useToastMount } from "@/hooks/useToastMount";

const styles = {
  timerColor: {
    unsuccess: "text-custom-color-red-200",
    success: "text-custom-color-black-300",
    default: "text-custom-color-black-400",
  },
  toast: {
    color: {
      pause: "red",
      stop: "green",
    } as const,
    label: {
      pause: () => "집중이 중단되었습니다.",
      stop: (EarnedPoint: number) => `${EarnedPoint}포인트를 획득했습니다!`,
    },
  },
};

export default function Timer() {
  const [goalTime, setGoalTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isFocusStart, setIsFocusStart] = useState(false); // 초기화
  const [isRunning, setIsRunning] = useState(false); // 재생 / 일시정지
  const [isSuccess, setIsSuccess] = useState(false); // 성공 여부
  const [toastStyle, setToastStyle] = useState<{
    color: "green" | "red";
    label: string;
  }>({
    color: styles.toast.color.pause,
    label: styles.toast.label.pause(),
  }); // 토스트 스타일
  const { isToastMounted, mountToast } = useToastMount();

  const intervalIdRef = useRef<number | null>(null);

  // 재생 or 일시정지
  useEffect(() => {
    if (isRunning) {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
      }
      intervalIdRef.current = window.setInterval(() => {
        setTime((prevTime) => (prevTime ?? 0) - 1);
      }, 1000);
    }

    return () => {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, [isRunning]);

  // 성공 여부 확인
  useEffect(() => {
    if (time <= 0) {
      setIsSuccess(() => true);
    }
  }, [time]);

  // 핸들러
  const startTimer = () => {
    setToastStyle(() => ({
      color: styles.toast.color.pause,
      label: styles.toast.label.pause(),
    }));
    setTime(() => goalTime);
    setIsFocusStart(() => true);
    setIsRunning(() => true);
  };

  const pauseTimer = () => {
    setIsRunning(() => false);
    mountToast();
  };

  const stopTimer = () => {
    setToastStyle(() => ({
      color: styles.toast.color.stop,
      label: styles.toast.label.stop(3 + Math.floor(Math.abs(goalTime) / 60)),
    }));
    mountToast();
    setIsFocusStart(() => false);
    setIsRunning(() => false);
    setIsSuccess(() => false);
    setTime(() => goalTime);
  };

  let timerColor = styles.timerColor.default;

  if (isFocusStart) {
    if (isSuccess) {
      timerColor = styles.timerColor.success;
    } else {
      timerColor = styles.timerColor.unsuccess;
    }
  }

  return (
    <>
      <div className="flex flex-col items-center h-[342px] pt-[24px] md:pt-[40px] py-[16px] md:py-[24px] pb-[27px] rounded-[20px] border border-custom-color-black-200 md:h-[510px] xl:w-full">
        <h2 className="mb-[16px] text-[24px] font-[800] leading-[28.64px] text-custom-color-black-400 md:mb-[24px]">
          오늘의 집중
        </h2>
        <div
          className={`flex items-center w-fit px-[12px] py-[4px] mb-[17px] gap-[4px] 
          border-[1px] border-custom-color-black-200 rounded-[50px] text-custom-color-black-400 md:mb-[55px]
          ${!isFocusStart ? "opacity-1" : ""}`}
        >
          <Image src={timerImage} alt="time" width={19} height={19} />
          {formatTime(goalTime)}
        </div>
        <span
          className={`mb-[40px] text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-center leading-[95.47px] md:mb-[115px] 
        ${timerColor}`}
        >
          {formatTime(time)}
        </span>
        <div className="flex gap-[8px]">
          <div>
            {isFocusStart && !isSuccess && <ButtonPause onClick={pauseTimer} />}
          </div>
          <div>
            {!isFocusStart ? (
              <ButtonStart onClick={startTimer} />
            ) : isSuccess ? (
              <ButtonStop onClick={stopTimer} />
            ) : (
              <ButtonStartDisabled />
            )}
          </div>
          <div>
            {isFocusStart && !isSuccess && (
              <ButtonRestart onClick={stopTimer} />
            )}
          </div>
        </div>
      </div>
      <Toast
        label={toastStyle.label}
        color={toastStyle.color}
        isMounted={isToastMounted}
      />
    </>
  );
}
