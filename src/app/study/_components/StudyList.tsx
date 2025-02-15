"use client";

import Card from "@/components/Card/Card";
import { Menu } from "@/components/menu/Menu";
import SearchBar from "@/components/SearchBar/SearchBar";
import { API_URL } from "@/constants";
import { useState, useEffect, useRef } from "react";

export default function StudyList() {
  const [studies, setStudies] = useState<Study[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const listEndRef = useRef<HTMLDivElement>(null);

  const fetchStudies = async (page: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/study?page=${page}`);
      console.log(response);
      const data = await response.json();

      if (page === 1) {
        setStudies(data.studies);
      } else {
        setStudies((prev) => [...prev, ...data.studies]);
      }

      setTotalCount(data.totalCount);
    } catch (error) {
      console.error("스터디 목록을 불러오는데 실패했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudies(1);
  }, []);

  const handleLoadMore = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    await fetchStudies(nextPage);
    listEndRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="max-w-[1200px] mt-10 mb-20 p-10 mx-4 md:mx-6 xl:mx-auto m bg-white rounded-2xl">
      <p className="text-2xl font-extrabold">스터디 둘러보기</p>
      {/* 검색, 메뉴 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-6 gap-4 md:gap-0">
        <SearchBar onChange={handleSearch} />
        <Menu
          options={["최신 순", "오래된 순", "포인트 많은 순", "포인트 적은 순"]}
          onOptionChange={() => {}}
        />
      </div>
      {/* 스터디 목록 영역 */}
      <div className="mt-4 md:mt-6 bg-amber-200 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {studies.length === 0 ? (
          isLoading ? (
            <p>로딩 중...</p>
          ) : (
            <p>스터디가 없습니다.</p>
          )
        ) : (
          studies.map((study) => (
            <Card
              key={study.id}
              bg={study.background}
              isPictureBg={false}
              point={study.point}
              titleName={study.nick}
              titleStudy={study.name}
              streak={0}
              description={study.description}
            />
          ))
        )}
        <div ref={listEndRef} />
      </div>
      {/* 더보기 영역 */}
      <div className="flex justify-center mt-8">
        {studies.length < totalCount && (
          <button
            className="w-[280px] h-[53px] border border-[#578246] text-[#578246] rounded-lg hover:bg-[#578246] hover:text-white transition-colors duration-200"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading && studies.length > 0 ? "로딩 중..." : "더보기"}
          </button>
        )}
      </div>
    </div>
  );
}

// Study 타입 정의
interface Study {
  id: number;
  nick: string;
  name: string;
  description: string;
  background:
    | "green"
    | "yellow"
    | "blue"
    | "pink"
    | "desk"
    | "window"
    | "tile"
    | "leaf";
  point: number;
  createdAt: string;
  reactions: {
    [key: string]: number; // 이모지를 키로 하고 숫자를 값으로 가지는 객체
  };
}
