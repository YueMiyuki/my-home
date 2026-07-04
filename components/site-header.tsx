"use client";

import {
	Header,
	HeaderName,
	HeaderNavigation,
	HeaderMenuItem,
	HeaderGlobalBar,
	HeaderGlobalAction,
	SkipToContent,
} from "@carbon/react";
import { Asleep, Light, LogoGithub } from "@carbon/icons-react";
import { useTheme } from "@/components/theme-provider";

export function SiteHeader() {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "g100";

	return (
		<Header aria-label="Miyuki Yue">
			<SkipToContent />
			<HeaderName href="/" prefix="">
				miyuki-yue.dev
			</HeaderName>
			<HeaderNavigation aria-label="Site sections">
				<HeaderMenuItem href="#about">About</HeaderMenuItem>
				<HeaderMenuItem href="#model-card">Model card</HeaderMenuItem>
				<HeaderMenuItem href="#stack">Stack</HeaderMenuItem>
				<HeaderMenuItem href="#projects">Projects</HeaderMenuItem>
				<HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
			</HeaderNavigation>
			<HeaderGlobalBar>
				<HeaderGlobalAction
					aria-label="View GitHub profile"
					onClick={() =>
						window.open(
							"https://github.com/YueMiyuki",
							"_blank",
							"noopener,noreferrer",
						)
					}
				>
					<LogoGithub size={20} />
				</HeaderGlobalAction>
				<HeaderGlobalAction
					aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
					tooltipAlignment="end"
					onClick={toggleTheme}
				>
					{isDark ? <Light size={20} /> : <Asleep size={20} />}
				</HeaderGlobalAction>
			</HeaderGlobalBar>
		</Header>
	);
}
