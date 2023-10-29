import prisma from "@/lib/prisma";
import AddLikesForm from "./addlikes-form";

export const metadata = {
	title: "Prisma SQLite test",
};

export default async function PrismaSQLitePage() {
	const { likes: likesCount } = await prisma.post.findUniqueOrThrow({
		where: { id: 1 },
	});

	return (
		<>
			<h1 className="text-4xl">Prisma SQLite test</h1>
			<pre style={{ marginTop: "1rem" }}>
				Server state: {JSON.stringify(likesCount)}
			</pre>
			<AddLikesForm likesCount={likesCount} />
		</>
	);
}
