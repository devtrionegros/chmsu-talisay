"use client";
import SideNav from "@/components/Sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block">
        <SideNav />
      </div>
      <div className="flex-1 md:ml-[255px]">{children}</div>
    </div>
  );
}
