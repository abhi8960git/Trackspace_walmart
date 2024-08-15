import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { productId: string } },
) {
  const { productId } = params;

  try {
    // const user = await prisma.user.findMany();

    const mostRecentBatch = await prisma.batch.findFirst({
      where: {
        productIds: {
          has: productId,
        },
        status: "InTransit",
      },
      orderBy: {
        createdAt: "desc", // Sorting by most recent `createdAt`
      },
    });

    return NextResponse.json(
      {
        longitude: mostRecentBatch?.longitude,
        latitude: mostRecentBatch?.lattitude,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Error fetching user" }, { status: 500 });
  }
}
