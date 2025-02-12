"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import timerImage from "@/assets/images/icon/ic_timer.png";
import { formatTime } from "../core/utils";
import {
  ButtonStart,
  ButtonStop,
  ButtonStartDisabled,
} from "@/components/button/ButtonRound";
import { ButtonRestart, ButtonPause } from "@/components/button/ButtonCircle";
import { useToastMount } from "@/hooks/useToastMount";
import Toast from "@/components/toast/Toast";

const styles = {
  timerColor: {
    unsuccess: "text-custom-color-red-200",
    success: "text-custom-color-black-300",
    default: "text-custom-color-black-400",
  },
};

export default function Timer2() {
  const [goalTimeInput, setGoalTimeInput] = useState({
    minutes: "00",
    seconds: "30",
  });

  const [timeStatus, setTimeStatus] = useState({
    goalTime: 0,
    time: 0,
  });

  const [timerStatus, setTimerStatus] = useState({
    isFocusStart: false,
    isRunning: false,
    isSuccess: false,
  });

  const [toastStyle, setToastStyle] = useState<{
    color: "green" | "red";
    label: string;
  }>({
    color: "red",
    label: "집중이 중단되었습니다.",
  });

  const { isToastMounted, mountToast } = useToastMount();

  const intervalIdRef = useRef<number | null>(null);

  const handleGoalTimeInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "minutes" | "seconds"
  ) => {
    // 입력 제한: 숫자만, 2자리로 입력, 최대 99분 59초
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 2) {
      value = value.slice(0, 2);
    }

    if (type === "minutes" && Number(value) > 99) {
      value = "99";
    } else if (type === "seconds" && Number(value) > 59) {
      value = "59";
    }

    setGoalTimeInput((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const getTimeMinutes = (time: number) => {
    const minutes = Math.floor(Math.abs(time) / 60);
    const sign = time < 0 ? "-" : "";
    return `${sign}${minutes.toString().padStart(2, "0")}`;
  };

  const getTimeSeconds = (time: number) => {
    const seconds = Math.abs(time % 60);
    return seconds.toString().padStart(2, "0");
  };

  // 타이머 실행 / 일시정지
  useEffect(() => {
    console.log(timerStatus.isSuccess);
    if (timerStatus.isRunning) {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
      }
      intervalIdRef.current = window.setInterval(() => {
        setTimeStatus((prev) => ({
          ...prev,
          time: prev.time - 1,
        }));
      }, 1000);
    }

    return () => {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, [timerStatus.isRunning]);

  // 성공 여부 확인
  useEffect(() => {
    if (timeStatus.time <= 0) {
      setTimerStatus((prev) => ({
        ...prev,
        isSuccess: true,
      }));
    }
  }, [timeStatus.time]);

  // 핸들러
  const startTimer = () => {
    const goalTime =
      Number(goalTimeInput.minutes) * 60 + Number(goalTimeInput.seconds);

    setTimeStatus((prev) => ({
      goalTime,
      time: goalTime,
    }));

    setTimerStatus((prev) => ({
      isSuccess: false,
      isFocusStart: true,
      isRunning: true,
    }));
  };

  const pauseTimer = () => {
    setTimerStatus((prev) => ({
      ...prev,
      isRunning: false,
    }));
    setToastStyle(() => ({
      color: "red",
      label: "집중이 중단되었습니다.",
    }));
    mountToast();
  };

  const stopTimer = () => {
    setTimerStatus((prev) => ({
      ...prev,
      isFocusStart: false,
      isRunning: false,
      isSuccess: false,
    }));
    setTimeStatus((prev) => ({
      ...prev,
      time: prev.goalTime,
    }));

    if (timerStatus.isSuccess) {
      // todo: api 호출 - point 획득
      setToastStyle(() => ({
        color: "green",
        label: `${
          3 + Math.floor(Math.abs(timeStatus.goalTime) / 60)
        }포인트를 획득했습니다!`,
      }));
      mountToast();
    }
  };

  let timerColor =
    (timerStatus.isRunning &&
      (timerStatus.isSuccess
        ? styles.timerColor.success
        : styles.timerColor.unsuccess)) ||
    styles.timerColor.default;

  return (
    <>
      <div
        className="flex flex-col items-center h-[342px] pt-[24px] md:pt-[40px] py-[16px] md:py-[24px] pb-[27px]
                      rounded-[20px] border border-custom-color-black-200 md:h-[510px] xl:w-full"
      >
        <h2 className="mb-[16px] text-[24px] font-[800] leading-[28.64px] text-custom-color-black-400 md:mb-[24px]">
          오늘의 집중
        </h2>
        <div
          className={`flex items-center w-fit px-[12px] py-[4px] gap-[4px] 
          border-[1px] border-custom-color-black-200 rounded-[50px] text-custom-color-black-400
          ${!timerStatus.isFocusStart ? "opacity-1" : ""}`}
        >
          <Image src={timerImage} alt="time" width={19} height={19} />
          {formatTime(timeStatus.goalTime)}
        </div>
        {!timerStatus.isFocusStart && (
          <div className="flex justify-center items-center pb-[17px] md:pb-[50px]">
            <input
              value={goalTimeInput.minutes}
              onChange={(e) => handleGoalTimeInputChange(e, "minutes")}
              className="border-0 outline-none bg-transparent p-0 m-0 text-right
                        text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-custom-color-black-400"
            />
            <span className="text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-custom-color-black-400">
              :
            </span>
            <input
              value={goalTimeInput.seconds}
              onChange={(e) => handleGoalTimeInputChange(e, "seconds")}
              className="border-0 outline-none bg-transparent p-0 m-0
                        text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-custom-color-black-400"
            />
          </div>
        )}
        {timerStatus.isFocusStart && (
          <div className="flex justify-center items-center pb-[17px] md:pb-[50px]">
            <span
              className={`text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
            >
              {getTimeMinutes(timeStatus.time)}
            </span>
            <span
              className={`text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
            >
              :
            </span>
            <span
              className={`text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
            >
              {getTimeSeconds(timeStatus.time)}
            </span>
          </div>
        )}

        <div className="flex gap-[8px]">
          <div>
            {timerStatus.isFocusStart && !timerStatus.isSuccess && (
              <ButtonPause onClick={pauseTimer} />
            )}
          </div>
          <div>
            {!timerStatus.isFocusStart ? (
              <ButtonStart onClick={startTimer} />
            ) : timerStatus.isSuccess ? (
              <ButtonStop onClick={stopTimer} />
            ) : (
              <ButtonStartDisabled />
            )}
          </div>
          <div>
            {timerStatus.isFocusStart && !timerStatus.isSuccess && (
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
