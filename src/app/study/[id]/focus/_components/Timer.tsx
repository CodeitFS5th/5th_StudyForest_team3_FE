"use client";

import TimeInput from "./TimeInput";
import Time from "./Time";
import { useFocus } from "../core/hooks";
import Image from "next/image";
import timerImage from "@/assets/images/icon/ic_timer.png";
import { formatTime } from "../core/utils";
import TimerButton from "./TimerButton";
import Toast from "@/components/toast/Toast";

const styles = {
  timerColor: {
    unsuccess: "text-custom-color-red-200",
    success: "text-custom-color-black-300",
    default: "text-custom-color-black-400",
  },
};

export default function Timer({
  studyId,
  initialPoint,
}: {
  studyId: number;
  initialPoint: number;
}) {
  const {
    goalTimeInput,
    timeStatus,
    timerStatus,
    toastStyle,
    isToastMounted,
    getTime,
    handleGoalTimeInputChange,
    handleTimer,
  } = useFocus({
    studyId,
    initialPoint,
    initialMinutes: 25,
    initialSeconds: 0,
  });

  const timerColor =
    (timerStatus.isRunning &&
      (timerStatus.isSuccess
        ? styles.timerColor.success
        : styles.timerColor.unsuccess)) ||
    styles.timerColor.default;

  return (
    <>
      <section
        className="flex flex-col items-center h-[342px] pt-[24px] md:pt-[40px] py-[16px] md:py-[24px] pb-[27px]
                      rounded-[20px] border border-custom-color-black-200 md:h-[510px] xl:w-full"
      >
        <h2 className="mb-[16px] md:mb-[24px] text-[24px] font-[800] leading-[28.64px] text-custom-color-black-400">
          오늘의 집중
        </h2>

        <div
          className={`flex items-center w-fit px-[12px] py-[4px] gap-[4px] border-[1px] border-custom-color-black-200
                    rounded-[50px] text-custom-color-black-400 ${
                      !timerStatus.isFocusStart ? "opacity-1" : ""
                    }`}
        >
          <Image src={timerImage} alt="time" width={19} height={19} />
          {formatTime(timeStatus.goalTime)}
        </div>

        <TimeInput
          isActive={!timerStatus.isFocusStart}
          minutesValue={goalTimeInput.minutes}
          secondsValue={goalTimeInput.seconds}
          onChange={handleGoalTimeInputChange}
        />

        <Time
          isActive={timerStatus.isFocusStart}
          minutes={getTime.minutes(timeStatus.time)}
          seconds={getTime.seconds(timeStatus.time)}
          timerColor={timerColor}
        />

        <TimerButton
          isFocusStart={timerStatus.isFocusStart}
          isSuccess={timerStatus.isSuccess}
          handleTimer={handleTimer}
        />
      </section>
      <Toast
        label={toastStyle.label}
        color={toastStyle.color}
        position="bottom"
        isMounted={isToastMounted}
      />
    </>
  );
}
