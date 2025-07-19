import { createContext, useContext, useState } from "react";

const ColorContext = createContext("");

// eslint-disable-next-line react-refresh/only-export-components
export const useColor = () => {
	const ctx = useContext(ColorContext);
	if (!ctx) throw new Error("useColor must be used with ColorProvider");
	return ctx;
};

export const ColorProvider = ({ children }) => {
	const [color, setColor] = useState("black");
	return (
		<ColorContext.Provider value={{ color, setColor }}>
			{children}
		</ColorContext.Provider>
	);
};
