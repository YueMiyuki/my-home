"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export function Hero() {
  const [redDotClicks, setRedDotClicks] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [vibrate, setVibrate] = useState(false);

  const handleRedDotClick = () => {
    // This is fun lmao
    setRedDotClicks((prev) => prev + 1);
    setShowMessage(true);

    if (redDotClicks === 1) {
      setVibrate(true);
      setTimeout(() => setVibrate(false), 500);
    }

    setTimeout(() => setShowMessage(false), 2000);

    if (redDotClicks === 4) {
      setTimeout(() => {
        window.close();
        window.location.href = "about:blank";
      }, 1500);
    }
  };

  // Get message based on click count
  const getMessage = () => {
    switch (redDotClicks) {
      case 1:
        return "Nah, that's not gonna work";
      case 2:
        return "Stop, that's not gonna work!";
      case 3:
        return "I said that won't work";
      case 4:
        return "Fine...";
      case 5:
        return "Oof";
      default:
        return "What are you doing?";
    }
  };

  const getMessageColor = () => {
    return redDotClicks === 3 ? "text-red-500" : "text-foreground";
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hey there! I&apos;m <span className="text-primary">Miyuki</span>{" "}
              ✨
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-xl md:text-2xl font-mono text-muted-foreground h-[40px]"
            >
              <TypeAnimation
                sequence={[
                  "Coding for fun ✌️",
                  2000,
                  "Chilling in Hong Kong 🌆",
                  2000,
                  "Running mdesk.tech 🚀",
                  2000,
                  "Hosting stuff 💻",
                  2000,
                  "Drinking Coffee ☕",
                  2000,
                  "Playing games 🎮",
                  2000,
                  "Browsing the web 🌐",
                  2000,
                  "Learning new things 📚",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.div>
          </div>

          <motion.p
            className="text-muted-foreground text-lg max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Just a dev who loves creating cool web stuff and helping others get
            their projects online. When I&apos;m not coding, you&apos;ll find me
            exploring new tech or gaming!
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button asChild size="lg">
              <Link href="#projects">
                Check out my stuff <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link
                href="https://github.com/YueMiyuki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> Say Reeeeee on GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full h-64 md:h-80 max-w-md">
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-primary/20 rounded-lg blur-3xl animate-pulse -z-10" />
            <motion.div
              className="relative w-full h-full bg-card/90 backdrop-blur-xs rounded-lg border border-border shadow-xl overflow-hidden"
              animate={
                vibrate
                  ? {
                      x: [0, -5, 5, -5, 5, 0],
                      y: [0, -5, 5, -5, 5, 0],
                      transition: { duration: 0.5 },
                    }
                  : {}
              }
            >
              {/* Code Editor Header */}
              <div className="bg-muted/90 px-4 py-2 flex items-center justify-between border-b border-border relative">
                <div className="flex space-x-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-600/80 cursor-pointer"
                    onClick={handleRedDotClick}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono">about-me.js</div>

                {/* Easter egg message popup */}
                <AnimatePresence>
                  {showMessage && (
                    <motion.div
                      className={`absolute left-20 top-0.5 bg-background/90 px-3 py-1 rounded-md shadow-md text-sm font-medium ${getMessageColor()}`}
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      {getMessage()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Code Editor Content */}
              <div className="p-4 font-mono text-sm md:text-base overflow-hidden h-[calc(100%-2.5rem)]">
                <div className="flex">
                  <span className="text-muted-foreground mr-4">1</span>
                  <span className="text-primary">const</span>
                  <span className="text-foreground mx-2">miyuki</span>
                  <span className="text-primary">=</span>
                  <span className="text-foreground mx-2">{"{"}</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">2</span>
                  <span className="text-foreground ml-4">name:</span>
                  <span className="text-green-400 mx-2">
                    &apos;Just call me Miyuki!&apos;
                  </span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">3</span>
                  <span className="text-foreground ml-4">superPowers:</span>
                  <span className="text-foreground mx-2">[</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">4</span>
                  <span className="text-green-400 ml-8">&apos;Nerdy&apos;</span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">5</span>
                  <span className="text-green-400 ml-8">
                    &apos;JS/TS guy&apos;
                  </span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">6</span>
                  <span className="text-green-400 ml-8">
                    &apos;Do some React&apos;
                  </span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">7</span>
                  <span className="text-green-400 ml-8">
                    &apos;Maybe also some Next.JS&apos;
                  </span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">8</span>
                  <span className="text-foreground ml-4">]</span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">9</span>
                  <span className="text-foreground ml-4">currentLocation:</span>
                  <span className="text-green-400 mx-2">
                    &apos;Somewhere in HK&apos;
                  </span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">10</span>
                  <span className="text-foreground ml-4">funStuff:</span>
                  <span className="text-foreground mx-2">[</span>
                  <span className="text-green-400">&apos;ward-next&apos;</span>
                  <span className="text-foreground">,</span>
                  <span className="text-green-400 ml-2">
                    &apos;fas-rs&apos;
                  </span>
                  <span className="text-foreground">]</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">11</span>
                  <span className="text-foreground">{"}"}</span>
                </div>
                <div className="flex mt-2 items-center">
                  <span className="text-muted-foreground mr-4">12</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 0.8,
                      repeatType: "reverse",
                    }}
                    className="w-3 h-5 bg-primary/70"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-10"
      ></motion.div>
    </section>
  );
}
