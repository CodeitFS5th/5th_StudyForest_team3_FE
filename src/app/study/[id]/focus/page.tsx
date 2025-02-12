"use client";

import { useParams } from "next/navigation";
import {
  ButtonTodayHabit,
  ButtonStudyHome,
} from "@/components/button/ButtonToday";
import Point from "@/components/Point/Point";
import Timer from "./_components/timer";

export default function FocusPage() {
  const { id } = useParams();

  // todo: API로 데이터 받아오기
  const data = [
    {
      id: "1",
      name: "연우의 개발공장",
      point: 100,
    },
  ];

  const study = data.find((item) => item.id === id);

  return (
    <div className="flex flex-col w-full h-full gap-[16px]">
      <header className="flex flex-col gap-[25px]">
        <div className="flex flex-col gap-[17px] md:flex-row md:justify-between">
          <h1 className="text-[24px] font-[800] text-custom-color-black-400 md:text-[32px] ">
            {study?.name}
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
          <div className="w-fit border border-custom-color-black-200 rounded-[50px]">
            <Point
              point={study?.point ?? 0}
              pointBg="bg-custom-color-blue-100"
              pointText="text-custom-color-blue-500"
            />
          </div>
        </div>
      </header>
      <Timer />
    </div>
  );
}
