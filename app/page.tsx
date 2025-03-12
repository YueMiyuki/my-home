"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ExternalLink,
  Code,
  Server,
  Database,
  Cloud,
  Cpu,
  Globe,
  PenTool,
  Terminal,
  Github,
  ChevronDown,
  Moon,
  Sun,
  Sparkles,
  Heart,
  Coffee,
  Music,
  Gamepad,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  link,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-card border border-border h-full p-6"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          {/* Background pattern */}
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 bg-primary" />

          <div className="relative z-10">
            <motion.div
              className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-primary/10"
              animate={{ rotate: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-7 h-7 text-primary" />
            </motion.div>

            <motion.h3
              className="text-xl font-bold mb-2"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            <p className="text-muted-foreground text-sm">{description}</p>

            <motion.div
              className="absolute bottom-4 right-4 opacity-0"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-2 rounded-full bg-primary/10">
                <ExternalLink className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const SectionTitle = ({
  children,
  emoji,
}: {
  children: React.ReactNode;
  emoji?: string;
}) => (
  <div className="relative mb-12 text-center">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      <h2 className="text-3xl md:text-4xl font-bold relative z-10 inline-flex items-center gap-3">
        {emoji && <span className="text-3xl">{emoji}</span>}
        {children}
      </h2>
      <motion.div
        className="h-2 bg-primary/30 absolute -bottom-1 left-0 right-0 z-0 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.div>
  </div>
);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

const BackgroundBlob = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob",
      className,
    )}
  />
);

const AnimatedEmoji = ({
  emoji,
  delay = 0,
}: {
  emoji: string;
  delay?: number;
}) => (
  <motion.span
    className="inline-block"
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      delay: delay,
      ease: "easeInOut",
    }}
  >
    {emoji}
  </motion.span>
);

const InterestBadge = ({
  icon: Icon,
  text,
  delay = 0,
}: {
  icon: React.ElementType;
  text: string;
  delay?: number;
}) => (
  <motion.div
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.3 }}
  >
    <Icon className="w-3.5 h-3.5" />
    <span>{text}</span>
  </motion.div>
);

const Footer = () => (
  <footer className="py-12 border-t border-border bg-card">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="https://github.com/YueMiyuki"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-3"
          >
            <span className="font-bold text-lg">Miyukiiiii Yueeeeee</span>
          </Link>
          <p className="text-muted-foreground text-sm text-center md:text-left">
            I'm just a chill guy
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-medium mb-4 text-lg">Quick Links</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="https://github.com/YueMiyuki"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm hover:bg-primary/20 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://mdesk.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm hover:bg-primary/20 transition-colors"
            >
              mdesk.tech
            </Link>
            <Link
              href="mailto:me@miyuki-yue.dev"
              className="px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm hover:bg-primary/20 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="flex items-center gap-2 mb-2 text-muted-foreground">
            Made with{" "}
            <Heart
              className="w-4 h-4 text-red-500 animate-float"
              fill="currentColor"
            />
          </p>
          <p className="flex items-center gap-2">
            <span className="text-muted-foreground">Powered by</span>
            <span className="relative w-5 h-5 inline-block">
              <Image
                src="/nextjs-icon.svg"
                alt="Next.js"
                fill
                className="object-contain"
              />
            </span>
            <span className="text-primary font-medium">Next.js 15</span>
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © {new Date().getFullYear()} Miyuki Yue
          </p>
        </div>
      </div>
    </div>
  </footer>
);

const ContactSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <SectionTitle emoji="👋">Want to contact me?</SectionTitle>

      <motion.div
        className="max-w-3xl mx-auto bg-card rounded-2xl shadow-lg border border-border overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Drop me a line</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out if you want to collaborate on a project
                or just say hi!
              </p>

              <div className="space-y-4">
                <Link
                  href="https://github.com/YueMiyuki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <span>github.com/YueMiyuki</span>
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/10 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              <div className="relative bg-primary/10 backdrop-blur-sm rounded-xl p-6">
                <p className="text-foreground mb-4">
                  I'm always open to new projects and collaborations. Let's
                  build something amazing together!
                </p>

                <Link
                  href="mailto:me@miyuki-yue.dev"
                  className="inline-block px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-colors"
                >
                  Send Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const HeroDecorations = () => (
  <>
    <div className="absolute inset-0 shape-grid" />

    <motion.div
      className="absolute right-[10%] top-[20%] w-16 h-16 bg-primary/20 rounded-full animate-float"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />

    <motion.div
      className="absolute right-[20%] bottom-[30%] w-20 h-20 border-2 border-primary/30 rounded-lg animate-float-delay-1"
      animate={{
        rotate: -360,
      }}
      transition={{
        duration: 25,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />

    <motion.div
      className="absolute right-[15%] top-[40%] w-12 h-12 shape-dots animate-float-delay-2"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />

    <motion.div
      className="absolute right-[25%] top-[25%] text-primary/40 font-mono text-xl"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {"</>"}
    </motion.div>

    <motion.div
      className="absolute right-[18%] bottom-[35%] text-primary/40 font-mono text-2xl"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      {"{"}
    </motion.div>
  </>
);

const HeroGreeting = () => (
  <motion.div
    className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 overflow-hidden"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <motion.span
      className="inline-block whitespace-nowrap"
      animate={{ y: [0, -2, 0] }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      Hey there! 👋
    </motion.span>
  </motion.div>
);

export default function Component() {
  const scrollIndicatorOpacity = useTransform(
    useScroll().scrollYProgress,
    [0, 0.1],
    [1, 0],
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen font-sans">
      <motion.nav
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="text-xl font-bold text-primary flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5" />
            <span>Miyuki Yue</span>
          </motion.div>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/YueMiyuki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      <main>
        <section className="min-h-[90vh] relative flex items-center pt-8 overflow-hidden">
          <HeroDecorations />

          <BackgroundBlob className="bg-purple-300 dark:bg-purple-700 top-0 right-1/4 w-72 h-72" />
          <BackgroundBlob className="bg-indigo-300 dark:bg-indigo-700 bottom-0 left-1/4 w-96 h-96 animation-delay-2000" />
          <BackgroundBlob className="bg-violet-300 dark:bg-violet-700 bottom-1/4 right-1/3 w-64 h-64 animation-delay-4000" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                className="md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <HeroGreeting />

                <motion.h1
                  className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 animate-gradient"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  I'm Miyuki Yue
                </motion.h1>

                <motion.p
                  className="text-xl mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Web Developer & Student from Hong Kong{" "}
                  <AnimatedEmoji emoji="🇭🇰" />
                </motion.p>

                <motion.p
                  className="text-muted-foreground max-w-md mx-auto md:mx-0 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  I love creating cool stuff for the web and experimenting with
                  new technologies. Currently exploring the world of web
                  development and always learning something new!
                </motion.p>

                {/* Interest badges */}
                <motion.div
                  className="flex flex-wrap gap-2 justify-center md:justify-start mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <InterestBadge icon={Code} text="Coding" delay={0.2} />
                  <InterestBadge icon={Coffee} text="Coffee" delay={0.3} />
                  <InterestBadge icon={Music} text="Music" delay={0.4} />
                  <InterestBadge icon={Gamepad} text="Gaming" delay={0.5} />
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Link
                    href="https://github.com/YueMiyuki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-colors flex items-center gap-2 animate-float"
                  >
                    <Github className="w-4 h-4" />
                    Check my GitHub
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {mounted && (
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              style={{ opacity: scrollIndicatorOpacity }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronDown className="w-8 h-8 text-primary animate-float" />
            </motion.div>
          )}
        </section>

        {/* Technologies Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <SectionTitle emoji="🚀">Stuff I Use</SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Server,
                  title: "NodeJS",
                  description:
                    "Building scalable and efficient server-side applications",
                  link: "https://nodejs.org/",
                },
                {
                  icon: Code,
                  title: "React",
                  description:
                    "Creating interactive and dynamic user interfaces",
                  link: "https://reactjs.org/",
                },
                {
                  icon: Globe,
                  title: "NextJS",
                  description:
                    "Developing fast and SEO-friendly web applications",
                  link: "https://nextjs.org/",
                },
                {
                  icon: Database,
                  title: "Docker",
                  description:
                    "Containerizing applications for easy deployment",
                  link: "https://www.docker.com/",
                },
                {
                  icon: Cpu,
                  title: "Linux",
                  description: "Managing and operating open-source systems",
                  link: "https://www.linux.org/",
                },
                {
                  icon: Terminal,
                  title: "Coder",
                  description: "Cloud Development Environment",
                  link: "https://coder.com/",
                },
              ].map((item, index) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="absolute inset-0 bg-primary/5 -z-10" />

          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle emoji="🌱">Currently Learning</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Cloud,
                  title: "Kubernetes (K8s)",
                  description:
                    "Orchestrating containerized applications for scalability",
                  link: "https://kubernetes.io/",
                },
                {
                  icon: Globe,
                  title: "Astro",
                  description:
                    "Building faster websites with less client-side JavaScript",
                  link: "https://astro.build/",
                },
                {
                  icon: PenTool,
                  title: "Python",
                  description:
                    "Expanding my programming skills with a versatile language",
                  link: "https://www.python.org/",
                },
              ].map((item, index) => (
                <FeatureCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
