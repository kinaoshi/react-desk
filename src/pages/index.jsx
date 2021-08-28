import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";
import classes from "../styles/Home.module.css";

const Home = () => {
	return (
		<div className={classes.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			<Posts />
		</div>
	);
};
export default Home;
