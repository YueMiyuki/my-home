"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Github, Mail, Globe } from "lucide-react";

type FooterProps = {
  initialYear: number;
};

export function Footer({ initialYear }: FooterProps) {
  const [currentYear, setCurrentYear] = useState(initialYear);

  useEffect(() => {
    const now = new Date().getFullYear();
    if (now > initialYear) {
      setCurrentYear(now);
    }
  }, [initialYear]);

  return (
    <footer className="w-full py-8 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Link href="/">
              <div className="font-mono text-xl font-bold">
                <span className="text-primary">{"<"}</span>
                <span>Miyuki</span>
                <span className="text-primary">{"/>"}</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 mb-4 md:mb-0"
          >
            <Link
              href="https://github.com/YueMiyuki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:me@miyuki-yue.dev"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://mdesk.tech/?ref=miyuki-home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {currentYear} Miyuki Yue. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
