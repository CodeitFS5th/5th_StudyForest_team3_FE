"use client";
import Card from "@/components/Card/Card";
import { Study } from "@/types";
import { useEffect, useState } from "react";

export default function RecentStudyHistory() {
  // 스터디 state 정의
  const [studies, setStudies] = useState<Study[]>([]);

  // 컴포넌트 마운트 시 로컬스토리지에서 데이터 가져오기
  useEffect(() => {
    const recentStudies = JSON.parse(
      localStorage.getItem("recentStudies") || "[]"
    );
    setStudies(recentStudies);
  }, []);

  return (
    <div className="max-w-[1200px] h-[247px] md:h-[338px] xl:h-[382px] mx-4 md:mx-6 xl:mx-auto py-4 md:py-6 xl:py-8 pl-4 md:pl-6 xl:pl-8 bg-white rounded-2xl">
      <div className="w-full h-full">
        <p className="text-2xl font-medium mb-4 md:mb-4.5 xl:mb-7.5">
          최근 조회한 스터디
        </p>
        {/* 최근 조회한 스터디가 없으면 가운데 글자 있으면 카드 리스트 뷰 */}
        {studies.length === 0 ? (
          <div className="h-[calc(100%-100px)] flex justify-center items-center">
            <p className="text-gray-500">최근 조회한 스터디가 없습니다.</p>
          </div>
        ) : (
          <div className="flex flex-row flex-nowrap overflow-x-auto gap-x-6 w-full h-[180px] md:h-[270px]">
            {studies.map((study) => (
              <Card
                id={study.id}
                key={study.id}
                bg={study.background}
                isPictureBg={false}
                point={study.point}
                titleName={study.nick}
                titleStudy={study.name}
                date={study.createdAt}
                description={study.description}
                reactions={study.reactions}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
