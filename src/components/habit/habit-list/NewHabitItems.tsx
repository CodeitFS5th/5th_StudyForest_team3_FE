"use client";

import { v4 as uuidv4 } from "uuid";
import { PK, Habit, NewHabit, UUIDV4 } from "@/types";
import HabitItemDeleteButton from "./HabitItemDeleteButton";
import HabitInput from "./HabitInput";
import HabitItemAddButton from "./NewHabitItemAddButton";
import { useState } from "react";

export default function NewHabitItems({ studyId }: { studyId: number }) {
  const [newHabitList, setNewHabitList] = useState<NewHabit[]>([]);

  const handleAdd = () => {
    // 새로운 배열에 추가
    const newHabit = {
      id: uuidv4() as UUIDV4,
      name: "",
      studyId,
    };

    setNewHabitList((prevList) => [...prevList, newHabit]);
  };

  const handleUpdate = (id: PK<Habit | NewHabit>, habitName: string) => {
    // 새로운 배열의 habitName 수정
    setNewHabitList((prevList) =>
      prevList.map((habit) =>
        habit.id === id ? { ...habit, name: habitName } : habit
      )
    );
  };

  const handleDelete = (id: PK<Habit | NewHabit>) =>
    setNewHabitList((prevList) => prevList.filter((habit) => habit.id !== id));

  return (
    <>
      {newHabitList.map((newHabit) => (
        <div
          key={newHabit.id}
          className="w-full flex flex-row gap-x-2 items-center"
        >
          <HabitInput habit={newHabit} onUpdate={handleUpdate} />
          <HabitItemDeleteButton onDelete={() => handleDelete(newHabit.id)} />
        </div>
      ))}
      <HabitItemAddButton type="button" onClick={handleAdd} />
    </>
  );
}
