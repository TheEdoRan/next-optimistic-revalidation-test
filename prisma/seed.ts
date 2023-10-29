import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
	const post = await prisma.post.findUnique({ where: { id: 1 } });

	if (!post) {
		await prisma.post.create({ data: { id: 1, likes: 42 } });
	}
}

run().catch(console.error);
