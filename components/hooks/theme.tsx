import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeColor = () => {
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  return {
    isDarkTheme,
  };
};

export default ThemeColor;
