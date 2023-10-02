import { NextRequest, NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

import bcrypt from "bcrypt";

import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      // password: body.password, // Store plaintext password (if needed)
      hashedPassword, // Store hashed password
    },
  });

  return NextResponse.json({ email: newUser.email }, { status: 201 });
}
