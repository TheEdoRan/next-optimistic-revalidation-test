import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<h1 className="text-5xl font-semibold">Tests</h1>
			<div className="mt-6 text-3xl flex flex-col items-center justify-center space-y-4">
				<Link href="/test/fake-db-imported">
					Fake DB imported (not working)
				</Link>
				<Link href="/test/fake-db-same-file">Fake DB same file (working)</Link>{" "}
				<Link href="/test/prisma-sqlite">Prisma SQLite (working)</Link>{" "}
			</div>
		</main>
	);
}
