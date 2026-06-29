"use client";

import Image from "next/image";
import { Grid, Column, Tile, Tag, Button } from "@carbon/react";
import { LogoGithub, Launch, Star, ArrowUpRight } from "@carbon/icons-react";
import { Reveal } from "@/components/reveal";

const otherProjects = [
	{
		name: "ward-next",
		description:
			"A next-generation system protection and monitoring layer, built for speed and reliability.",
		tags: ["Rust", "Systems"],
		href: "https://github.com/YueMiyuki",
	},
	{
		name: "fas-rs",
		description:
			"Frame-aware scheduler written in Rust — squeezing smooth performance out of constrained hardware.",
		tags: ["Rust", "Performance"],
		href: "https://github.com/YueMiyuki",
	},
	{
		name: "mdesk.tech",
		description:
			"Self-hosted infrastructure and hosting platform keeping side projects online around the clock.",
		tags: ["DevOps", "Cloud"],
		href: "https://mdesk.tech",
	},
];

export function Projects() {
	return (
		<section id="projects" className="section projects">
			<div className="projects__decor" aria-hidden="true">
				<span className="projects__beam projects__beam--1" />
				<span className="projects__beam projects__beam--2" />
				<span className="projects__beam projects__beam--3" />
			</div>
			<Grid>
				<Column sm={4} md={8} lg={16}>
					<Reveal direction="up">
						<h2 className="section__title">Cool Stuff I&apos;ve Built</h2>
						<p className="section__subtitle">
							Some of my favorite open-source projects and side hustles.
						</p>
					</Reveal>
				</Column>

				<Column sm={4} md={8} lg={16}>
					<Reveal direction="up">
						<Tile className="featured-card spotlight">
							<span className="featured-card__beam" aria-hidden="true" />
							<div className="featured-card__body">
								<div className="featured-card__heading">
									<Tag type="purple" size="md">
										New release
									</Tag>
									<span className="featured-card__stars">
										<Star size={16} /> 76
									</span>
								</div>
								<h3 className="featured-card__title">Risuko</h3>
								<p className="featured-card__tagline">
									A full-featured download manager
								</p>
								<p className="featured-card__desc">
									Risuko downloads over HTTP, FTP, BitTorrent and magnet links
									behind a clean, easy-to-use interface. Rewritten in native
									Rust, it ships ~91% smaller bundles, ~70% less memory and ~90%
									lower peak CPU than the original — a Tauri v2 + Vue 3 desktop
									app for macOS, Windows, Linux and Android.
								</p>
								<div className="tag-row">
									<Tag type="red">Rust</Tag>
									<Tag type="green">Tauri v2</Tag>
									<Tag type="teal">Vue 3</Tag>
									<Tag type="blue">BitTorrent</Tag>
									<Tag type="cyan">P2P</Tag>
								</div>
								<div className="featured-card__actions">
									<Button
										renderIcon={LogoGithub}
										href="https://github.com/YueMiyuki/Risuko"
										target="_blank"
										rel="noreferrer"
									>
										View on GitHub
									</Button>
									<Button
										kind="tertiary"
										renderIcon={Launch}
										href="https://risuko.app"
										target="_blank"
										rel="noreferrer"
									>
										Official site
									</Button>
								</div>
							</div>
							<div className="featured-card__media">
								<div className="risuko-window">
									<div className="risuko-window__screen">
										<Image
											src="/images/risuko-light.png"
											alt="Risuko download manager interface in light mode showing the task list and filters"
											width={1280}
											height={1000}
											className="risuko-img risuko-img--light"
											priority
										/>
										<Image
											src="/images/risuko-dark.png"
											alt="Risuko download manager interface in dark mode showing the task list and filters"
											width={1280}
											height={1000}
											className="risuko-img risuko-img--dark"
											priority
										/>
										<span className="risuko-window__scan" aria-hidden="true" />
									</div>
								</div>
							</div>
						</Tile>
					</Reveal>
				</Column>

				<Column sm={4} md={8} lg={16}>
					<div className="card-grid">
						{otherProjects.map((project, i) => (
							<Reveal
								key={project.name}
								direction="up"
								delay={(i % 3) * 90}
								className="card-grid__item"
							>
								<Tile className="project-card spotlight">
									<div className="project-card__top">
										<LogoGithub size={24} />
										<ArrowUpRight size={20} className="project-card__arrow" />
									</div>
									<h3 className="project-card__title">
										<a
											href={project.href}
											target="_blank"
											rel="noreferrer"
											className="project-card__link"
										>
											{project.name}
										</a>
									</h3>
									<p className="project-card__desc">{project.description}</p>
									<div className="tag-row">
										{project.tags.map((tag) => (
											<Tag key={tag} type="gray">
												{tag}
											</Tag>
										))}
									</div>
								</Tile>
							</Reveal>
						))}
					</div>
				</Column>
			</Grid>
		</section>
	);
}
