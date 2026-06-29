"use client";

import { useEffect } from "react";
export function Spotlight() {
	useEffect(() => {
		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const coarse = window.matchMedia("(pointer: coarse)").matches;
		if (reduce || coarse) return;

		let tilted: HTMLElement | null = null;

		function resetTilt() {
			if (tilted) {
				tilted.style.setProperty("--tilt-x", "0deg");
				tilted.style.setProperty("--tilt-y", "0deg");
				tilted = null;
			}
		}

		function onMove(event: PointerEvent) {
			const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
				".spotlight",
			);
			if (!target) {
				resetTilt();
				return;
			}
			const rect = target.getBoundingClientRect();
			const px = event.clientX - rect.left;
			const py = event.clientY - rect.top;
			target.style.setProperty("--spot-x", `${px}px`);
			target.style.setProperty("--spot-y", `${py}px`);

			if (target.classList.contains("tilt")) {
				if (tilted && tilted !== target) resetTilt();
				tilted = target;
				const rx = (0.5 - py / rect.height) * 8;
				const ry = (px / rect.width - 0.5) * 8;
				target.style.setProperty("--tilt-x", `${rx.toFixed(2)}deg`);
				target.style.setProperty("--tilt-y", `${ry.toFixed(2)}deg`);
			} else {
				resetTilt();
			}
		}

		window.addEventListener("pointermove", onMove, { passive: true });
		return () => {
			window.removeEventListener("pointermove", onMove);
			resetTilt();
		};
	}, []);

	return null;
}
