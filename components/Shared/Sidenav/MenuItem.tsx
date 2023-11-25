"use client";
import { useTheme } from "next-themes";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCustomTheme } from "@/lib/util";
import { twMerge } from "tailwind-merge";

interface MenuItemProps {
  title: string;
  Icon: React.ElementType;
  redirect?: string;
}

const MenuItem = ({ title, Icon, redirect }: MenuItemProps) => {
  const { isDark } = useCustomTheme();

  const router = useRouter();
  const pathname = usePathname();
  const navigate = () => {
    if (redirect) router.push(redirect);
  };

  const isActive =
    (pathname.includes("/dashboard") && redirect?.includes("dashboard")) ||
    pathname === redirect ||
    pathname.startsWith(`${redirect}/`);

  return (
    <div
      onClick={() => navigate()}
      className={twMerge(
        "w-[205px] flex flex-row gap-3  py-3 px-4 rounded-sm items-center cursor-pointer transition",
        isDark ? "hover:bg-[#667A8A]" : "hover:bg-[#E9F5FE]",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700/20  border-r-2 border-sky-700"
      )}
    >
      <div>
        {React.createElement(Icon, {
          width: 12,
          height: 12,
          color: `${isDark ? " white" : "#5D7285"}`,
        })}
      </div>
      <h4 className={`${isDark ? "text-white" : "text-[#5D7285]"}`}>{title}</h4>
    </div>
  );
};

export default MenuItem;
