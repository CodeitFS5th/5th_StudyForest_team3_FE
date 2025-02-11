import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex justify-center items-center">
      <div className="bg-white rounded-[20px] w-86 md:w-174 xl:w-6xl p-4 md:p-6 xl:p-10">
        {children}
      </div>
    </main>
  );
}
