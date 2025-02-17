import { Reaction } from "@/types";
import Tag from "./Tag";

export default function Top3Reactions({ reactions }: { reactions: Reaction }) {
  return (
    <div className="flex gap-2">
      {Object.entries(reactions).map(([emoji, count]) => (
        <Tag key={emoji} theme="black">
          <div className="flex gap-1 items-center">
            <p>{emoji}</p>
            <p>{count}</p>
          </div>
        </Tag>
      ))}
    </div>
  );
}
