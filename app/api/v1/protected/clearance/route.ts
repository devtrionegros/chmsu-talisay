import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("v1/protected/clearance api has been triggered");

  try {
    const clearance = await prisma.clearance.findMany({});

    return NextResponse.json(clearance);
  } catch (error: any) {
    return new NextResponse(null, {
      status: 500,
      statusText: "INTERNAL_SERVER_ERROR",
    });
  }
}
