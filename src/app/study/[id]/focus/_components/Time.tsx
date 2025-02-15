export default function Time({
  isActive,
  minutes,
  seconds,
  timerColor,
}: {
  isActive: Boolean;
  minutes: string;
  seconds: string;
  timerColor: string;
}) {
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
