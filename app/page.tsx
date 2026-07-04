import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { ModelCard } from "@/components/sections/model-card";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Spotlight } from "@/components/spotlight";

export default function Page() {
	return (
		<main id="main-content" className="page-main">
			<Spotlight />
			<Hero />
			<Marquee />
			<About />
			<ModelCard />
			<TechStack />
			<Projects />
			<Contact />
		</main>
	);
}
