"use client";
import SideNav from "@/components/sidenav/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row bg-red-400">
      <SideNav />
      <div className="ml-[255px]">{children}</div>
    </div>
  );
}
