/* eslint-disable react-refresh/only-export-components */
import { redirect, Form, useLoaderData } from "react-router-dom";
import {
	createContact,
	getContact,
	updateContact,
} from "../utils/contactApi.js";

export const contactFormAction = async ({ request, params }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	if (params.contactId) {
		await updateContact(params.contactId, data);
	} else {
		await createContact(data);
	}
	return redirect("/");
};

export const contactLoader = async ({ params }) => {
	return { contact: await getContact(params.contactId) };
};

const ContactForm = () => {
	const { contact } = useLoaderData() || {};
	return (
		<Form
			method="post"
			className="bg-[#4a5759] text-[#dedbd2] flex flex-col gap-10 h-fit min-w-[75vw] max-w-[85vw] md:min-w-[40vw] lg:min-w-[25vw] md:max-w-[55vw] p-6 border-2 rounded-lg border-black "
		>
			<input
				type="text"
				name="name"
				placeholder="Name"
				defaultValue={contact?.name}
				required
				className=" p-3 rounded-md outline-2 focus:outline-red-400 font-semibold text-lg"
			/>
			<input
				type="text"
				name="email"
				placeholder="Email"
				defaultValue={contact?.email}
				required
				className=" p-3 rounded-md outline-2 focus:outline-red-400 font-semibold text-lg"
			/>
			<button
				type="submit"
				className="bg-[#293031] rounded-lg w-full py-2 hover:cursor-pointer hover:bg-[#44737e]"
			>
				Save
			</button>
		</Form>
	);
};

export default ContactForm;
