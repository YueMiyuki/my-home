"use client";

import { Grid, Column } from "@carbon/react";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

const languages = [
	{ name: "TypeScript", value: 39 },
	{ name: "Rust", value: 35 },
	{ name: "Vue", value: 11 },
	{ name: "Python", value: 9 },
	{ name: "Kotlin", value: 6 },
];

export function TechStack() {
	return (
		<section id="stack" className="section section--alt">
			<Grid>
				<Column sm={4} md={8} lg={16}>
					<Reveal direction="up">
						<h2 className="section__title">My Tech Stack</h2>
						<p className="section__subtitle">
							The tools I use to build awesome stuff.
						</p>
					</Reveal>
				</Column>

				<Column sm={4} md={8} lg={10}>
					<ul className="stack-list">
						{languages.map((lang, i) => (
							<Reveal
								key={lang.name}
								as="li"
								direction="up"
								delay={i * 70}
								className="stack-list__row"
							>
								<div className="stack-list__meta">
									<span className="stack-list__name">{lang.name}</span>
									<span className="stack-list__pct">
										<CountUp value={lang.value} suffix="%" />
									</span>
								</div>
								<div className="stack-bar" aria-hidden="true">
									<span
										className="stack-bar__fill"
										style={{
											// @ts-expect-error CSS custom property
											"--target": `${Math.max(lang.value, 2)}%`,
										}}
									>
										<span className="stack-bar__tip" />
									</span>
								</div>
							</Reveal>
						))}
					</ul>
				</Column>
			</Grid>
		</section>
	);
}
