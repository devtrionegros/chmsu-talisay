import { useCustomTheme } from "@/lib/util";
import { Switch } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

interface DarkModeProps {
  name: string;
  defaultChecked: boolean;
  enabled: boolean;
}
const DarkMode = ({ name, defaultChecked, enabled }: DarkModeProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useCustomTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      name={name}
      defaultChecked={defaultChecked}
      as={Fragment}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <button
        className={`${
          enabled ? "bg-blue-400" : "bg-gray-400"
        } relative inline-flex h-6 w-10 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "tranqslate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </button>
    </Switch>
  );
};

export default DarkMode;
