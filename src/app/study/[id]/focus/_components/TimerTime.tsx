type Props = {
  isActive: boolean;
  minutes: string;
  seconds: string;
  timerColor: string;
};

export default function TimerTime({
  isActive,
  minutes,
  seconds,
  timerColor,
}: Props) {
  if (!isActive) return null;

  return (
    <div
      className={`flex justify-center items-center pb-[17px] md:pb-[50px] ${
        minutes[0] === "-" ? "translate-x-[20px] xl:translate-x-[30px]" : ""
      }`}
    >
      <span
        className={`w-[3ch] text-right text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
      >
        {minutes}
      </span>
      <span
        className={`text-center text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
      >
        :
      </span>
      <span
        className={`w-[3ch] text-left text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
      >
        {seconds}
      </span>
    </div>
  );
}
