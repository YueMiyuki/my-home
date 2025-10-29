"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ContactMethod {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string | null;
  description: string;
}

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods: ContactMethod[] = [
    {
      icon: MessageSquare,
      title: "Discord",
      value: "miyuki.yue_3747",
      link: "https://discord.com/channels/@me",
      description: "Hit me up here!",
    },
    {
      icon: Mail,
      title: "Email",
      value: "me@miyuki-yue.dev",
      link: "mailto:me@miyuki-yue.dev",
      description: "For work stuff",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hong Kong",
      link: null,
      description: "Where I'm at",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-32 px-4 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
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
                Let&apos;s <span className="text-gradient-blue">Chat</span>
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
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Got a cool project idea or just wanna say hi? I&apos;m always down
              to chat about new opportunities and collabs!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {method.link ? (
                  <Link
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ContactCard method={method} />
                  </Link>
                ) : (
                  <ContactCard method={method} />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center pt-8"
          >
            <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl glass border border-blue-500/20">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Ready to build something?
                </h3>
                <p className="text-muted-foreground">
                  Let&apos;s make something awesome together
                </p>
              </div>
              <Button
                size="lg"
                asChild
                className="group bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="https://discord.com/channels/@me" target="_blank">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Message Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ method }: { method: ContactMethod }) {
  return (
    <div className="h-full p-6 rounded-2xl glass border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="relative space-y-4 text-center">
        <div className="w-14 h-14 mx-auto rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <method.icon className="w-7 h-7 text-blue-400" />
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{method.description}</p>
          <h3 className="text-lg font-bold">{method.title}</h3>
          <p className="text-blue-400 font-mono text-sm">{method.value}</p>
        </div>
      </div>
    </div>
  );
}
