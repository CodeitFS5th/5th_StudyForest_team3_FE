export default function FocusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-fit rounded-[20px] bg-white p-[16px]">
      {children}
    </div>
  );
}
