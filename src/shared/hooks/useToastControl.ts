import { useState, useEffect } from "react";

export const useToastControl = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = () => {
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  return { isToastVisible, showToast };
};
