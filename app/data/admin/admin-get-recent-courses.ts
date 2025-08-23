import "server-only"

import { prisma } from "@/lib/db";
import { requireAdmin } from "./require-admin";

export async function adminGetRecentCourses() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await requireAdmin();

  const data = await prisma.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 2,
    select: {
      id: true,
      title: true,
      smallDescription: true,
      duration: true,
      status: true,
      level: true,
      fileKey: true,
      slug: true,
      price: true,
    },
  });

  return data;
}
