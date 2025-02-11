import { useState, useEffect } from "react";

export const useToastFade = (isMounted: boolean) => {
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    if (isMounted) {
      setIsFading(() => true);
      setTimeout(() => {
        setIsFading(() => false);
      }, 2000);
    }
  }, [isMounted]);

  return { isFading };
};
