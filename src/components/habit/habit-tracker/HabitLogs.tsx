"use client";

import { Habit } from "@/types";

interface HabitLogProps {
  habitList: Habit[];
}

export default function HabitLog({ habitList }: HabitLogProps) {
  if (!Array.isArray(habitList)) {
    return <div>습관 목록을 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <div>
      {habitList.map((habit) => (
        <h1 key={habit.id}>{habit.name}</h1>
      ))}
    </div>
  );
}
