import Link from "next/link";
import { useUsers } from "src/hooks/useUsers";

export const UsersComponent = () => {
	const { data, error, isLoading, isEmpty } = useUsers();
	if (isLoading) {
		return <p>ローディング中</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}
	if (isEmpty) {
		return <p>データは空です</p>;
	}
	return (
		<ol>
			{data.map((user) => {
				return (
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a>{`${user.name}(${user.email})`}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};