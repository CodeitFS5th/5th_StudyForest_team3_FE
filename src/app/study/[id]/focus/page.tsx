"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Study } from "@/types";
import {
  ButtonTodayHabit,
  ButtonStudyHome,
} from "@/components/button/ButtonToday";
import Point from "@/components/Point/Point";
import Timer from "./_components/Timer";
import getStudy from "@/lib/apis/getStudy";

export default function FocusPage() {
  const { id } = useParams();
  const [study, setStudy] = useState<Study | null>(null);

  // study 정보 불러오기
  useEffect(() => {
    const fetchStudy = async () => {
      const studyData = await getStudy({ studyId: Number(id) });
      setStudy(studyData);
    };

    fetchStudy();
  }, [id]);

  if (!study) {
    return <div>스터디를 찾을 수 없습니다.</div>;
  }

  const studyTitle = `${study?.nick}의 ${study?.name}`;
  const studyPoint = study?.point;

  return (
    <div className="flex flex-col w-full h-full gap-[16px]">
      <header className="flex flex-col gap-[25px]">
        <div className="flex flex-col gap-[17px] md:flex-row md:justify-between">
          <h1 className="text-[24px] font-[800] text-custom-color-black-400 md:text-[32px] ">
            {studyTitle}
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
              point={studyPoint ?? 0}
              pointBg="bg-custom-color-blue-100"
              pointText="text-custom-color-blue-500"
            />
          </div>
        </div>
      </header>
      <Timer studyPoint={studyPoint} />
    </div>
  );
}
