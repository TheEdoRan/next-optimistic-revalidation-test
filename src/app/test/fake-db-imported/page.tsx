import AddLikesForm from "./addlikes-form";
import { getLikes } from "./db";

export const metadata = {
	title: "Fake DB imported test",
};

export default function FakeDBImportedPage() {
	const likesCount = getLikes();
	return (
		<>
			<h1 className="text-4xl">Fake DB imported test</h1>
			<pre style={{ marginTop: "1rem" }}>
				Server state: {JSON.stringify(likesCount)}
			</pre>
			<AddLikesForm likesCount={likesCount} />
		</>
	);
}
