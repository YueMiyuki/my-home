"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#________";

interface ScrambleTextProps {
	text: string;
	delay?: number;
	className?: string;
}
export function ScrambleText({
	text,
	delay = 0,
	className,
}: ScrambleTextProps) {
	const [output, setOutput] = useState(text);
	const frame = useRef(0);
	const raf = useRef(0);

	useEffect(() => {
		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (reduce) {
			setOutput(text);
			return;
		}

		let startedAt = 0;
		const settleFrames = text.length * 3 + 30;

		function tick(now: number) {
			if (!startedAt) startedAt = now;
			const elapsed = now - startedAt;
			frame.current += 1;

			const revealCount = Math.max(0, (frame.current - 0) / 3);
			let next = "";
			for (let i = 0; i < text.length; i++) {
				if (text[i] === " ") {
					next += " ";
				} else if (i < revealCount) {
					next += text[i];
				} else {
					next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
				}
			}
			setOutput(next);

			if (frame.current < settleFrames && revealCount <= text.length) {
				raf.current = requestAnimationFrame(tick);
			} else {
				setOutput(text);
			}
		}

		const timer = window.setTimeout(() => {
			raf.current = requestAnimationFrame(tick);
		}, delay);

		return () => {
			window.clearTimeout(timer);
			cancelAnimationFrame(raf.current);
		};
	}, [text, delay]);

	return (
		<span className={className} aria-label={text}>
			<span aria-hidden="true">{output}</span>
		</span>
	);
}
