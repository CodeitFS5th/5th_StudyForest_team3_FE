export interface Study {
  id: number;
  nick: string;
  name: string;
  password: string;
  description: string;
  background: string;
  point: number;
  createdAt: string;
  reactions: {
    [key: string]: number; // 이모지를 키로 하고 숫자를 값으로 가지는 객체
  };
}

export interface Habit {
  id: number;
  name: string;
  logs: HabitLog[];
  studyId: number;
  createdAt: Date;
}

// 모든 page의 id를 가져올 수 있는 params
export interface PageIdParams {
  params: Promise<{ id: number }>;
}

// id 속성만 가져옴 1개만 반환, 없으면 never 반환
export type PK<T> = T extends { id: infer R } ? R : never;

// -Id로 끝나는 속성만 가져옴, 스키마에 따라 여러개의 FK가 있을 수 있으므로 K 지정하기
export type FK<T, K extends keyof T> = K extends `${string}Id` ? T[K] : never;

export type StudyIdInHabit = { studyId: FK<Habit, "studyId"> };

export type UUIDV4 = `${string & { length: 8 }}-${string & {
  length: 4;
}}-${string & { length: 4 }}-${string & { length: 4 }}-${string & {
  length: 12;
}}`;

// update시 필요한 속성만 가져옴
export interface NewHabit {
  id: UUIDV4;
  name: Habit["name"];
  studyId: FK<Habit, "studyId">;
}

export type StudyTitle = `${string}의 ${string}`;

export interface HabitLog {
  id: number;
  habitId: PK<Habit>;
  createdAt: Date;
}

export enum Week {
  일 = "일",
  월 = "월",
  화 = "화",
  수 = "수",
  목 = "목",
  금 = "금",
  토 = "토",
}
export type DoneLogs = Record<Week, boolean>;

type InputToCheck = "nick" | "name" | "description" | "password" | "background";
export type InputData = Pick<Study, InputToCheck>;
