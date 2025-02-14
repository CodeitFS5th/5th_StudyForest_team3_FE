"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/constants";
import { Habit, NewHabit, PK } from "@/types";
import HabitItemDeleteButton from "./HabitItemDeleteButton";
import HabitInput from "./HabitInput";
import fetchData from "@/lib/apis/fetchData";

export default function HabitItems({ studyId }: { studyId: number }) {
  const [habitList, setHabitList] = useState<Habit[]>([]);

  useEffect(() => {
    // fetch habits
    async function fetchHabits() {
      const data = await fetchData<Habit[]>(
        `${API_URL}/study/${studyId}/habit`
      );

      if (!data) return;

      setHabitList(data);
    }

    fetchHabits();
  }, []);

  const handleUpdate = (id: PK<Habit | NewHabit>, habitName: string) => {
    setHabitList((prevList) =>
      prevList.map((habit) =>
        habit.id === id ? { ...habit, name: habitName } : habit
      )
    );
  };

  const handleDelete = (id: number) =>
    setHabitList((prevList) => prevList.filter((habit) => habit.id !== id));

  return (
    <>
      {habitList.map((habit) => (
        <div
          key={habit.id}
          className="w-full flex flex-row gap-x-2 items-center"
        >
          <HabitInput habit={habit} onUpdate={handleUpdate} />
          <HabitItemDeleteButton onDelete={() => handleDelete(habit.id)} />
        </div>
      ))}
    </>
  );
}
