import React from "react";

const App = () => {
	const [counter, setCounter] = React.useState(0);

  const addValue = () => {
    setCounter((prevCounter) => Math.min(prevCounter + 1, 20));
    if (counter == 20) {
			alert("Max value has reached!!");
		}
	};

  const removeValue = () => {
		setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    if (counter == 0) {
			alert("Cannot go below 0");
		}
	};

	return (
		<div className="flex flex-col w-screen h-screen items-center justify-center text-3xl font-bold gap-5">
			<div className="flex">
				Counter: &nbsp; <p>{counter}</p>
			</div>
			<button onClick={addValue}>Add</button>
			<button onClick={removeValue}>Remove</button>
		</div>
	);
};

export default App;
