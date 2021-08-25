import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

import classes from "../styles/Home.module.css";

export default function Home(props) {
	const {
		count,
		isShow,
		handleClick,
		handleDisplay,
		text,
		array,
		handleChange,
		handleAdd,
	} = props;

	return (
		<div className={classes.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			{isShow ? <h1>{count}</h1> : null}
			<button href="./about" onClick={handleClick}>
				ボタン#18
			</button>
			<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
			<Main page="index" />
			<Footer />
		</div>
	);
}
