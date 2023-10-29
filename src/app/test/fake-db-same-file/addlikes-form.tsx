"use client";

import { useOptimisticAction } from "next-safe-action/hook";
import { addLikes } from "./action";

type Props = {
	likesCount: number;
};

const AddLikesForm = ({ likesCount }: Props) => {
	const { execute, result, status, optimisticData } = useOptimisticAction(
		addLikes,
		{ likesCount },
		(state, input) => {
			return {
				likesCount: state.likesCount + input.incrementBy,
			};
		}
	);

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					execute({ incrementBy: 100 });
				}}>
				<button
					type="submit"
					className="bg-black text-white font-semibold text-xl py-2 px-3 rounded-lg mt-6">
					Add likes
				</button>
			</form>
			<div className="mt-6">
				<pre>Optimistic data: {JSON.stringify(optimisticData)}</pre>{" "}
				<pre>Status: {status}</pre>
				<div>Action result:</div>
				<pre>{JSON.stringify(result, null, 1)}</pre>
			</div>
		</>
	);
};

export default AddLikesForm;
