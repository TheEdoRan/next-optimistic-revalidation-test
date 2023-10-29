import Link from "next/link";
import { type ReactNode } from "react";

export default function TestsLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen flex items-center justify-center flex-col">
			{children}
			<Link href="/" className="text-3xl font-semibold mt-8">
				Go to home
			</Link>
		</div>
	);
}
