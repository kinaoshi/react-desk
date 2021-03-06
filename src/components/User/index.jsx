import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const UserComponent = () => {
	const { data, error, isLoading } = useUser();
	console.log(data);
	if (isLoading) {
		return <p>ローディング中</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}

	return (
		<div>
			<h1 className="font-bold text-3xl">{data.name}</h1>
			<h2 className="text-xl font-bold mt-10">詳細</h2>
			<ul className="list-inside list-disc mt-2 text-xl">
				<li>ID番号：{data.id}</li>
				<li>アカウント名：{data.username}</li>
				<li>メール：{data.email}</li>
				<li>電話番号{data.phone}</li>
				<li>住所：{data.address.city}</li>
				<li>Webサイト：{data.website}</li>
				<li>勤務先：{data.company.name}</li>
			</ul>
			<h2 className="text-xl font-bold mt-10">投稿</h2>
			<div className="mt-2">
			<PostsByUserId id={data.id} />
			</div>
		</div>
	);
};
