import Link from "next/link";



export const Header = () => {
	const NAV_ITEMS = [
		{ href: "/", label: "Index#30" },
		{ href: "/posts", label: "Posts" },
		{ href: "/users", label: "Users" },
		{ href: "/comments", label: "Comments" },
	];
	return (
		<header className="flex justify-center items-center border-b min-w-full h-24 mb-4">
			{NAV_ITEMS.map((item) => {
				return (
					<Link key={item.href} href={item.href}>
						<a className="inline-block py-2 px-6 text-xl  hover:text-blue-500 focus:text-pink-600 active:text-green-600">{item.label}</a>
					</Link>
				);
			})}
		</header>
	);
};
