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

const styles = {
  timerColor: {
    unsuccess: "text-custom-color-red-200",
    success: "text-custom-color-black-300",
    default: "text-custom-color-black-400",
  },
};

export default function Timer2() {
  const [goalTimeInput, setGoalTimeInput] = useState({
    minutes: "30",
    seconds: "00",
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
          className={`flex items-center w-fit px-[12px] py-[4px] mb-[17px] gap-[4px] 
          border-[1px] border-custom-color-black-200 rounded-[50px] text-custom-color-black-400 md:mb-[55px]
          ${!timerStatus.isFocusStart ? "opacity-1" : ""}`}
        >
          <Image src={timerImage} alt="time" width={19} height={19} />
          {formatTime(timeStatus.goalTime)}
        </div>
        {!timerStatus.isFocusStart && (
          <div className="flex justify-center items-center">
            <input
              value={goalTimeInput.minutes}
              onChange={(e) => handleGoalTimeInputChange(e, "minutes")}
              className="mb-[40px] md:mb-[115px] border-none outline-none p-0 m-0 
                        text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-center 
                        leading-[95.47px] w-[110px]"
            />
            <span
              className="flex justify-center items-center w-[20px] mb-[40px] md:mb-[115px] text-[80px] md:text-[120px] xl:text-[150px] 
                        font-[800] text-center leading-[95.47px] translate-y-[-6px]"
            >
              :
            </span>
            <input
              value={goalTimeInput.seconds}
              onChange={(e) => handleGoalTimeInputChange(e, "seconds")}
              className="mb-[40px] md:mb-[115px] border-none outline-none p-0 m-0 
                        text-[80px] md:text-[120px] xl:text-[150px] font-[800] text-center 
                        leading-[95.47px] w-[110px]"
            />
          </div>
        )}
        {timerStatus.isFocusStart && (
          <div className="flex justify-center gap-[8px] items-center">
            <div
              className={`mb-[40px] md:mb-[115px] text-[80px] md:text-[120px] xl:text-[150px] 
                  font-[800] text-center leading-[95.47px] w-[250px] flex justify-center ${timerColor}`}
            >
              {formatTime(timeStatus.time)}
            </div>
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
    </>
  );
}
