import { useTheme } from "next-themes";

export function useCustomTheme() {
  const { theme, setTheme } = useTheme();

  // You can define your own custom functions or logic here
  // to handle theme changes or anything related to the theme.
  const isDark = theme === "dark" ? true : false;
  return { theme, setTheme, isDark };
}

export const Gender = [{ name: "Male" }, { name: "Female" }];
export const EmploymentStatus = [
  { name: "Full-Time Employee" },
  { name: "Part-Time Employee" },
  { name: "Contractor" },
  { name: "Temporary Employee" },
  { name: "Intern" },
];
export const Campus = [
  { name: "School 1" },
  { name: "School 2" },
  { name: "School 3" },
  { name: "School 4" },
  { name: "School 5" },
];
