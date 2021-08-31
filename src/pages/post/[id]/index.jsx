import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Header } from "src/components/Header";

import classes from "src/styles/Home.module.css";

const PostId = () => {
    const router = useRouter();
    console.log(router.query.id);
	return (
		<div className={classes.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			<div>{router.query.id}</div>
		</div>
	);
};
export default PostId;
