"use client";

import Card from "@/components/Card/Card";
import { Menu } from "@/components/menu/Menu";
import SearchBar from "@/components/SearchBar/SearchBar";
import { API_URL } from "@/constants";
import { useState, useEffect, useRef } from "react";
import { Study } from "@/types";

export default function StudyList() {
  const [studies, setStudies] = useState<Study[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const listEndRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  const fetchStudies = async (
    page: number = 1,
    sort: string = "date_desc",
    search: string = ""
  ) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${API_URL}/study?page=${page}&sort=${sort}&search=${search}`
      );
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
      fetchStudies(1, "date_desc", searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const handleLoadMore = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    await fetchStudies(nextPage);
    listEndRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionChange = (option: string) => {
    let sortOption = "";

    switch (option) {
      case "최신 순":
        sortOption = "date_desc";
        break;
      case "오래된 순":
        sortOption = "date_asc";
        break;
      case "포인트 많은 순":
        sortOption = "point_desc";
        break;
      case "포인트 적은 순":
        sortOption = "point_asc";
        break;
      default:
        sortOption = "date_desc"; // 기본값
    }

    console.log(sortOption);
    fetchStudies(1, sortOption);
  };

  // 스터디 카드 처리
  const handleCardClick = (study: Study) => {
    // localStorage에서 기존 데이터 가져오기
    const existingStudies = JSON.parse(
      localStorage.getItem("recentStudies") || "[]"
    );

    // 중복 제거 (이미 있는 스터디는 제거)
    const filteredStudies = existingStudies.filter(
      (s: Study) => s.id !== study.id
    );

    // 새로운 스터디를 배열 맨 앞에 추가 (최대 10개 유지)
    const newStudies = [study, ...filteredStudies].slice(0, 10);

    // localStorage에 저장
    localStorage.setItem("recentStudies", JSON.stringify(newStudies));
  };

  return (
    <div className="max-w-[1200px] mt-10 mb-20 p-10 mx-4 md:mx-6 xl:mx-auto m bg-white rounded-2xl">
      <p className="text-2xl font-extrabold">스터디 둘러보기</p>
      {/* 검색, 메뉴 영역 */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-6 gap-4 md:gap-0">
        <SearchBar onChange={handleSearch} value={searchTerm} />
        <Menu
          options={["최신 순", "오래된 순", "포인트 많은 순", "포인트 적은 순"]}
          onOptionChange={handleOptionChange}
        />
      </div>
      {/* 스터디 목록 영역 */}
      <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-1 md:col-span-2 xl:col-span-3 h-[600px] flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#578246]"></div>
          </div>
        ) : studies.length === 0 ? (
          <div className="col-span-1 md:col-span-2 xl:col-span-3 h-[600px] flex justify-center items-center">
            <p className="text-gray-500">아직 둘러 볼 스터디가 없어요.</p>
          </div>
        ) : (
          studies.map((study) => (
            <div key={study.id} onClick={() => handleCardClick(study)}>
              <Card
                id={study.id}
                bg={study.background}
                isPictureBg={false}
                point={study.point}
                titleName={study.nick}
                titleStudy={study.name}
                date={study.createdAt}
                description={study.description}
                reactions={study.reactions}
              />
            </div>
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
