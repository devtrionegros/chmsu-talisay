"use client";
import React from "react";
import MenuItem from "@/components/Reusable/Sidenav/MenuItem";

import {
  AiFillHome,
  AiFillEdit,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdPermMedia } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { LiaComments } from "react-icons/lia";
import { CgMenuGridO } from "react-icons/cg";
import { BsPlugin, BsMoon, BsSunFill } from "react-icons/bs";
import { FaUsers, FaTools } from "react-icons/fa";
import DarkMode from "../../DarkMode";
import { useCustomTheme } from "@/lib/util";

const Menu = () => {
  const { isDark } = useCustomTheme();

  return (
    <div>
      <div className="h-3/4 flex flex-1 flex-col items-start">
        <MenuItem title="Dashboard" Icon={AiFillHome} />
        <MenuItem title="Posts" Icon={AiFillEdit} />
        <MenuItem title="Media" Icon={MdPermMedia} />
        <MenuItem title="Pages" Icon={SiPowerpages} />
        <MenuItem title="Comments" Icon={LiaComments} />
        <MenuItem title="Appearance" Icon={CgMenuGridO} />
        <MenuItem title="Plugins" Icon={BsPlugin} />
        <MenuItem title="Users" Icon={FaUsers} />
        <MenuItem title="Settings" Icon={AiFillSetting} />
        <MenuItem title="Tools" Icon={FaTools} />
      </div>
      <div className="mt-10 ">
        <div
          className="flex flex-row items-center w-[205px]"
          onClick={() => {}}
        >
          <div
            className={`${
              isDark ? "hover:bg-[#667A8A]" : "hover:bg-[#E9F5FE]"
            } flex flex-row py-3 gap-3 px-4 rounded-sm items-center cursor-pointer transition`}
          >
            {isDark ? (
              <BsMoon className="h-[12px] w-[12px] text-white" />
            ) : (
              <BsSunFill className="h-[12px] w-[12px] text-[#5D7285]" />
            )}
            <h4 className={isDark ? "text-[#FFFFFF]" : "text-[#5D7285]"}>
              {isDark ? "Dark" : "Light"} Mode
            </h4>
            <DarkMode
              name="logout"
              defaultChecked={true}
              enabled={isDark ? true : false}
            />
          </div>
        </div>
        <MenuItem title="Logout" Icon={AiOutlineLogout} redirect="/login" />
      </div>
    </div>
  );
};

export default Menu;
