import { userEmailSchema, userPasswordSchema } from "@/lib/schemas/userSchema";

export const validateEmail = (email: string) => {
  const result = userEmailSchema.safeParse(email);
  if (result.success) return true;
  return result.error;
};

export const validatePassword = (password: string) => {
  const result = userPasswordSchema.safeParse(password);
  if (result.success) return true;
  return result.error;
};

export const validatePasswordConfirm = (isMatched: boolean) => {
  if (isMatched) return true;
  return new Error("비밀번호 확인이 일치하지 않습니다.");
};
