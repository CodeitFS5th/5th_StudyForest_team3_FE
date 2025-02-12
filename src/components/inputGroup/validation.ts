export const VALIDATION = {
  password: {
    pattern: "^.{8,16}$", // 비밀번호 패턴
    message: "비밀번호는 최소 8자 이상 16자 이하로 입력해주세요.",
  },
  nick: {
    pattern: "^.{1,6}$", // 닉네임 패턴
    message: "닉네임은 1자 이상 6자 이하로 입력해주세요.",
  },
  studyName: {
    pattern: "^.{1,20}$", // 스터디 이름 패턴
    message: "스터디 이름은 1자 이상 20자 이하로 입력해주세요.",
  },
  textarea: {
    pattern: "^.{1,100}$", // 텍스트 에어리어 패턴
    message: "100자 이하로 입력해주세요.",
  },
};
