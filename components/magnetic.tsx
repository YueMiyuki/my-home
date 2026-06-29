"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface MagneticProps {
	children: ReactNode;
	strength?: number;
	className?: string;
}
export function Magnetic({
	children,
	strength = 0.4,
	className = "",
}: MagneticProps) {
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const fine = window.matchMedia("(pointer: fine)").matches;
		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (!fine || reduced) return;

		function onMove(event: PointerEvent) {
			const target = ref.current;
			if (!target) return;
			const rect = target.getBoundingClientRect();
			const x = event.clientX - (rect.left + rect.width / 2);
			const y = event.clientY - (rect.top + rect.height / 2);
			target.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
		}

		function onLeave() {
			const target = ref.current;
			if (!target) return;
			target.style.transform = "translate(0, 0)";
		}

		element.addEventListener("pointermove", onMove);
		element.addEventListener("pointerleave", onLeave);
		return () => {
			element.removeEventListener("pointermove", onMove);
			element.removeEventListener("pointerleave", onLeave);
		};
	}, [strength]);

	return (
		<span ref={ref} className={`magnetic ${className}`}>
			{children}
		</span>
	);
}
