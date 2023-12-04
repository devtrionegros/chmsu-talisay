import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("v1/protected/clearance api has been triggered");

  try {
    const requirements = await prisma.requirement.findMany({});

    return NextResponse.json(requirements);
  } catch (error: any) {
    return new NextResponse(null, {
      status: 500,
      statusText: "INTERNAL_SERVER_ERROR",
    });
  }
}
