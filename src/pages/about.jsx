import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
				<title>About Page</title>
			</Head>
      <Header/>
     <Main page="about"/>

      <Footer />
    </div>
  );
}
