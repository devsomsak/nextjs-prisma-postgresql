import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function GET() {
  return Response.json({ message: "test" });
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  return Response.json({
    data: {
      title,
      content,
    },
  });
}
