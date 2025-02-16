"use client";

import Image from "next/image";
import IcToggle from "@/assets/images/icon/ic_toggle.svg";
import { useState } from "react";

interface MenuProps {
  options: string[];
  onOptionChange: (option: string) => void;
  defaultOption?: string;
}

export const Menu = ({ options, onOptionChange, defaultOption }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || (options?.length > 0 ? options[0] : "")
  );

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionChange(option);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex flex-col w-[180px] items-start gap-2.5 px-5 py-[9px] relative bg-white rounded-[15px] overflow-hidden border border-solid border-[#dddddd] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#818181] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            {selectedOption}
          </div>

          <Image
            src={IcToggle}
            alt="toggle"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {isOpen && <DropDownList onSelect={handleSelect} options={options} />}
    </div>
  );
};

const DropDownList = ({
  onSelect,
  options,
}: {
  onSelect: (option: string) => void;
  options: string[];
}) => {
  return (
    <ul className="absolute left-0 mt-2 w-[180px] bg-white border border-gray-300 rounded-[15px] shadow-lg z-10">
      {options.map((item, index) => (
        <li key={index} className="relative">
          <button
            className="w-full h-[42px] px-4 py-2 text-black text-base cursor-pointer hover:bg-gray-100 text-left"
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
          {index < options.length - 1 && (
            <div className="border-t border-gray-200"></div>
          )}
        </li>
      ))}
    </ul>
  );
};
