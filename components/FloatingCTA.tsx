"use client"

import Link from "next/link"
import { ShinyButton } from "@/components/ui/shiny-button"
import { motion } from "framer-motion"

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-[100] hidden sm:block"
    >
      <Link href="/contact" className="block">
        <ShinyButton className="px-8 py-4 shadow-2xl scale-110">
          Book Your Glow
        </ShinyButton>
      </Link>
    </motion.div>
  )
}
