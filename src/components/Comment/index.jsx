import { PostByCommentId } from "src/components/Post/PostByCommentId";
import { useComment } from "src/hooks/useComment";

export const CommentComponent = () => {
	const { data, error, isLoading } = useComment();
	if (isLoading) {
		return <p>ローディング中</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}

	return (
		<div>
			<div className="text-lg">
				{data.name} ({data.email})
			</div>
			<h1 className="text-3xl font-bold">{data.body}</h1>
		
			<h2 className="text-xl font-bold mt-10">元の記事</h2>
			<PostByCommentId id={data.postId} />
		</div>
	);
};
