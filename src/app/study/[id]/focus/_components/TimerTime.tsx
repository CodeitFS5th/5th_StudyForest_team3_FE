type Props = {
  isActive: Boolean;
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
    <div className="flex justify-center items-center pb-[17px] md:pb-[50px]">
      <span
        className={`text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
      >
        {minutes}
      </span>
      <span
        className={`text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
      >
        :
      </span>
      <span
        className={`text-[80px] md:text-[120px] xl:text-[150px] font-[800] ${timerColor}`}
      >
        {seconds}
      </span>
    </div>
  );
}
