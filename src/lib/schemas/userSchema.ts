import { z } from "zod";

// userSchema로 합쳐버리면 각각 필드를 따로 사용할 때 required 오류 뜸

// 닉네임 유효성 검사 스키마
export const userNickSchema = z
  .string()
  .min(1, "닉네임은 1자 이상 입력해주세요.")
  .max(6, "닉네임은 최대 6자까지 입력 가능합니다.");

// 스터디 이름 유효성 검사 스키마
export const userStudyNameSchema = z
  .string()
  .min(1, "스터디 이름은 1자 이상 입력해주세요.")
  .max(20, "스터디 이름은 최대 20자까지 입력 가능합니다.");

// 비밀번호 유효성 검사 스키마
export const userPasswordSchema = z
  .string()
  .min(8, "비밀번호는 최소 8자 이상 입력해주세요.")
  .max(16, "비밀번호는 최대 16자까지 입력 가능합니다.");

export const userPasswordConfirmSchema = z.string();

// 텍스트 에어리어 유효성 검사 스키마
export const userTextareaSchema = z
  .string()
  .min(1, "내용은 1자 이상 입력해주세요.")
  .max(100, "100자 이하로 입력해주세요.");
