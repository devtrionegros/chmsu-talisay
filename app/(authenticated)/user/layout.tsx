"use client";
import { SideNav } from "@/components/Shared";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

const sideRoutes = [
  { title: "Dashboard", Icon: AiFillHome, redirect: "/admin/dashboard" },
  { title: "Users", Icon: FaUsers, redirect: "/admin/users" },
  { title: "Clearance", Icon: AiFillHome, redirect: "/admin/clearance" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block h-full">
        <SideNav routes={sideRoutes} />
      </div>
      <div className="flex-1 md:ml-[255px] relative  w-full ">{children}</div>
    </div>
  );
}
