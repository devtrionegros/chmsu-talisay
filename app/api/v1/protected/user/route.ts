import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Exclude keys from user
function exclude(users: any) {
  return users.map(({ password, ...rest }: any) => rest);
}

export async function GET(request: NextRequest) {
  console.log("v1/protected/user api has been triggered");

  try {
    const searchParams = request.nextUrl.searchParams;
    const start_index = searchParams.get("startIndex");
    const items_per_api_call = searchParams.get("itemsPerCall");

    const [users, users_length] = await Promise.all([
      await prisma.user.findMany({
        take: Number(items_per_api_call),
        skip: Number(start_index),
        include: {
          profile: true,
        },
        orderBy: {
          createdAt: "asc"
        }
      }),
      await prisma.user.count(),
    ]);
    const userWithoutPassword = exclude(users);

    return NextResponse.json({
      users: userWithoutPassword,
      usersLength: users_length,
    });
  } catch (error) {
    console.log(error);
    
    return new NextResponse(null, {
      status: 500,
      statusText: "INTERNAL_SERVER_ERROR",
    });
  }
}
