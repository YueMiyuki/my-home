"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Link from "next/link"

interface Project {
  author: string
  name: string
  description: string
  language: string
  stars: number
  forks: number
}

interface ProjectsProps {
  pinnedProjects: Project[]
}

export function Projects({ pinnedProjects }: ProjectsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Things that I have contributed</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my pinned projects from GitHub.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pinnedProjects.map((project) => (
              <motion.div key={project.name} variants={itemVariants} whileHover={{ y: -10 }} className="h-full">
                <Card className="h-full flex flex-col overflow-hidden border border-border">
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description || "A cool project"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">{project.language}</Badge>
                      {project.stars > 0 && <Badge variant="outline">⭐ {project.stars}</Badge>}
                      {project.forks > 0 && <Badge variant="outline">🍴 {project.forks}</Badge>}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={`https://github.com/${project.author}/${project.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Button asChild size="lg">
              <Link href="https://github.com/YueMiyuki" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View More on GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
