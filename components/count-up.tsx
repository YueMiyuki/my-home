"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
	value: number | null;
	suffix?: string;
	display?: string;
	durationMs?: number;
}

export function CountUp({
	value,
	suffix = "",
	display,
	durationMs = 1400,
}: CountUpProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const [current, setCurrent] = useState(0);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node || value === null) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStarted(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.4 },
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, [value]);

	useEffect(() => {
		if (!started || value === null) return;

		const prefersReduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (prefersReduced) {
			setCurrent(value);
			return;
		}

		let raf = 0;
		const start = performance.now();
		const tick = (now: number) => {
			const progress = Math.min((now - start) / durationMs, 1);

			const eased = 1 - Math.pow(1 - progress, 3);
			setCurrent(Math.round(eased * value));
			if (progress < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [started, value, durationMs]);

	return (
		<span ref={ref}>{value === null ? display : `${current}${suffix}`}</span>
	);
}
