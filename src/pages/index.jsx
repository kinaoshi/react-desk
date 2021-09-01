import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";

const About=()=> {
	return (
		<div className={classes.container}>
			<Head>
				<title>About Page</title>
			</Head>
			<Header />
			<h1>Next.jsで学ぶreact講座</h1>
			<p>JSONPlaceholderのAPIを色々叩いてみるよ！</p>
			<p>#25から</p>
		</div>
	);
}
export default About;
