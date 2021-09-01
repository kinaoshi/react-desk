import Link from "next/link";
import classes from "src/components/Header/Header.module.css";
import About from "src/pages";

export const Header = () => {
	const NAV_ITEMS = [
		{ href: "/", label: "Index" },
		{ href: "/posts", label: "Posts" },
	];
	return (
		<header className={classes.header}>
			{NAV_ITEMS.map((item) => {
				return (
					<Link key={item.href} href={item.href}>
						<a className={classes.anchor}>{item.label}</a>
					</Link>
				);
			})}
	
		</header>
	);
};
