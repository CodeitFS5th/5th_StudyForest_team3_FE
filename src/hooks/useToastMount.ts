import { useState } from "react";

export const useToastMount = () => {
  const [isToastMounted, setIsToastMounted] = useState<boolean>(false);

  const mountToast = () => {
    setIsToastMounted(() => true);
    setTimeout(() => {
      setIsToastMounted(() => false);
    }, 3000);
  };

  return { isToastMounted, mountToast };
};
