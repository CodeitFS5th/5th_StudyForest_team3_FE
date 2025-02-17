interface Props {
  bg: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function BgCard({ bg, isSelected, onClick }: Props) {
  return (
    <div
      className={` ${bg} bg-cover bg-center rounded-3xl w-full aspect-square border border-black/10 ${
        isSelected ? "border-[3px]" : ""
      }`}
      onClick={onClick}
    ></div>
  );
}
