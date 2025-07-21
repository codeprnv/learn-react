/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Link } from "react-router-dom";
import { getContacts } from "../utils/contactApi.js";

export const contactsLoader = async () => {
	return { contacts: await getContacts() };
};

const Contacts = () => {
	const { contacts } = useLoaderData();
	return (
		<div
			className="bg-[#4a5759] text-[#dedbd2] w-full flex flex-col items-center gap-6 max-w-[45vw] h-fit p-5 border-2 border-black rounded-md"
			border={2}
		>
			<div className="font-bold text-xl underline">All Contacts</div>
			<ul className="flex flex-col gap-4">
				{contacts.map((c) => (
					<li key={c.id}>
						<Link
							to={`/contacts/${c.id}`}
							className="hover:text-blue-600 hover:text-lg "
						>
							{c.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Contacts;
