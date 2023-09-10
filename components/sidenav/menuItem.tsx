import { useTheme } from "next-themes";
import React from "react";
import { useRouter } from "next/navigation";
import { useCustomTheme } from "@/lib/util";

interface MenuItemProps {
  title: string;
  Icon: React.ElementType;
  redirect?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, Icon, redirect }) => {
  const { isDark } = useCustomTheme();

  const router = useRouter();

  const navigate = () => {
    if (redirect) router.push(redirect);
  };
  return (
    <div
      onClick={() => navigate()}
      className={`${
        isDark ? "hover:bg-[#667A8A]" : "hover:bg-[#E9F5FE]"
      } w-[205px] flex flex-row gap-3  py-3 px-4 rounded-sm items-center cursor-pointer transition`}
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
