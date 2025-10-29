"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Rocket, Zap, Coffee, Gamepad2, Server } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

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

  const skills = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building web apps with React, Next.js, and Node.js. I'm all about clean code and making things work smoothly.",
    },
    {
      icon: Rocket,
      title: "DevOps & Hosting",
      description:
        "Running mdesk.tech - keeping servers happy and projects online. Cloud infrastructure is my playground.",
    },
    {
      icon: Zap,
      title: "Performance Junkie",
      description:
        "Speed matters! I optimize everything to make apps feel lightning-fast. Nobody likes waiting around.",
    },
    {
      icon: Coffee,
      title: "Coffee Powered",
      description:
        "Seriously, coffee is life. It's the fuel behind every late-night coding session and breakthrough moment.",
    },
    {
      icon: Gamepad2,
      title: "Gamer at Heart",
      description:
        "When I'm not coding, I'm gaming. Love building communities and connecting with awesome people.",
    },
    {
      icon: Server,
      title: "Open Source Fan",
      description:
        "Contributing to projects like ward-next and fas-rs. Community-driven dev is where it's at!",
    },
  ];

  return (
    <section id="about" className="relative w-full py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold">
                A Bit <span className="text-gradient-blue">About Me</span>
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
              Just a dev from Hong Kong who loves creating cool web stuff and
              hanging out with awesome communities online
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <CardSpotlight className="h-full p-6 z-0">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center z-999">
                      <skill.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {skill.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">My Tech Stack</h3>
              <p className="text-muted-foreground">
                The tools I use to build awesome stuff
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">
                      {language.name}
                    </span>
                    <span className="text-blue-400 font-mono">
                      {language.percentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-3 bg-muted/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full relative overflow-hidden"
                      style={{ backgroundColor: language.color }}
                      initial={{ width: 0 }}
                      animate={
                        inView
                          ? { width: `${language.percentage}%` }
                          : { width: 0 }
                      }
                      transition={{
                        duration: 1.5,
                        delay: 0.8 + index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />
                    </motion.div>
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
