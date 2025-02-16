import Image from "next/image";
import pointIcon from "@/assets/images/icon/point.png";
import Tag from "@/components/tag/Tag";

export default function Point({ point }: { point: number }) {
  return (
    <section className="flex flex-col gap-[8px]">
      <span className="text-[16px] md:text-[18px] font-[400] text-custom-color-black-300">
        현재까지 획득한 포인트
      </span>
      <Tag theme="white">
        <Image src={pointIcon} alt="point icon" className="w-[14px] h-[14px]" />
        <p className={`font-medium text-[12px] whitespace-nowrap`}>
          {point}P 획득
        </p>
      </Tag>
    </section>
  );
}
