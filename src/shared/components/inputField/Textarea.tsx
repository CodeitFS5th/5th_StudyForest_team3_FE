import { TextareaProps } from "@/shared/components/inputField/core/types";
import { useInputFieldValidation } from "@/shared/components/inputField/core/hooks";
import styles from "./textarea.module.css";

const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  value,
  invalidErrorMessage,
  isRequired = false,
  height,
  validate,
  ...props
}) => {
  const { fieldStatus, handleChange, handleFocus } = useInputField({
    initialValue: value ?? "",
    validate: validate ?? (() => true),
    isRequired,
  });

  const textareaColorStyle: { [key: string]: string } = {
    basic: "border-custom-color-black-200 text-custom-color-black-400",
    error: "border-custom-color-red-200 text-custom-color-red-200",
  };

  const textareaHeight = height ? `${height}px` : "98px";

  return (
    <div className="w-full">
      {name && (
        <label className="mb-[16px] text-custom-color-black-400 text-[18px] font-[600]">
          {name}
        </label>
      )}
      <div className="w-full relative">
        <textarea
          placeholder={placeholder}
          value={fieldStatus.value}
          onChange={handleChange}
          onFocus={handleFocus}
          required={isRequired}
          {...props}
          className={`
            w-full ${textareaHeight} pl-[20px] pr-[10px] py-[20px]
            border-[1px] outline-none rounded-[15px]
            placeholder-custom-color-black-300 text-[16px] font-[400]
            box-border overflow-auto scrollbar-rounded resize-none

            ${
              textareaColorStyle[
                fieldStatus.errorType !== "none" && fieldStatus.isFocused
                  ? "error"
                  : "basic"
              ]
            }

            // focus
            ${
              fieldStatus.errorType !== "none"
                ? "focus:border-[2px] focus:border-custom-color-red-200"
                : "focus:border-[2px] focus:border-custom-color-text-green"
            }

            // disabled
            disabled:text-custom-color-black-300

            // scrollbar
            ${styles["scrollbar-custom"]}
          `}
        />
        {fieldStatus.errorType === "empty" && fieldStatus.isFocused && (
          <p className="text-custom-color-red-200 text-[14px] mt-[8px]">
            *필수 입력 값입니다
          </p>
        )}
        {fieldStatus.errorType === "invalid" && fieldStatus.isFocused && (
          <p className="text-custom-color-red-200 text-[14px] mt-[8px]">
            *{invalidErrorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
