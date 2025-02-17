interface Props {
  bgColor: "green" | "yellow" | "blue" | "red";
  isSelected: boolean;
  onClick: () => void;
}

export default function ColorBgCard({ bgColor, isSelected, onClick }: Props) {
  return (
    <div
      className={`bg-custom-color-card-${bgColor} bg-cover bg-center rounded-3xl w-full aspect-square border border-black/10 ${
        isSelected ? "border-[3px] border-custom-color-text-green" : ""
      }`}
      onClick={onClick}
    ></div>
  );
}
