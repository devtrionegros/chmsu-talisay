"use client";
import React from "react";

import { Poppins } from "next/font/google";
import { useCustomTheme } from "@/lib/util";
import Menu from "@/components/Sidenav/Menu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const SideNav = () => {
  const { isDark } = useCustomTheme();

  return (
    <div className={poppins.className}>
      <div
        className={`hidden md:block  ${
          isDark ? "bg-[#031C30]" : "bg-[#FFFFFF] border-r-[1px]"
        }
       fixed h-screen p-6 w-[250px]  shadow-md xl:w-[300px] z-10 overflow-y-scroll `}
      >
        <div
          className={`${
            isDark ? "text-white" : "text-[#5D7285]"
          } mb-10  font-thin`}
        >
          Logo
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SideNav;
