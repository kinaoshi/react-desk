import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "../styles/Home.module.css";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";


export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
	const { text, array, handleChange, handleAdd } = useInputArray();
    useBgLightBlue();


	return (
		<div className={classes.container}>
			<Head>
				<title>About Page</title>
			</Head>
			<Header />
			{isShow ? <h1>{count}</h1> : null}
			<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
			<button href="./about" onClick={handleClick}>
				カウンター#16
			</button>
			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
			<Main page="about" />

			<Footer />
		</div>
	);
}
