import { getLikes } from "./action";
import AddLikesForm from "./addlikes-form";

export const metadata = {
	title: "Fake DB same file test",
};

export default function FakeDBSameFilePage() {
	const likesCount = getLikes();
	return (
		<>
			<h1 className="text-4xl">Fake DB same file test</h1>
			<pre style={{ marginTop: "1rem" }}>
				Server state: {JSON.stringify(likesCount)}
			</pre>
			<AddLikesForm likesCount={likesCount} />
		</>
	);
}
