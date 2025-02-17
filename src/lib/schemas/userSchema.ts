import { z } from "zod";

// userSchema로 합쳐버리면 각각 필드를 따로 사용할 때 required 오류 뜸
export const userEmailSchema = z
  .string()
  .email("이메일 형식이 올바르지 않습니다.");

export const userPasswordSchema = z
  .string()
  .min(12, "비밀번호는 최소 12자 이상이어야 합니다.");

export const userPasswordConfirmSchema = z.string();
