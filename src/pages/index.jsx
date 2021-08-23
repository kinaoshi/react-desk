import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "../styles/Home.module.css";



export default function Home() {
   const [count, setCount] = useState(1);
	
	const handleClick=(e)=>  {
	
		setCount ((count) => count + 1);
		setCount ((count) => count + 1);
		
	};
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
			<h1>{count}</h1>
			<button
				href="./about"
				onClick={handleClick}
			>
				カウンター
			</button>
			　　　　　　
			<Main page="index" />
			<Footer />
		</div>
	);
}
