"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Contact() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="max-w-md mx-auto">
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mt-4">
                      <Mail className="text-primary h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Find Me</h3>
                      <p className="text-muted-foreground">The best way to reach me is through Discord!</p>
                      <Link
                        href="https://discord.com/channels/@me"
                        target="_blank"
                        className="text-primary"
                      > 
                       miyuki.yue_3747
                       </Link>
                    </div>

                    <div className="w-full pt-6 border-t border-border flex items-center justify-center">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Hong Kong</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
