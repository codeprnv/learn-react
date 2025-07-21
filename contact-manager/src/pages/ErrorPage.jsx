import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
	const { error } = useRouteError();
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center text-2xl text-red-700 font-bold">
			<h2>Error</h2>
			<pre>{error.statusText || error.message}</pre>
		</div>
	);
};

export default ErrorPage;
