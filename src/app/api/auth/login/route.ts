import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Login attempt:", body);

    // TODO: Implement actual login logic with Prisma
    // const user = await prisma.user.findUnique(...)

    return NextResponse.json({
      success: true,
      message: "Login successful (mock)",
    });
  } catch (_error) {
    return NextResponse.json(
      { success: false, message: "Login failed" },
      { status: 500 },
    );
  }
}
