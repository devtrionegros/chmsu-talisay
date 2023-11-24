import "./globals.css";

import Provider from "@/context/AuthContext";
import ThemeProviderMode from "./themeProvider";
import { Advent_Pro, Capriola } from "next/font/google";
import ToastProvider from "@/components/Shared/Toast/ToastProvider";

const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});
const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-advent-pro",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${capriola.variable} ${adventPro.variable}`}>
      <body>
        <Provider>
          <ThemeProviderMode>
            <ToastProvider />
            {children}
          </ThemeProviderMode>
        </Provider>
      </body>
    </html>
  );
}
