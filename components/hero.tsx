"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 w-full h-full">
        <BackgroundRippleEffect rows={20} cols={40} cellSize={50} />
      </div>

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block">Hey there! I&apos;m</span>
              <span className="block text-gradient-blue">Miyuki Yue</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A full-stack dev who loves building cool stuff with JavaScript,
              TypeScript, and whatever tech gets the job done
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 py-8"
          >
            {[
              { label: "Years of Fun", value: "3+" },
              { label: "Projects Built", value: "50+" },
              { label: "GitHub Stars", value: "None :(" },
              { label: "Coffee Cups", value: "∞" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 pb-20"
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="#projects">
                <span className="relative z-10 flex items-center">
                  Check Out My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-blue-500/50 hover:bg-blue-500/10 text-foreground bg-transparent"
            >
              <Link
                href="https://github.com/YueMiyuki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
