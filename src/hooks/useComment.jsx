import { useRouter } from "next/dist/client/router";
import useSWR from "swr";


export const useComment = () => {
	const router = useRouter();
	const { data, error } = useSWR(
		router.query.id
			? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
			: null
	);
	return {
		data,
		error,
		isLoading: !error && !data,
		isEmpty: data && data.length === 0,
	};
};