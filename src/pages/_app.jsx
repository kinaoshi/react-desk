import Head from "next/head";
import "../styles/globals.css";

import { SWRConfig } from "swr";
import { Layout } from "src/components/Layout";
const MyApp = ({ Component, pageProps }) => {
	
	return (
		<>
			<SWRConfig
				value={{
					fetcher: (resource, init) =>
						fetch(resource, init).then((res) => res.json()),
				}}
			>
				<Head>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Layout>
				<Component {...pageProps}  />
				</Layout>
			</SWRConfig>
		</>
	);
};

export default MyApp;
