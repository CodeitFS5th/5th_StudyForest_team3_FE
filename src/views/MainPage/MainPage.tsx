"use client";

import Input from "@/shared/components/inputField/Input";
import { isValidEmail, isValidPassword } from "@/shared/utils/inputValidation";
import Toast from "@/shared/components/toast/Toast";
import { useToastControl } from "@/shared/hooks/useToastControl";
import Textarea from "@/shared/components/inputField/Textarea";
export default function MainPage() {
  const { isToastVisible, showToast } = useToastControl();
  return (
    <div>
      <h1>메인페이지</h1>
    </div>
  );
}
