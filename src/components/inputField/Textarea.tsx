import { TextareaProps } from "@/components/inputField/core/types";
import { useInputFieldValidation } from "@/components/inputField/core/hooks";
import styles from "./textarea.module.css";

const textareaStyleClassName = {
  common:
    "w-full pl-[20px] pr-[10px] py-[20px] border-[1px] outline-none rounded-[15px] placeholder-custom-color-black-300 text-[16px] font-[400] box-border overflow-auto scrollbar-rounded resize-none",
  nonFocus: {
    basic: "border-custom-color-black-200 text-custom-color-black-400",
    error: "border-custom-color-red-200 text-custom-color-red-200",
  },
  focus: {
    basic: "focus:border-[2px] focus:border-custom-color-text-green",
    error: "focus:border-[2px] focus:border-custom-color-red-200",
  },
};

const Textarea = ({
  name,
  value = "",
  placeholder,
  isRequired = false,
  height,
  validate,
  onChange,
  ...props
}: TextareaProps) => {
  const { validationStatus } = useInputFieldValidation({
    value,
    validate: validate ?? (() => true),
    isRequired,
  });

  const textareaHeight = height ? `${height}px` : "98px";

  return (
    <div className="w-full">
      {name && (
        <label
          htmlFor={name}
          className="inline-block mb-[16px] text-custom-color-black-400 text-[16px] font-[600]"
        >
          {name}
        </label>
      )}
      <div className="w-full relative">
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={isRequired}
          {...props}
          className={`
            ${textareaStyleClassName.common}
            ${
              textareaStyleClassName.nonFocus[
                validationStatus.error.type !== "none" ? "error" : "basic"
              ]
            }
            ${
              textareaStyleClassName.focus[
                validationStatus.error.type !== "none" ? "error" : "basic"
              ]
            }
            ${textareaHeight} ${styles["scrollbar-custom"]}
          `}
        />
        {validationStatus.error.type !== "none" && (
          <p className="text-custom-color-red-200 text-[14px] mt-[8px]">
            {validationStatus.error.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
