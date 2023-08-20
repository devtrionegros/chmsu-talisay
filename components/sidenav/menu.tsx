import React from "react";
import ThemeColor from "@/components/hooks/theme";

import MenuItem from "./menuItem";

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
import DarkMode from "../darkMode/page";
const Menu = () => {
  const { isDarkTheme } = ThemeColor();

  return (
    <div className="h-3/4 flex flex-col items-start">
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
      <div className="mt-10 ">
        <div
          className="flex flex-row items-center w-[205px]"
          onClick={() => {}}
        >
          <div
            className={`${
              isDarkTheme ? "hover:bg-[#667A8A]" : "hover:bg-[#E9F5FE]"
            } flex flex-row py-3 gap-3 px-4 rounded-sm items-center cursor-pointer transition`}
          >
            {isDarkTheme ? (
              <BsMoon className="h-[12px] w-[12px] text-white" />
            ) : (
              <BsSunFill className="h-[12px] w-[12px] text-[#5D7285]" />
            )}
            <h4 className={isDarkTheme ? "text-[#FFFFFF]" : "text-[#5D7285]"}>
              {isDarkTheme ? "Dark" : "Light"} Mode
            </h4>
            <DarkMode
              name="logout"
              defaultChecked={true}
              enabled={isDarkTheme ? true : false}
            />
          </div>
        </div>
        <MenuItem title="Logout" Icon={AiOutlineLogout} redirect="/login" />
      </div>
    </div>
  );
};

export default Menu;