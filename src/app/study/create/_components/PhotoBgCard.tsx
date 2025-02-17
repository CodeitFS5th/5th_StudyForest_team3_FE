import photo_1 from "@/assets/images/studyBackground/nestjs.png";
import photo_2 from "@/assets/images/studyBackground/javascript.png";
import photo_3 from "@/assets/images/studyBackground/reactjs.png";
import photo_4 from "@/assets/images/studyBackground/nextjs.png";

interface Props {
  bgPhoto: "photo_1" | "photo_2" | "photo_3" | "photo_4";
  isSelected: boolean;
  onClick: () => void;
}

const photos = {
  photo_1,
  photo_2,
  photo_3,
  photo_4,
};

export default function PhotoBgCard({ bgPhoto, isSelected, onClick }: Props) {
  return (
    <div
      className={`bg-cover bg-center rounded-3xl w-full aspect-square border border-black/10 ${
        isSelected ? "border-[3px] border-custom-color-text-green" : ""
      }`}
      style={{ backgroundImage: `url(${photos[bgPhoto].src})` }}
      onClick={onClick}
    ></div>
  );
}
