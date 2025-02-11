import { useState } from "react";

export const useInputFieldValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(() => e.target.value);
  };

  return { value, handleChange };
};
