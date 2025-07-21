import { createBrowserRouter } from "react-router-dom";
import Root, { rootLoader } from "./pages/Root.jsx";
import Contacts, { contactsLoader } from "./pages/Contacts.jsx";
import ContactForm, { contactFormAction } from "./pages/ContactForm.jsx";
import ContactDetail, {
	contactLoader,
	deleteAction,
} from "./pages/ContactDetail.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		loader: rootLoader,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Contacts />,
				loader: contactsLoader,
			},
			{
				path: "/contacts/new",
				element: <ContactForm />,
				action: contactFormAction,
			},
			{
				path: "/contacts/:contactId",
				element: <ContactDetail />,
				loader: contactLoader,
				action: deleteAction,
			},
			{
				path: "/contacts/:contactId/edit",
				element: <ContactForm />,
				loader: contactLoader,
				action: contactFormAction,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

export default router;
