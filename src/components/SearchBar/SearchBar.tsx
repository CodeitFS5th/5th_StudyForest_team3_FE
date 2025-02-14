import Image from "next/image";
import IconSearch from "@/assets/images/icon/ic_search.png";

interface SearchBarProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function SearchBar({
  placeholder = "검색",
  onChange,
  value,
}: SearchBarProps) {
  return (
    <div className="relative w-[312px] md:w-[335px]">
      <div className="absolute left-5 top-1/2 -translate-y-1/2">
        <Image
          src={IconSearch}
          alt="검색"
          width={20}
          height={20}
          className="text-customColor-black-300"
        />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-customColor-black-200 
        bg-white py-3 pl-12 pr-5 text-base placeholder:text-customColor-black-300
        focus:border-customColor-brand focus:outline-none"
      />
    </div>
  );
}
