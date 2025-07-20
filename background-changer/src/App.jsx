import { useColor } from "./context/ColorContext";
import ColorButtons from "./components/ColorButtons";
import { useMediaQuery } from "react-responsive";

const App = () => {
	const { color, setColor } = useColor();
	const colorsArray = [
		"Red",
		"Yellow",
		"Green",
		"Lavender",
		"Skyblue",
		"Pink",
		"Black",
	];
	const isMobile = useMediaQuery({ maxWidth: 767 });

	const changeColor = (e) => {
		const val = e.target.value;
		try {
			if (val == "white") {
				alert(`${val} color is not allowed!!`);
				throw new Error();
			}
			if (val == "" || val == " ") throw new Error();
			setColor(val);
			// eslint-disable-next-line no-unused-vars
		} catch (err) {
			setColor("black");
			// console.error("Error:", err);
		}
	};
	return (
		<div
			style={{ backgroundColor: color }}
			className={`flex flex-col w-full h-screen text-white
			} items-center justify-center gap-6`}
		>
			<h1 className="font-bold text-2xl">Enter your color</h1>
			<input
				id="colorInput"
				type="text"
				placeholder="Enter the color name"
				className="outline-red-400 outline-2 focus:outline-2 focus:outline-white rounded-lg p-2"
				onChange={changeColor}
			/>
			<div className="bg-white rounded-xl p-2 md:p-4 text-black w-fit fixed bottom-10 md:bottom-20 h-fit">
				<div className="flex gap-2 md:gap-8 items-center w-full justify-center">
					{isMobile
						? colorsArray
								.slice(0, 4)
								.map((color, index) => (
									<ColorButtons colorName={color} key={index} />
								))
						: colorsArray.map((color, index) => (
								<ColorButtons colorName={color} key={index} />
						  ))}
				</div>
			</div>
		</div>
	);
};

export default App;
