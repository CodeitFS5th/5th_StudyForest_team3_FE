"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ButtonHabit, ButtonHome } from "@/components/button/ButtonNav";
import {
  ButtonStart,
  ButtonStop,
  ButtonStartDisabled,
} from "@/components/button/ButtonRound";
import Image from "next/image";
import timerImage from "@/assets/images/icon/ic_timer.png";

const styles = {
  timerColor: {
    unsuccess: "text-custom-color-red-200",
    success: "text-custom-color-black-400",
    default: "text-custom-color-black-300",
  },
};

export default function FocusPage() {
  const params = useParams();
  const { id } = params;

  const data = [
    {
      id: "1",
      name: "연우의 개발공장",
      point: 100,
      timer: 15, // 25분
    },
  ];

  const study = data.find((item) => item.id === id);

  // 타이머
  const [time, setTime] = useState(study ? study.timer : 0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusSuccess, setIsFocusSuccess] = useState<boolean | null>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // 시간 포맷 변환 함수
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(Math.abs(timeInSeconds) / 60); // 분 계산
    const seconds = Math.abs(timeInSeconds) % 60; // 초 계산
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${
      timeInSeconds < 0 ? "-" : ""
    }${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    if (isRunning) {
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
      setIsFocusSuccess(() => true);
    }
  }, [time]);

  const startTimer = () => {
    setIsRunning(() => true);
    setIsFocusSuccess(() => false);
  };

  const stopTimer = () => {
    setIsRunning(() => false);
    setIsFocusSuccess(() => null);
  };

  return (
    <div className="flex flex-col h-fit gap-[24px]">
      <header className="flex flex-col gap-[17px]">
        <div className="flex flex-col w-[312px] gap-[17px]">
          <h1 className="text-[24px] font-[800] text-custom-color-black-400">
            {study?.name}
          </h1>
          <div className="flex gap-[8px]">
            <div className="w-[120px]">
              <ButtonHabit>오늘의 습관</ButtonHabit>
            </div>
            <div className="w-[58px]">
              <ButtonHome>홈</ButtonHome>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-[400] text-custom-color-black-300">
            현재까지 획득한 포인트
          </p>
          <p>{study?.point}</p>
        </div>
      </header>
      <div className="flex flex-col items-center justify-between h-[342px] pt-[24px] py-[16px] pb-[27px] rounded-[12px] border border-custom-color-black-200">
        <div className="flex flex-col flex- w-[280px] h-[236px] items-center gap-[16px]">
          <h2 className="text-[24px] font-[800] text-custom-color-black-400">
            오늘의 집중
          </h2>
          <div className="flex items-center w-fit gap-[4px] border-[1px] border-custom-color-black-200 rounded-[50px] px-[12px] py-[4px] text-custom-color-black-400">
            <Image src={timerImage} alt="time" width={19} height={19} />
            {formatTime(study?.timer ?? 0)}
          </div>
          <span
            className={`text-[80px] font-[800] text-center leading-[95.47px]
            ${
              isFocusSuccess === false
                ? styles.timerColor.unsuccess
                : styles.timerColor.success
            }`}
          >
            {formatTime(time)}
          </span>
        </div>
        <div className="flex gap-[8px]">
          {!isRunning && <ButtonStart onClick={startTimer} />}
          {isRunning && isFocusSuccess === false && <ButtonStartDisabled />}
          {isRunning && isFocusSuccess === true && (
            <ButtonStop onClick={stopTimer} />
          )}
        </div>
      </div>
    </div>
  );
}
