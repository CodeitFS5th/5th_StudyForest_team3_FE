import Image from "next/image";
import sticker_undone from "@/assets/images/sticker/sticker_empty.png";
import sticker_done from "@/assets/images/sticker/sticker_green_06.png";

export default function Sticker({ isDone }: { isDone: boolean }) {
  const stickerSrc = isDone ? sticker_done : sticker_undone;
  const stickerAlt = isDone ? "done" : "undone";

  return (
    <div className="flex items-center justify-center w-16 xl:w-28">
      <Image src={stickerSrc} alt={stickerAlt} width={36} height={36} />
    </div>
  );
}
