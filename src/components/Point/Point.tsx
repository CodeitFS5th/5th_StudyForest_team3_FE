import Image from "next/image";
import pointIcon from "*.png";

interface Props {
  point: number | string;
  pointBg: string;
  pointText: string;
}

export default function Point({ point, pointBg, pointText }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-3xl xl:absolute xl:right-[30px] ${pointBg}`}
    >
      <Image src={pointIcon} alt="point icon" className="w-[14px] h-[14px]" />
      <p className={`font-medium text-[12px] ${pointText}`}>{point}P 획득</p>
    </div>
  );
}
