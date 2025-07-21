import { Outlet, NavLink } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const rootLoader = async () => {
	return { appName: "Contact-Manager" };
};
const Root = () => {
	const links = ["/", "/contacts/new"];
	const content = ["Home", "New Contact"];
	return (
		<div className="bg-[#f7e1d7] w-full h-screen flex flex-col items-center">
			<nav className="bg-[#EDAFB8] rounded-md flex gap-12 justify-center h-fit p-2 w-full max-w-[75vw] my-5 border-2 border-black">
				{links.map((link, index) => (
					<NavLink
						to={link}
						key={link}
						className={`bg-[#b0c4b1] px-4 py-2 rounded-lg hover:text-blue-700 border border-black`}
					>
						{content[index]}
					</NavLink>
				))}
			</nav>
			<br />
			<Outlet />
		</div>
	);
};

export default Root;
