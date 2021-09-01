import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";
import classes from "src/styles/Home.module.css";

const Posts = () => {
	return (
		<div className={classes.container}>
			<Head>
				<title>Posts Page</title>
			</Head>
			<Header />
			<PostsComponent />
		</div>
	);
};
export default Posts;
