import {
  userNickSchema,
  userStudyNameSchema,
  userPasswordSchema,
  userTextareaSchema,
} from "@/lib/schemas/userSchema";

// 닉네임 유효성 검사
export const validateNick = (nick: string) => {
  const result = userNickSchema.safeParse(nick);
  if (result.success) return true;
  return result.error;
};

// 스터디 이름 유효성 검사
export const validateStudyName = (studyName: string) => {
  const result = userStudyNameSchema.safeParse(studyName);
  if (result.success) return true;
  return result.error;
};

// 비밀번호 유효성 검사
export const validatePassword = (password: string) => {
  const result = userPasswordSchema.safeParse(password);
  if (result.success) return true;
  return result.error;
};

// 텍스트 에어리어 유효성 검사
export const validateTextarea = (textarea: string) => {
  const result = userTextareaSchema.safeParse(textarea);
  if (result.success) return true;
  return result.error;
};
