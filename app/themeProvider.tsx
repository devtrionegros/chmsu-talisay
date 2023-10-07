"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface ThemeProviderModeProps {
  children: React.ReactNode;
}
const ThemeProviderMode = ({ children }: ThemeProviderModeProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderMode;
