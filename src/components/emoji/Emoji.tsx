interface Props {
  emoji: string;
  count: number;
}

export default function Emoji({ emoji, count }: Props) {
  return (
    <div
      className={
        "inline-flex items-center justify-center gap-[5px] px-[10px] py-[6px] rounded-[30px] xl:right-[30px] bg-[rgba(0,0,0,0.5)] text-white text-[16px]"
      }
    >
      <p>{emoji}</p>
      <p>{count}</p>
    </div>
  );
}
