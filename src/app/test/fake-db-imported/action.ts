"use server";

import { action } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { incrementLikes } from "./db";

const input = z.object({
	incrementBy: z.number(),
});

export const addLikes = action(input, async ({ incrementBy }) => {
	await new Promise((res) => setTimeout(res, 2000));

	const likesCount = incrementLikes(incrementBy);

	revalidatePath("/test/fake-db-imported");

	return {
		likesCount,
	};
});
