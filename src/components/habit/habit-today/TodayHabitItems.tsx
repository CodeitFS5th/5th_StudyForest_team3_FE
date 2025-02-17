"use client";

import { API_URL } from "@/constants";
import fetchData from "@/lib/apis/fetchData";
import { Habit } from "@/types";
import TodayHabitItem from "./TodayHabitItem";
import { useState, useEffect } from "react";

interface TodayHabitItemsProps {
  studyId: number;
}

// 🚀 클라이언트 컴포넌트 (상태 관리 & API 요청)
export default function TodayHabitItems({ studyId }: TodayHabitItemsProps) {
  const [habitList, setHabitList] = useState<Habit[]>([]);
  const [activeStates, setActiveStates] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    const fetchHabits = async () => {
      const data = await fetchData<Habit[]>(
        `${API_URL}/study/${studyId}/habit`
      );
      if (!data) {
        return [];
      }
      setHabitList(data);
      console.log("data", data);
      const initialStates: { [key: number]: boolean } = {};
      data.forEach((habit) => {
        initialStates[habit.id] = false;
      });
      setActiveStates(initialStates);
    };

    fetchHabits();
  }, [studyId]);

  const handleToggle = async (habit: Habit) => {
    try {
      const res = await fetch(`${API_URL}/study/${studyId}/habit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          { id: habit.id, name: habit.name, studyId: habit.studyId },
        ]),
      });
      console.log("res", res);
      if (!res.ok) throw new Error("습관 상태 변경 실패");

      setActiveStates((prev) => ({
        ...prev,
        [habit.id]: !prev[habit.id],
      }));
    } catch (error) {
      console.error("습관 상태 변경 오류:", error);
    }
  };

  if (!habitList || habitList.length < 1) {
    return (
      <div className="flex flex-col justify-center h-[637px] text-[16px] md:text-[20px] text-custom-color-black-300 text-center">
        <p>아직 습관이 없어요</p>
        <p>목록 수정을 눌러 습관을 생성해보세요</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center w-[280px] md:w-[400px] gap-[12px] md:gap-[20px]">
      {habitList.map((habit) => (
        <TodayHabitItem
          key={habit.id}
          habit={habit}
          isActive={activeStates[habit.id]}
          onClick={() => handleToggle(habit)}
        />
      ))}
    </div>
  );
}
