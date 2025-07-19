import { useColor } from "../context/ColorContext";
const ColorButtons = ({ colorName }) => {
	const { setColor } = useColor();
	return (
		<button
			style={{ backgroundColor: colorName }}
			className={`px-5 py-2 rounded-xl ${
				colorName == "Black" || colorName == "black"
					? "text-white"
					: "text-black"
			}`}
			onClick={() => setColor(colorName)}
		>
			{colorName}
		</button>
	);
};

export default ColorButtons;
