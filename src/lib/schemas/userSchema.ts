import { z } from "zod";

// userSchema로 합쳐버리면 각각 필드를 따로 사용할 때 required 오류 뜸
export const userEmailSchema = z
  .string()
  .email("이메일 형식이 올바르지 않습니다.");

export const userPasswordSchema = z
  .string()
  .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
  .regex(/[A-Z]/, "대문자를 최소 1개 포함해야 합니다.")
  .regex(/[a-z]/, "소문자를 최소 1개 포함해야 합니다.")
  .regex(/[0-9]/, "숫자를 최소 1개 포함해야 합니다.")
  .regex(/[\W_]/, "특수문자를 최소 1개 포함해야 합니다.");
