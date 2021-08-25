import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "../styles/Home.module.css";

const About=(props)=> {
	return (
		<div className={classes.container}>
			<Head>
				<title>About Page</title>
			</Head>
			<Header />
			<button href="./about" onClick={props.handleClick}>
				ボタン#18
			</button>
			<button onClick={props.handleDisplay}>
				{props.isShow ? "非表示" : "表示"}
			</button>
			{props.isShow ? <h1>{props.doubleCount}</h1> : null}
			<input type="text" value={props.text} onChange={props.handleChange} />
			<button onClick={props.handleAdd}>追加</button>
			<ul>
				{props.array.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
			<Main page="about" />

			<Footer />
		</div>
	);
}
export default About;
