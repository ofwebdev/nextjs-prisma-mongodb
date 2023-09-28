import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "../../libs/prismadb";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email } = body;
    const validation = schema.safeParse(body);
    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 404 });

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (user)
      return NextResponse.json(
        { error: "User already exist" },
        { status: 400 }
      );

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ error: "User error post" }, { status: 500 });
  }
}
