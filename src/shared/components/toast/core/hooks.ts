import { useState, useEffect } from "react";

export const useToastFade = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  }, []);

  return { isVisible };
};
