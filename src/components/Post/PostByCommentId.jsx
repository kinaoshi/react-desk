import Head from "next/head";

import { usePost } from "src/hooks/usePost";
import { useRouter } from "next/dist/client/router";
import { UserByUserId } from "src/components/User/UserByUserId";

export const PostByCommentId = (props) => {
	const router = useRouter();
	const { data, error, isLoading } = usePost(props.id);

	if (isLoading) {
		return <div>ローディング中</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}

	return <p>{data?.body}</p>;
};
