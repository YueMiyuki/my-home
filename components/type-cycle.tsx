"use client";

import { useEffect, useState } from "react";

interface TypeCycleProps {
	words: string[];
	typeMs?: number;
	deleteMs?: number;
	holdMs?: number;
}

export function TypeCycle({
	words,
	typeMs = 90,
	deleteMs = 45,
	holdMs = 1400,
}: TypeCycleProps) {
	const [text, setText] = useState("");
	const [wordIndex, setWordIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}, []);

	useEffect(() => {
		if (reduced) return;
		const word = words[wordIndex % words.length];

		if (!deleting && text === word) {
			const t = setTimeout(() => setDeleting(true), holdMs);
			return () => clearTimeout(t);
		}
		if (deleting && text === "") {
			setDeleting(false);
			setWordIndex((i) => (i + 1) % words.length);
			return;
		}

		const next = deleting
			? word.slice(0, text.length - 1)
			: word.slice(0, text.length + 1);
		const t = setTimeout(() => setText(next), deleting ? deleteMs : typeMs);
		return () => clearTimeout(t);
	}, [text, deleting, wordIndex, words, reduced, typeMs, deleteMs, holdMs]);

	if (reduced) {
		return <span className="type-cycle">{words[0]}</span>;
	}

	return (
		<span className="type-cycle" aria-live="polite">
			{text}
			<span className="type-cycle__caret" aria-hidden="true" />
		</span>
	);
}
