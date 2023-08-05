"use client";

import { SessionProvider } from "next-auth/react";
import { Props } from "@/lib/type";
export default function Provider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
