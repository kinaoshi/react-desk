import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "../styles/Home.module.css";

export default function Home() {
	const [count, setCount] = useState(1);
	const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
	const [array, setArray] = useState([]);

	const handleClick = useCallback(() => {
		if (count < 10) {
			setCount((PrevCount) => PrevCount + 1);
		}
	}, [count]);
	useEffect(() => {
		document.body.style.backgroundColor = "lightblue";
		return () => {
			document.body.style.backgroundColor = "";
		};
	}, [count]);
	const handleChange = useCallback((e) => {
		if (e.target.value.length >= 5) {
			alert("5文字以内にして下さい");
			return;
		}
		setText(e.target.value.trim());
	}, []);

	const handleDisplay = () => {
		setIsShow((prevIsShow) => !prevIsShow);
	};
	const handleAdd = useCallback(() => {
    setArray((prevArray) => {
		  
			if(prevArray.some((item) => item === text)) {
				alert("同じ要素が既に存在します");
				return prevArray;
			}
			return [...prevArray,text];
		})
	},[text]);
	return (
		<div className={classes.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			{isShow ? <h1>{count}</h1> : null}
			<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
			<button href="./about" onClick={handleClick}>
				カウンター#14
			</button>
			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map(item => {
					return(
						<li key={item}>{item}</li>
					)
				})}
			</ul>
			<Main page="index" />
			<Footer />
		</div>
	);
}
