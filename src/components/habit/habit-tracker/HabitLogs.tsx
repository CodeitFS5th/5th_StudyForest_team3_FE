"use client";

import Sticker from "@/components/sticker/Sticker";
import { Habit } from "@/types";

interface HabitLogsProps {
  habitList: Habit[];
}

interface HabitLogProps {
  habit: Habit;
}

function HabitLog({ habit }: HabitLogProps) {
  // const doneLogs = 함수로 받아오는 것이 맞지만, 테스트를 위해 임시로 작성
  const doneLogs = {
    월: true,
    화: false,
    수: true,
    목: false,
    금: true,
    토: false,
    일: true,
  };

  return (
    <div
      key={habit.id}
      className="flex-nowrap grid grid-cols-[repeat(8,auto)] items-center"
    >
      <h1
        key={habit.id}
        className="w-30 md:w-40 xl:w-60 p-4 md:px-6 xl:py-5 text-custom-color-black-400 font-bold text-sm md:text-lg whitespace-pre-line text-right"
      >
        {habit.name}
      </h1>

      {Object.entries(doneLogs).map(([week, isDone]) => (
        <Sticker key={week} isDone={isDone} />
      ))}
    </div>
  );
}

export default function HabitLogs({ habitList }: HabitLogsProps) {
  if (!Array.isArray(habitList)) {
    return (
      <div className="flex items-center justify-center">
        습관 목록을 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-nowrap">
      {habitList.map((habit) => (
        <HabitLog key={habit.id} habit={habit} />
      ))}
    </div>
  );
}
