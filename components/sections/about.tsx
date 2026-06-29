"use client";

import { Grid, Column, Tile } from "@carbon/react";
import {
	Code,
	Cloud,
	Meter,
	Cafe,
	GameConsole,
	Development,
} from "@carbon/icons-react";
import { Reveal } from "@/components/reveal";

const cards = [
	{
		icon: Code,
		title: "Full-Stack Development",
		body: "Building web apps with React, Next.js, and Node.js. I'm all about clean code and making things work smoothly.",
	},
	{
		icon: Cloud,
		title: "DevOps & Hosting",
		body: "Running mdesk.tech — keeping servers happy and projects online. Cloud infrastructure is my playground.",
	},
	{
		icon: Meter,
		title: "Performance Junkie",
		body: "Speed matters! I optimize everything to make apps feel lightning-fast. Nobody likes waiting around.",
	},
	{
		icon: Cafe,
		title: "Coffee Powered",
		body: "Seriously, coffee is life. It's the fuel behind every late-night coding session and breakthrough moment.",
	},
	{
		icon: GameConsole,
		title: "Gamer at Heart",
		body: "When I'm not coding, I'm gaming. Love building communities and connecting with awesome people.",
	},
	{
		icon: Development,
		title: "Open Source Fan",
		body: "Contributing to projects like ward-next and fas-rs. Community-driven dev is where it's at!",
	},
];

export function About() {
	return (
		<section id="about" className="section">
			<Grid>
				<Column sm={4} md={8} lg={16}>
					<Reveal direction="up">
						<h2 className="section__title">A Bit About Me</h2>
						<p className="section__subtitle">
							Just a dev from Hong Kong who loves creating cool web stuff and
							hanging out with awesome communities online.
						</p>
					</Reveal>
				</Column>

				<Column sm={4} md={8} lg={16}>
					<div className="card-grid">
						{cards.map((card, i) => {
							const Icon = card.icon;
							return (
								<Reveal
									key={card.title}
									direction="up"
									delay={(i % 3) * 90}
									className="card-grid__item"
								>
									<Tile className="about-card spotlight tilt">
										<span className="about-card__icon" aria-hidden="true">
											<Icon size={24} />
										</span>
										<h3 className="about-card__title">{card.title}</h3>
										<p className="about-card__body">{card.body}</p>
									</Tile>
								</Reveal>
							);
						})}
					</div>
				</Column>
			</Grid>
		</section>
	);
}
