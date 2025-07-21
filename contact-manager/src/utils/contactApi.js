let contacts = [{ id: "1", name: "John Doe", email: "john@example.com" }];


export const getContacts = async () => {
	return contacts
};
export const getContact = async (id) => contacts.find((c) => c.id === id);
export const createContact = async (data) => {
	const newContact = { id: Date.now().toString(), ...data };
	contacts.push(newContact);
	return newContact;
};
export const updateContact = async (id, data) => {
	const index = contacts.findIndex((c) => c.id === id);
	if (index !== -1) contacts[index] = { ...contacts[index], ...data };
};
export const deleteContact = async (id) => {
	contacts = contacts.filter((c) => c.id !== id);
};
