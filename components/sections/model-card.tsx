"use client";

import { Column, Grid, Tile } from "@carbon/react";
import { Cafe, Code, Development, Meter } from "@carbon/icons-react";
import { Reveal } from "@/components/reveal";

const specs = [
	{ label: "Model ID", value: "miyuki-code-thinking" },
	{ label: "Runtime", value: "jit.deep-think" },
	{ label: "Best at", value: "Tasteful interfaces, useful tools, and shipping the small thing first." },
	{ label: "Training note", value: "Trained on plenty of low-quality data. Large params still require taste." },
];

const metrics = [
	{ label: "Context", value: "72k", note: "Can't remember shit" },
	{ label: "Reasoning", value: "10tk/s", note: "Fast thoughts, expensive bill" },
	{ label: "Answering", value: "0.3tk/s", note: "Eventually says the obvious" },
	{ label: "First token", value: "~30s", note: "Where did the ping came from???" },
	{ label: "SLA", value: "50%", note: "You never know" },
	{ label: "Coffee fix", value: "Probably", note: "Retry after one cup" },
];

const limits = [
	"72k context, minus system prompts, tools, browser state, and one tab opened for no reason.",
	"Idea overflow. Generates twelve directions, then needs a responsible adult to delete nine.",
	"Polish loop. May spend ten minutes aligning one pixel and call it taste.",
	"Excessive reasoning effort. Can turn a small answer into a full internal court case.",
	"Quality varies with input. Large params help, but they do not magically remove bad taste.",
];

const usageNotes = [
	"Give it a messy idea, a sharp constraint, and permission to delete the boring parts.",
	"Best results arrive after the brief explains what should not exist.",
	"For frontend work, include screenshots, references, and the vibe you refuse to ship.",
	"For agentic work, provide the goal and let the workflow argue with itself quietly.",
	"If anything goes wrong, buy it a coffee. Probably fixes it, or at least improves latency.",
];

export function ModelCard() {
	return (
		<section id="model-card" className="section section--alt model-card-section">
			<Grid>
				<Column sm={4} md={8} lg={10} className="model-card__main-column">
					<Reveal direction="up" delay={80} className="model-card__fill">
						<Tile className="model-card spotlight tilt">
							<div className="model-card__header">
								<span className="model-card__icon" aria-hidden="true">
									<Code size={28} />
								</span>
								<div>
									<p className="model-card__kicker">Model Card</p>
									<h3 className="model-card__id">miyuki-code-thinking</h3>
								</div>
							</div>

							<div className="model-card__metric-row" aria-label="Model metrics">
								{metrics.map((metric) => (
									<div key={metric.label} className="model-card__metric">
										<span className="model-card__metric-value">{metric.value}</span>
										<span className="model-card__metric-label">{metric.label}</span>
										<span className="model-card__metric-note">{metric.note}</span>
									</div>
								))}
							</div>

							<div className="model-card__spec-grid">
								{specs.map((spec) => (
									<div key={spec.label} className="model-card__fact">
										<span>{spec.label}</span>
										<strong>{spec.value}</strong>
									</div>
								))}
							</div>

						</Tile>
					</Reveal>
				</Column>

				<Column sm={4} md={8} lg={6} className="model-card__side-column">
					<div className="model-card__side-grid">
						<Reveal direction="up" delay={140}>
							<Tile className="model-card__note spotlight">
								<div className="model-card__note-title">
									<Meter size={22} />
									<h3>Known limits</h3>
								</div>
								<ul>
									{limits.map((limit) => (
										<li key={limit}>{limit}</li>
									))}
								</ul>
							</Tile>
						</Reveal>

						<Reveal direction="up" delay={200}>
							<Tile className="model-card__note spotlight">
								<div className="model-card__note-title">
									<Development size={22} />
									<h3>Usage notes</h3>
								</div>
								<ul>
									{usageNotes.map((note) => (
										<li key={note}>{note}</li>
									))}
								</ul>
								<p className="model-card__coffee">
									<Cafe size={18} /> Recovery path: coffee, then retry.
								</p>
							</Tile>
						</Reveal>
					</div>
				</Column>
			</Grid>
		</section>
	);
}
