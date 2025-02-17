import Tag from "./Tag";

export default function ReactionsTag({
  reactions,
}: {
  reactions: Record<string, number>;
}) {
  return (
    <div className="flex gap-2">
      {Object.entries(reactions).map(([emoji, count]) => (
        <Tag key={emoji} theme="black">
          <div className="flex gap-0.5 items-center">
            <p>{emoji}</p>
            <p>{count}</p>
          </div>
        </Tag>
      ))}
    </div>
  );
}
