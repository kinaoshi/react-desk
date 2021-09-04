import Head from "next/head";
import { CommentsComponent } from "src/components/Comments";
import { Header } from "src/components/Header";



const Users = () => {
	return (
		<div>
			<Head>
				<title>Users Page</title>
			</Head>
			<Header />
			<CommentsComponent />
		</div>
	);
};
export default Users;
