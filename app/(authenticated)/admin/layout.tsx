"use client";
import { SideNav } from "@/components/Reusable";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block h-full">
        <SideNav />
      </div>
      <div className="flex-1 md:ml-[255px] relative  w-full ">{children}</div>
    </div>
  );
}
