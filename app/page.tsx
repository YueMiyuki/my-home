import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Particles } from "@/components/particles";
import { fetchLanguageStats, fetchPinnedProjects } from "@/lib/github";

export default async function Home() {
  // Fetch GitHub data
  const [languages, pinnedProjects] = await Promise.all([
    fetchLanguageStats(),
    fetchPinnedProjects(),
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="fixed inset-0 -z-10">
        <Particles />
      </div>
      <Navbar />
      <Hero />
      <About languages={languages} />
      <Projects pinnedProjects={pinnedProjects} />
      <Contact />
      <Footer />
    </main>
  );
}
