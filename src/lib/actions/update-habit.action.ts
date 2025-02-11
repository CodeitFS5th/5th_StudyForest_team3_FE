"use server";

// import { API_URL } from "@/constants";

export default async function updateHabitAction(
  _: unknown,
  formData: FormData
) {
  // const studyId = formData.get("studyId");
  const newHabits = formData.getAll("habit");

  if (!newHabits) {
    return {
      status: false,
      message: "습관이 없습니다.",
    };
  }
  // 기존 habits의 name과 newHabits의 name을 비교하여 기존과 다른 것만 반환

  // 그것을 서버에 body로 보냄 (중복된 부분, 추가된 부분)
  // 서버에서는 해당 스터디의 habits를 업데이트
  // 중복된 부분을 제외한 나머지를 추가 할건데
  // 1) 만약 기존 m개들 중에 n개가 중복이라면
  //    (m-n)개는 수정하고 나머지들은 추가함
  //    (이때 m,n은 자연수이고 m > n)
  // 2) 만약 기존 n개들 중에 n개가 중복이라면 모두 추가함
  // 3) 만약 기존 m개들 중에 n개만 존재한다면 중복된 부분 제외하고 (m-n)개 소프트 딜리트 실행

  try {
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: `습관 수정에 실패했습니다. : ${error}`,
    };
  }
}
