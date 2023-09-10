import { useTheme } from "next-themes";

export function useCustomTheme() {
  const { theme, setTheme } = useTheme();

  // You can define your own custom functions or logic here
  // to handle theme changes or anything related to the theme.
  const isDark = theme === "dark" ? true : false;
  return { theme, setTheme, isDark };
}
