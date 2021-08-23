import Head from "next/head";
import { useCallback } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "../styles/Home.module.css";



export default function Home() {
  
	const handleClick=useCallback((e)=>  {
		const foo = 1;
		console.log(e.target.href);
		e.preventDefault();
		alert(foo);
	},[]);
    
	return (
		<div className={classes.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			<a
				href="./about"
				onClick={handleClick}
			>
				ボタン
			</a>
			　　　　　　
			<Main page="index" />
			<Footer />
		</div>
	);
}
