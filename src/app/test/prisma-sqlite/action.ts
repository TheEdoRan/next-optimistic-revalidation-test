"use server";

import prisma from "@/lib/prisma";
import { action } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const input = z.object({
	incrementBy: z.number(),
});

export const addLikes = action(input, async ({ incrementBy }) => {
	await new Promise((res) => setTimeout(res, 2000));

	const { likes } = await prisma.post.update({
		where: { id: 1 },
		data: { likes: { increment: incrementBy } },
	});

	revalidatePath("/test/prisma-sqlite");

	return {
		likesCount: likes,
	};
});
