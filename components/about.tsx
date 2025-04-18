"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Gamepad, Coffee } from "lucide-react";

interface Language {
  name: string;
  percentage: number;
  color: string;
}

interface AboutProps {
  languages: Language[];
}

export function About({ languages }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m Miyuki, a JS developer and student from Hong Kong.
              I&apos;m passionate about creating web applications and providing
              hosting solutions through my projects.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-card p-6 rounded-lg shadow-lg border border-border"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-primary h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Web Development</h4>
                <p className="text-muted-foreground">
                  A nerd who loves building web applications using JavaScript
                  and TypeScript
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-card p-6 rounded-lg shadow-lg border border-border"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Gamepad className="text-primary h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Gaming</h4>
                <p className="text-muted-foreground">
                  I play a lot of games, I mean A LOT. Reach out to me if you
                  want to play together
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-card p-6 rounded-lg shadow-lg border border-border"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="text-primary h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Drink coffee</h4>
                <p className="text-muted-foreground">
                  CoFFEE cOffee COFFEE! <br />I love coffee, I mean who
                  doesn&apos;t? I can drink coffee all day long
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <motion.div key={language.name} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-muted-foreground">
                      {language.percentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: language.color }}
                      initial={{ width: 0 }}
                      animate={
                        inView
                          ? { width: `${language.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
