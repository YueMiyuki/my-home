"use client";

import { Grid, Column, Button, Tag } from "@carbon/react";
import { ArrowRight, LogoGithub } from "@carbon/icons-react";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { TypeCycle } from "@/components/type-cycle";
import { Magnetic } from "@/components/magnetic";
import { ScrambleText } from "@/components/scramble-text";

const stats = [
	{ value: 3, suffix: "+", label: "Years of fun" },
	{ value: 50, suffix: "+", label: "Projects built" },
	{ value: 76, suffix: "", label: "GitHub stars" },
	{ value: null, display: "\u221E", label: "Coffee cups" },
];

export function Hero() {
	return (
		<section className="hero">
			<div className="hero__aurora" aria-hidden="true" />
			<div className="hero__grid-lines" aria-hidden="true" />
			<div className="hero__orb hero__orb--a" aria-hidden="true" />
			<div className="hero__orb hero__orb--b" aria-hidden="true" />
			<div className="hero__particles" aria-hidden="true">
				{Array.from({ length: 14 }).map((_, i) => (
					<span key={i} className="hero__particle" />
				))}
			</div>
			<Grid className="hero__content">
				<Column sm={4} md={8} lg={10}>
					<Reveal direction="up" delay={80}>
						<h1 className="hero__title">
							Hey there! I&apos;m{" "}
							<ScrambleText
								text="Miyuki Yue"
								delay={500}
								className="hero__title-accent"
							/>
						</h1>
					</Reveal>
					<Reveal direction="up" delay={160}>
						<p className="hero__subtitle">
							A full-stack dev who loves building cool stuff and shipping things
							that feel fast.
						</p>
					</Reveal>
					<Reveal direction="up" delay={200}>
						<p className="hero__typeline">
							<span className="hero__typeline-label">I build with</span>
							<TypeCycle
								words={["TypeScript", "Rust", "Next.js", "Vue", "Tauri"]}
							/>
						</p>
					</Reveal>
					<Reveal direction="up" delay={240}>
						<div className="hero__actions">
							<Magnetic>
								<Button renderIcon={ArrowRight} href="#projects">
									Check out my work
								</Button>
							</Magnetic>
							<Magnetic>
								<Button
									kind="tertiary"
									renderIcon={LogoGithub}
									href="https://github.com/YueMiyuki"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</Button>
							</Magnetic>
						</div>
					</Reveal>
				</Column>

				<Column sm={4} md={8} lg={16}>
					<div className="stat-grid">
						{stats.map((stat, i) => (
							<Reveal
								key={stat.label}
								direction="up"
								delay={320 + i * 90}
								className="stat-card"
							>
								<span className="stat-card__value">
									<CountUp
										value={stat.value}
										suffix={stat.suffix}
										display={stat.display}
									/>
								</span>
								<span className="stat-card__label">{stat.label}</span>
							</Reveal>
						))}
					</div>
				</Column>
			</Grid>
			<a href="#about" className="hero__scroll" aria-label="Scroll to about">
				<span className="hero__scroll-text">Scroll</span>
				<span className="hero__scroll-line" aria-hidden="true" />
			</a>
		</section>
	);
}
