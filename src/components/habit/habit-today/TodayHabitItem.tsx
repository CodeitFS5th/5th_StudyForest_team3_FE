import { Habit } from "@/types";

interface TodayHabitItemProps {
  habit: Habit;
  isActive: boolean;
  onClick: () => void;
}

// 🚀 서버 컴포넌트 (UI만 렌더링)
export default function TodayHabitItem({
  habit,
  isActive,
  onClick,
}: TodayHabitItemProps) {
  return (
    <button
      className={`text-[16px] py-[18px] rounded-3xl cursor-pointer transition-colors ${
        isActive
          ? "bg-custom-color-black-100 text-custom-color-black-300"
          : "bg-custom-color-brand text-white"
      }`}
      onClick={onClick}
    >
      {habit.name}
    </button>
  );
}
