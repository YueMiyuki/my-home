import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { PageEffects } from "@/components/page-effects";
import "./globals.scss";

export const metadata: Metadata = {
	title: "Miyuki Yue",
	description: "Miyuki Yue's personal website",
};

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#161616" },
	],
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${GeistSans.variable} ${GeistMono.variable}`}
		>
			<body className={GeistSans.className}>
				<ThemeProvider>
					<PageEffects />
					<SiteHeader />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
