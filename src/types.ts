export enum habitStatus {
  DONE = "DONE",
  UNDONE = "UNDONE",
}

export interface Study {
  id: number;
  nick: string;
  name: string;
  description: string;
  password: string;
  background: string;
  point: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface Habit {
  id: number;
  name: string;
  status: habitStatus;
  logs: Date[];
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

// update시 필요한 속성만 가져옴
export interface NewHabit {
  id: PK<Habit>;
  name: Habit["name"];
  studyId: FK<Habit, "studyId">;
}

export type StudyTitle = `${string}의 ${string}`;
