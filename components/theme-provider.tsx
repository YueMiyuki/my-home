"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import { GlobalTheme } from "@carbon/react";

type CarbonTheme = "white" | "g100";

type ThemeContextValue = {
	theme: CarbonTheme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
	theme: "white",
	toggleTheme: () => {},
});

export function useTheme() {
	return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<CarbonTheme>("white");

	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		setTheme(media.matches ? "g100" : "white");

		const onChange = (e: MediaQueryListEvent) =>
			setTheme(e.matches ? "g100" : "white");
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.remove("cds--white", "cds--g100");
		root.classList.add(`cds--${theme}`);
	}, [theme]);

	const toggleTheme = () => setTheme((t) => (t === "white" ? "g100" : "white"));

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<GlobalTheme theme={theme}>{children}</GlobalTheme>
		</ThemeContext.Provider>
	);
}
