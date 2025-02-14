import Image from "next/image";
import pointIcon from "../../../assets/images/icon/point.png";
import Point from "@/components/Point/Point";

interface Props {
  bg:
    | "green"
    | "yellow"
    | "blue"
    | "pink"
    | "desk"
    | "window"
    | "tile"
    | "leaf";
  isPictureBg: boolean;
  point: string | number;
  titleName: string;
  titleStudy: string;
  streak: string | number;
  description: string;
}

export default function Card({
  bg,
  isPictureBg = false,
  point = 0,
  titleName = "테스트",
  titleStudy = "의 테스트 스터디",
  streak = 0,
  description = "테스트 설명",
}: Props) {
  const settings = {
    bg: "bg-custom-color-card-green",
    pointText: isPictureBg ? "text-white" : "text-custom-color-black-400",
    pointBg: isPictureBg
      ? "bg-black/10 border border-black/50"
      : "bg-white/30 border border-black/10",
    titleNameText: isPictureBg ? "text-white" : "text-custom-color-text-green",
    titleStudyText: isPictureBg ? "text-white" : "text-custom-color-black-400",
    streakText: isPictureBg ? "text-white" : "text-custom-color-black-300",
    descriptionText: isPictureBg ? "text-white" : "text-custom-color-black-400",
  };


  switch (bg) {
    case "yellow":
      settings.bg = "bg-custom-color-card-yellow";
      break;
    case "blue":
      settings.bg = "bg-custom-color-card-blue";
      break;
    case "pink":
      settings.bg = "bg-custom-color-card-pink";
      break;
    //아니 백그라운드 이미지 어딨음?

    default:
      settings.bg = "bg-custom-color-card-green";
  }

return (
    <div
      className={`flex-shrink-0 w-[240px] h-[180px] md:w-[358px] md:h-[243px] rounded-3xl p-4 xl:p-[30px] relative ${settings.bg} cursor-pointer hover:scale-102 transition`}
    >
      <Point point="10" pointBg={settings.bg} pointText="점 획득중" />
      <div className="flex gap-0.5 mt-1.5 xl:mt-0">
        <p className={`font-bold xl:text-[18px] ${settings.titleNameText}`}>
          {titleName}
        </p>
        <p className={`font-bold xl:text-[18px] ${settings.titleStudyText}`}>
          {titleStudy}
        </p>
      </div>
      <p
        className={`${settings.streakText} mt-1 xl:mt-[10px] text-[12px] xl:text-[14px]`}
      >
        {streak}일째 진행 중
      </p>
      <p
        className={`${settings.descriptionText} mt-3 xl:mt-[30px] text-[12px] xl:text-[14px]`}
      >
        {description}
      </p>
    </div>
  );
}
