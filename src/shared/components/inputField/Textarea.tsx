import { TextareaProps } from "@/shared/components/inputField/core/types";
import { useInputFieldValidation } from "@/shared/components/inputField/core/hooks";
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
  value,
  placeholder,
  invalidErrorMessage,
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
          className="mb-[16px] text-custom-color-black-400 text-[18px] font-[600]"
        >
          {name}
        </label>
      )}
      <div className="w-full relative">
        <textarea
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={isRequired}
          {...props}
          className={`
            ${textareaStyleClassName.common}
            ${
              textareaStyleClassName.nonFocus[
                validationStatus.errorType !== "none" ? "error" : "basic"
              ]
            }
            ${
              textareaStyleClassName.focus[
                validationStatus.errorType !== "none" ? "error" : "basic"
              ]
            }
            ${textareaHeight} ${styles["scrollbar-custom"]}
          `}
        />
        {validationStatus.errorType === "empty" && (
          <p className="text-custom-color-red-200 text-[14px] mt-[8px]">
            *필수 입력 값입니다
          </p>
        )}
        {validationStatus.errorType === "invalid" && (
          <p className="text-custom-color-red-200 text-[14px] mt-[8px]">
            *{invalidErrorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
