import { z } from "zod";
import {
  userEmailSchema,
  userPasswordSchema,
} from "@/shared/schemas/userSchema";

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
