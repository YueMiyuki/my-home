"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Star, GitFork, ArrowRight } from "lucide-react";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Project {
  author: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
}

interface ProjectsProps {
  pinnedProjects: Project[];
}

export function Projects({ pinnedProjects }: ProjectsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      className="relative w-full py-32 px-4 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold">
                Cool Stuff I&apos;ve{" "}
                <span className="text-gradient-blue">Built</span>
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "100px" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Some of my favorite open-source projects and side hustles
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 justify-items-center"
          >
            {pinnedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex w-full justify-center"
              >
                <CardContainer
                  className="w-full md:w-auto bg-gray-800 rounded-4xl"
                  containerClassName="w-full flex justify-center"
                >
                  <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/10 dark:bg-card w-full md:w-[560px] min-h-[420px] rounded-xl p-8 flex flex-col">
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-bold text-foreground"
                    >
                      {project.name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-muted-foreground text-sm mt-2 grow overflow-auto"
                    >
                      {project.description ||
                        "An awesome project that does cool things"}
                    </CardItem>

                    <CardItem translateZ="80" className="w-full mt-4">
                      <div className="flex flex-wrap gap-3">
                        <Badge
                          variant="secondary"
                          className="glass bg-blue-500/20 text-blue-400 border-blue-500/30"
                        >
                          {project.language}
                        </Badge>
                        {project.stars > 0 && (
                          <Badge
                            variant="outline"
                            className="glass border-yellow-500/30"
                          >
                            <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {project.stars}
                          </Badge>
                        )}
                        {project.forks > 0 && (
                          <Badge
                            variant="outline"
                            className="glass border-blue-500/30"
                          >
                            <GitFork className="w-3 h-3 mr-1" />
                            {project.forks}
                          </Badge>
                        )}
                      </div>
                    </CardItem>

                    <div className="flex justify-between items-center mt-auto pt-4">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        href={`https://github.com/${project.author}/${project.name}`}
                        target="_blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-foreground hover:text-blue-400 transition-colors"
                      >
                        View Code →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
                        onClick={() =>
                          window.open(
                            `https://github.com/${project.author}/${project.name}`,
                            "_blank",
                          )
                        }
                      >
                        <Github className="inline w-3 h-3 mr-1" />
                        Star
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="group bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link
                href="https://github.com/YueMiyuki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                More on GitHub
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
