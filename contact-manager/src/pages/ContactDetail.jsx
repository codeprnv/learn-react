/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Form, redirect } from "react-router-dom";
import { getContact, deleteContact } from "../utils/contactApi.js";

export const contactLoader = async ({ params }) => {
	const contact = await getContact(params.contactId);
	if (!contact) throw new Response("Not Found", { status: 404 });
	return { contact };
};

export const deleteAction = async ({ params }) => {
	await deleteContact(params.contactId);
	return redirect("/");
};

const ContactDetail = () => {
	const { contact } = useLoaderData();
	return (
		<div className="bg-[#4a5759] text-[#dedbd2] flex flex-col gap-2 items-center rounded-lg border-2 border-black p-5 w-full max-w-[45vw] min-w-[35vw]">
			<div className="flex gap-2">
				<h2 className="font-semibold underline">Name:</h2>
				<p className="font-normal">{contact.name}</p>
			</div>
			<div className="flex gap-2">
				<h2 className="font-semibold underline">Email:</h2>
				<p className="font-normal">{contact.email}</p>
			</div>
			<Form method="post">
				<button
					type="submit"
					className="bg-red-600 p-2 rounded-lg flex items-center justify-center hover:cursor-pointer hover:bg-red-800"
				>
					Delete
				</button>
			</Form>
		</div>
	);
};

export default ContactDetail;
