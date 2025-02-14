import { DoneLogs, Week, HabitLog } from "@/types";

export default function weekState(habitLogs: HabitLog[]) {
  const today = new Date();
  const todayDayOfWeek = today.getDay();

  const monday = new Date(today);
  monday.setDate(today.getDate() - todayDayOfWeek + 1);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - todayDayOfWeek + 7);
  sunday.setHours(23, 59, 59, 999);

  const filteredDate = habitLogs.filter((log) => {
    const createdAtDate = new Date(log.createdAt);
    return createdAtDate >= monday && createdAtDate <= sunday;
  });

  const weekMap = ["일", "월", "화", "수", "목", "금", "토"] as Week[];

  const result: DoneLogs = filteredDate.reduce(
    (acc, item) => {
      const day = weekMap[new Date(item.createdAt).getDay()];
      acc[day] = true;
      return acc;
    },
    {
      월: false,
      화: false,
      수: false,
      목: false,
      금: false,
      토: false,
      일: false,
    } as DoneLogs
  );

  return result;
}
