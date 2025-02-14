"use client";

import formatDateTime from "@/hooks/Time";
import { useState, useEffect } from "react";

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(formatDateTime);

  //시계
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatDateTime());
    }, 1000);

    //메모리 누수 방지
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-[18px] font-normal text-custom-color-black-300">
        현재 시간
      </p>
      <p className="text-[16px] text-nowrap w-[190px] px-[12px] py-[4px] font-medium rounded-3xl border border-custom-color-black-200 text-custom-color-black-400">
        {currentTime}
      </p>
    </div>
  );
}
