import { TextareaProps } from "@/shared/components/core/types";

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  invalidErrorMessage,
  height,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <p className="mb-[16px] text-[#414141] text-[18px] font-[600]">
          {label}
        </p>
      )}
      <div className="w-full relative">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
          className={`
            peer w-full pl-[20px] pr-[10px] py-[20px]
            border-[1px] outline-none rounded-[15px]
            text-[#414141] placeholder-[#818181]
            text-[16px] font-[400]
            box-border
            overflow-auto
            scrollbar-rounded
            resize-none

            // invalid
            invalid:border-[var(--color-custom-color-red-200)] invalid:text-[var(--color-custom-color-red-200)]
            
            // focus
            focus:border-[2px] focus:border-[var(--color-custom-color-text-green)]

            // invalid focus
            invalid:focus:border-[2px] invalid:focus:border-[var(--color-custom-color-red-200)]
            
            // disabled
            disabled:text-[var(--color-custom-color-black-300)]
          `}
          style={{ height: height ? `${height}px` : "98px" }} // tailwind는 동적 스타일 설정이 권장되지 않음
        />
        <p className="hidden peer-invalid:block text-[var(--color-custom-color-red-200)] text-[14px] mt-[8px]">
          *{invalidErrorMessage}
        </p>
      </div>
    </div>
  );
};

export default Textarea;
