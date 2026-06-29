"use client";

const keywords = [
	"TypeScript",
	"React",
	"Next.js",
	"Rust",
	"Tauri",
	"Node.js",
	"Vue",
	"Docker",
	"PostgreSQL",
	"GraphQL",
	"Tailwind",
	"Linux",
	"WebGL",
	"Bun",
];

export function Marquee() {
	const items = [...keywords, ...keywords];

	return (
		<div className="marquee" aria-hidden="true">
			<div className="marquee__track">
				{items.map((word, i) => (
					<span className="marquee__item" key={`${word}-${i}`}>
						<span className="marquee__dot" />
						{word}
					</span>
				))}
			</div>
		</div>
	);
}
