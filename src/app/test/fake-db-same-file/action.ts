"use server";

import { action } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const input = z.object({
	incrementBy: z.number(),
});

let likes = 42;

export const getLikes = () => likes;

export const incrementLikes = (by: number) => {
	likes += by;
	return likes;
};

export const addLikes = action(input, async ({ incrementBy }) => {
	await new Promise((res) => setTimeout(res, 2000));

	const likesCount = incrementLikes(incrementBy);

	revalidatePath("/test/fake-db-same-file");

	return {
		likesCount,
	};
});
