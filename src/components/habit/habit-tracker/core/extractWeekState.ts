import { DoneLogs, Week, HabitLog } from "@/types";

export default function weekState(habitLogs: HabitLog[]) {
  const today = new Date();
  const todayDayOfWeek = today.getUTCDay(); // ✅ UTC 기준 요일 가져오기

  // UTC 기준으로 Sunday(일요일) 00:00:00.000 설정
  const sunday = new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate() - todayDayOfWeek,
      0,
      0,
      0,
      0
    )
  );

  // UTC 기준으로 Saturday(토요일) 23:59:59.999 설정
  const saturday = new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate() - todayDayOfWeek + 6,
      23,
      59,
      59,
      999
    )
  );

  // 이번 주 범위에 해당하는 로그 필터링
  const filteredDate = habitLogs.filter((log) => {
    const createdAtDate = new Date(log.createdAt);
    return (
      createdAtDate.getTime() >= sunday.getTime() &&
      createdAtDate.getTime() <= saturday.getTime()
    );
  });

  const weekMap = ["일", "월", "화", "수", "목", "금", "토"] as Week[];

  // 초기 값 생성
  const initialState: DoneLogs = {
    일: false,
    월: false,
    화: false,
    수: false,
    목: false,
    금: false,
    토: false,
  };

  const result: DoneLogs = filteredDate.reduce((acc, item) => {
    const createdAtDate = new Date(item.createdAt);
    const day = weekMap[createdAtDate.getUTCDay()]; // ✅ UTC 기준 요일 사용
    acc[day] = true;
    return acc;
  }, initialState);

  return result;
}
