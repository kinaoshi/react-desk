import Head from "next/head";
import { useCallback, useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "../styles/Home.module.css";



export default function Home() {
  
	const foo = 1;
	const handleClick=useCallback((e)=>  {
		console.log(e.target.href);
		e.preventDefault();
		alert(foo);
	},[]);
    useEffect(() => {
		document.body.style.backgroundColor="lightblue"
		return ()=> {
			document.body.style.backgroundColor=""
		}
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
