"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps {
	children: ReactNode;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	className?: string;
	as?: "div" | "section" | "li";
}
export function Reveal({
	children,
	delay = 0,
	direction = "up",
	className = "",
	as = "div",
}: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	const Tag = as;

	return (
		<Tag
			ref={ref as never}
			className={`reveal reveal--${direction} ${visible ? "is-visible" : ""} ${className}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</Tag>
	);
}
