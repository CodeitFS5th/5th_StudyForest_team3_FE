"use client";

import { ButtonRestart } from "@/shared/components/button/ButtonCircle";
import { ButtonLink } from "@/shared/components/button/ButtonLink";
import {
  ButtonModalCancel,
  ButtonCheck,
  ButtonMove,
  ButtonList,
} from "@/shared/components/button/ButtonRectangle";
import { ButtonStart } from "@/shared/components/button/ButtonRound";
import formatDateTime from "@/shared/hooks/Time";
import { useState, useEffect } from "react";
import { Status } from "@/shared/components/button/core/hooks/RectangleHooks";

export default function HabitMain() {
  const [currentTime, setCurrentTime] = useState(formatDateTime);
  const [isPaused, setIsPaused] = useState(false);
  const [status, setStatus] = useState(Status.UnDone);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatDateTime());
    }, 1000);

    //메모리 누수 방지
    return () => clearInterval(interval);
  }, []);

  const handleList = () => {
    status === Status.UnDone
      ? setStatus(Status.Done)
      : setStatus(Status.UnDone);
  };

  //정지 함수는 여기 넣으면 됩니다!
  const handleStart = () => {
    setIsPaused(true);
  };

  //재시작시 함수는 여기에 넣으시면 됩니다!
  const handleStop = () => {
    setIsPaused(false);
  };

  return (
    <>
      {/* <div>시계 까지 한</div> */}
      <div className="flex flex-col w-full h-[863px] p-[40px] bg-white rounded-md ">
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-between ">
            <h1 className="text-[32px] font-extrabold">
              연우의 개발공장{/* 스터니 네임 들어와야함 */}
            </h1>
            <div className="flex flex-col gap-2">
              <ButtonModalCancel
                type="button"
                label="취소"
                onClick={handleStop}
              />

              <ButtonStart
                type="button"
                disabled={isPaused}
                onClick={handleStart}
              />
              <ButtonList
                type="button"
                label="10시까지 자기"
                onClick={handleList}
                status={status}
              />
            </div>
          </div>
          <div>
            <p className="text-[18px] font-normal text-custom-color-black-300">
              현재 시간
            </p>
            <p className="text-[16px] font-medium text-custom-color-black-400">
              {currentTime}
            </p>
            <div className=" flex flex-col w-auto gap-[40px]">
              <ButtonRestart
                type="button"
                disabled={isPaused}
                onClick={handleStart}
              />
              <br></br>
              <ButtonStart
                type="button"
                disabled={isPaused}
                onClick={handleStart}
              />
              <ButtonMove label="오늘의 습관으로 가기" path="habit" />
              <ButtonCheck
                type="button"
                label="10시까지 자기"
                onClick={handleStop}
              />
              <ButtonLink path="/" label="10시까지 자기" onClick={handleStop} />
            </div>
          </div>
        </div>
        {/*<div>습관 목록 부분</div>*/}
      </div>
    </>
  );
}
