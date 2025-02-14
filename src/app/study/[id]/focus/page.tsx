"use client";

import { useParams } from "next/navigation";
import {
  ButtonTodayHabit,
  ButtonStudyHome,
} from "@/components/button/ButtonToday";
import Point from "@/components/Point/Point";
import Toast from "@/components/toast/Toast";
import Timer from "./_components/Timer";
import { useFocus } from "./core/hooks";
import { useMemo } from "react";

export default function FocusPage() {
  const { id }: { id: string } = useParams();
  const numericId = useMemo(() => Number(id), [id]);

  const {
    study,
    goalTimeInput,
    timeStatus,
    timerStatus,
    getTime,
    handleGoalTimeInputChange,
    handleTimer,
    toastStyle,
    isToastMounted,
  } = useFocus({
    studyId: numericId,
    initialMinutes: 25,
    initialSeconds: 0,
  });

  const memoizedPoint = useMemo(() => study?.point ?? 0, [study]);

  const memoizedToastStyle = useMemo(
    () => ({
      label: toastStyle.label,
      color: toastStyle.color,
    }),
    [toastStyle]
  );

  if (!study) {
    return <div>스터디를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col w-full h-full gap-[16px]">
      <header className="flex flex-col gap-[25px]">
        <div className="flex flex-col gap-[17px] md:flex-row md:justify-between">
          <h1 className="text-[24px] font-[800] text-custom-color-black-400 md:text-[32px] ">
            {study.title}
          </h1>
          <div className="flex gap-[8px]">
            <div className="w-[120px] md:w-[144px]">
              <ButtonTodayHabit studyId={Number(id)} />
            </div>
            <div className="w-[58px] md:w-[82px]">
              <ButtonStudyHome studyId={Number(id)} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <span className="text-[16px] md:text-[18px] font-[400] text-custom-color-black-300">
            현재까지 획득한 포인트
          </span>
          <div className="relative w-fit border border-custom-color-black-200 rounded-[50px]">
            <Point
              point={memoizedPoint}
              pointBg="bg-[#FFFFFF]"
              pointText="text-custom-color-black-400"
            />
          </div>
        </div>
      </header>
      <Timer
        goalTimeInput={goalTimeInput}
        timeStatus={timeStatus}
        timerStatus={timerStatus}
        getTime={getTime}
        handleGoalTimeInputChange={handleGoalTimeInputChange}
        handleTimer={handleTimer}
      />
      <Toast
        label={memoizedToastStyle.label}
        color={memoizedToastStyle.color}
        isMounted={isToastMounted}
      />
    </div>
  );
}
