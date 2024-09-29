"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Server,
  Database,
  Cloud,
  Cpu,
  Globe,
  PenTool,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GridAnimation = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 opacity-20 pointer-events-none overflow-hidden">
      {[...Array(64)].map((_, i) => (
        <motion.div
          key={i}
          className="bg-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-400 to-transparent opacity-30"
        animate={{
          x: ["0%", "100%"],
          y: ["0%", "100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
    </div>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  link,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer relative h-full"
    >
      <div className="absolute top-4 left-4">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  </Link>
);

export default function Component() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const footerOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/*Navbar Section*/}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.a
            href="https://github.com/YueMiyuki"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {/* GitHub Icon and Text */}
            <Image
              src="https://unpkg.com/simple-icons@13.12.0/icons/github.svg"
              alt="GitHub"
              className="w-6 h-6"
              height={20}
              width={20}
              style={{filter: "invert(1)"}}
            />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://mdesk.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <span>mdesk.tech</span>
            <ExternalLink className="w-6 h-6" />
          </motion.a>
        </div>
      </nav>

      <div
        ref={containerRef}
        className="max-h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory"
      >
        {/* First Slide with Miyuki Yue */}
        <motion.div
          className="relative h-screen flex items-center justify-center snap-start pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Grid Animation */}
          <GridAnimation />

          {/* Main Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h1
                className="text-4xl sm:text-5xl font-bold mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Miyuki Yue
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-gray-300 mb-6"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Web Developer & Student from Hong Kong 🇭🇰
              </motion.p>
              <motion.p
                className="text-gray-400 text-sm sm:text-base"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Passionate about creating dynamic and interactive web
                applications that push the boundaries of what's possible on the
                web.
              </motion.p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                className="relative w-48 h-48 sm:w-64 sm:h-64"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }}
              >
                <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center">
                  <Code className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
                </div>
                <motion.div
                  className="absolute -inset-2 rounded-full border-4 border-blue-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  style={{
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Second Slide: Technologies I Use */}
        <motion.div
          className="min-h-screen flex items-center justify-center snap-start py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Technologies I Use
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={Server}
                title="NodeJS"
                description="Building scalable and efficient server-side applications"
                link="https://nodejs.org/"
              />
              <FeatureCard
                icon={Code}
                title="React"
                description="Creating interactive and dynamic user interfaces"
                link="https://reactjs.org/"
              />
              <FeatureCard
                icon={Globe}
                title="NextJS"
                description="Developing fast and SEO-friendly web applications"
                link="https://nextjs.org/"
              />
              <FeatureCard
                icon={Database}
                title="Docker"
                description="Containerizing applications for easy deployment"
                link="https://www.docker.com/"
              />
              <FeatureCard
                icon={Cpu}
                title="Linux"
                description="Managing and operating open-source systems"
                link="https://www.linux.org/"
              />
              <FeatureCard
                icon={Terminal}
                title="Coder"
                description="Cloud Development Environment"
                link="https://coder.com/"
              />
            </div>
          </div>
        </motion.div>

        {/* Third Slide: What I'm Learning */}
        <motion.div
          className="min-h-screen flex items-center justify-center snap-start py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              What I'm Learning
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={Cloud}
                title="Kubernetes (K8s)"
                description="Orchestrating containerized applications for scalability"
                link="https://kubernetes.io/"
              />
              <FeatureCard
                icon={Globe}
                title="Astro"
                description="Building faster websites with less client-side JavaScript"
                link="https://astro.build/"
              />
              <FeatureCard
                icon={PenTool}
                title="Python"
                description="Expanding my programming skills with a versatile language"
                link="https://www.python.org/"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.footer
        style={{ opacity: footerOpacity }}
        className="fixed bottom-0 left-0 right-0 py-4 text-center text-gray-500 bg-gray-900 bg-opacity-90"
      >
        <p className="flex items-center justify-center space-x-2">
          <span>Made by Miyuki Yue</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <span>with</span>
          <span role="img" aria-label="love">
            ❤️
          </span>
          <span>and</span>
          <Image src="/nextjs-icon.svg" alt="Next.js" width={20} height={20} />
        </p>
      </motion.footer>
    </div>
  );
}
