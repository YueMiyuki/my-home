"use client";

import { Grid, Column, Tile, Button } from "@carbon/react";
import { LogoDiscord, Email, Location, ArrowRight } from "@carbon/icons-react";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";

const channels = [
	{
		icon: LogoDiscord,
		label: "Discord",
		hint: "Hit me up here!",
		value: "miyuki.yue_3747",
	},
	{
		icon: Email,
		label: "Email",
		hint: "For work stuff",
		value: "me@miyuki-yue.dev",
		href: "mailto:me@miyuki-yue.dev",
	},
	{
		icon: Location,
		label: "Location",
		hint: "Where I'm at",
		value: "Hong Kong",
	},
];

export function Contact() {
	return (
		<section id="contact" className="section section--alt">
			<Grid>
				<Column sm={4} md={8} lg={16}>
					<Reveal direction="up">
						<span className="open-to-work">
							<span className="open-to-work__dot" aria-hidden="true" />
							Open to work — available for new roles &amp; freelance
						</span>
						<h2 className="section__title">Let&apos;s Chat</h2>
						<p className="section__subtitle">
							Got a cool project idea, a role to fill, or just wanna say hi?
							I&apos;m always down to chat about new opportunities and collabs!
						</p>
					</Reveal>
				</Column>

				<Column sm={4} md={8} lg={16}>
					<div className="card-grid">
						{channels.map((channel, i) => {
							const Icon = channel.icon;
							const inner = (
								<Tile className="contact-card spotlight">
									<span className="contact-card__icon" aria-hidden="true">
										<Icon size={24} />
									</span>
									<span className="contact-card__hint">{channel.hint}</span>
									<span className="contact-card__label">{channel.label}</span>
									<span className="contact-card__value">{channel.value}</span>
								</Tile>
							);
							return (
								<Reveal
									key={channel.label}
									direction="up"
									delay={(i % 3) * 90}
									className="card-grid__item"
								>
									{channel.href ? (
										<a href={channel.href} className="contact-card__wrap">
											{inner}
										</a>
									) : (
										inner
									)}
								</Reveal>
							);
						})}
					</div>
				</Column>

				<Column sm={4} md={8} lg={16}>
					<Reveal direction="up">
						<Tile className="cta-card spotlight">
							<span className="cta-card__glow" aria-hidden="true" />
							<h3 className="cta-card__title">
								Looking for a developer? Let&apos;s build something.
							</h3>
							<p className="cta-card__text">
								I&apos;m currently open to full-time roles, freelance gigs, and
								fun collaborations. Drop me a line.
							</p>
							<Magnetic strength={0.5}>
								<Button renderIcon={ArrowRight} href="mailto:me@miyuki-yue.dev">
									Say hello
								</Button>
							</Magnetic>
						</Tile>
					</Reveal>
				</Column>
			</Grid>
		</section>
	);
}
