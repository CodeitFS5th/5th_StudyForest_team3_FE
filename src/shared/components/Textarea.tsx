interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isError?: boolean;
  errorMessage?: string;
  height?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  isError,
  errorMessage,
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
            w-full pl-[20px] pr-[10px] py-[20px]
            border-[1px] outline-none rounded-[15px]
            text-[#414141] placeholder-[#818181]
            text-[16px] font-[400]
            box-border
            overflow-auto
            scrollbar-rounded
            resize-none

            // error 스타일
            ${isError ? "border-[#C41013]" : "border-[#DDDDDD]"}
          `}
          style={{ height: height ? `${height}px` : "98px" }} // tailwind는 동적 스타일 설정이 권장되지 않음
        />
      </div>
      {isError && (
        <p className="text-[#C41013] text-[14px] mt-[8px]">*{errorMessage}</p>
      )}
    </div>
  );
};

export default Textarea;
