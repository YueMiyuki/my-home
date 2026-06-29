"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
	{ id: "top", label: "Top" },
	{ id: "about", label: "About" },
	{ id: "stack", label: "Stack" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
];

export function PageEffects() {
	const [progress, setProgress] = useState(0);
	const [active, setActive] = useState("top");

	useEffect(() => {
		function onScroll() {
			const doc = document.documentElement;
			const max = doc.scrollHeight - doc.clientHeight;
			setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!window.matchMedia("(pointer: fine)").matches) return;
		const hero = document.querySelector<HTMLElement>(".hero");
		if (!hero) return;

		const glow = document.createElement("div");
		glow.className = "cursor-glow";
		glow.setAttribute("aria-hidden", "true");
		document.body.appendChild(glow);

		let raf = 0;
		function onMove(e: PointerEvent) {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
				glow.style.opacity = "1";
			});
		}
		function onLeave() {
			glow.style.opacity = "0";
		}
		hero.addEventListener("pointermove", onMove, { passive: true });
		hero.addEventListener("pointerleave", onLeave);
		return () => {
			cancelAnimationFrame(raf);
			hero.removeEventListener("pointermove", onMove);
			hero.removeEventListener("pointerleave", onLeave);
			glow.remove();
		};
	}, []);

	useEffect(() => {
		const targets = SECTIONS.map((s) =>
			s.id === "top" ? null : document.getElementById(s.id),
		);
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) setActive(entry.target.id);
				}
			},
			{ rootMargin: "-45% 0px -45% 0px", threshold: 0 },
		);
		targets.forEach((t) => t && observer.observe(t));

		function onTop() {
			if (window.scrollY < 200) setActive("top");
		}
		window.addEventListener("scroll", onTop, { passive: true });
		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", onTop);
		};
	}, []);

	function goTo(id: string) {
		if (id === "top") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<>
			<div
				className="scroll-progress"
				style={{ transform: `scaleX(${progress / 100})` }}
				aria-hidden="true"
			/>
			<nav className="section-dots" aria-label="Section navigation">
				{SECTIONS.map((s) => (
					<button
						key={s.id}
						type="button"
						className={`section-dots__dot${
							active === s.id ? " is-active" : ""
						}`}
						aria-label={`Go to ${s.label}`}
						aria-current={active === s.id ? "true" : undefined}
						onClick={() => goTo(s.id)}
					>
						<span className="section-dots__label">{s.label}</span>
					</button>
				))}
			</nav>
		</>
	);
}
