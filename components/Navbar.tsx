"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { motion, AnimatePresence } from "framer-motion"

const leftLinks = [
  { name: "Services", href: "/bronze-and-glow" },
  { name: "Bridal Glow", href: "/bridal-glow" },
  { name: "Gallery", href: "/gallery" },
]

const rightLinks = [
  { name: "Prep/Aftercare", href: "/prep-aftercare" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-500">
      {/* Top Bar */}
      <div className={cn(
        "hidden md:block border-b border-gold/10 transition-all duration-500",
        scrolled ? "h-0 opacity-0 overflow-hidden" : "bg-white/5 backdrop-blur-md py-2"
      )}>
        <div className="container-custom flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-semibold text-gold/80">
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram size={14} />
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <a href="tel:+19515550123" className="hover:text-white transition-colors">(951) 555-0123</a>
            <span className="text-gold/30">|</span>
            <span>Riverside - Mission Grove - Orangecrest - Woodcrest</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "transition-all duration-700",
        scrolled ? "bg-rich-black/80 backdrop-blur-xl py-3 border-b border-gold/10 shadow-2xl" : "bg-transparent py-8"
      )}>
        <div className="container-custom flex items-center justify-between md:justify-center">
          
          {/* Mobile Logo */}
          <Link href="/" className="md:hidden">
                <div className="relative h-14 w-28 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center scale-75">
                  <Image 
                    src="/images/logo.png" 
                    alt="Melbee Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
          </Link>

          {/* Desktop Left Links */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-10 lg:gap-14 pr-10 lg:pr-20">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[9px] tracking-[0.5em] font-medium uppercase transition-all duration-500 hover:text-gold",
                  pathname === link.href ? "text-gold" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Logo Area */}
          <div className="relative group">
            <Link href="/" className="relative z-10 block">
              <div className="flex flex-col items-center">
                {/* Visual Sparkle Circle from Image */}
                <div className="absolute -inset-10 opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                   <div className="w-full h-full rounded-full border border-dashed border-gold/30 animate-[spin_25s_linear_infinite]" />
                </div>
                
                <div className="relative h-20 w-32 md:h-24 md:w-36 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                  <Image 
                    src="/images/logo.png" 
                    alt="Melbee Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Right Links */}
          <div className="hidden md:flex flex-1 justify-start items-center gap-10 lg:gap-14 pl-10 lg:pr-20 group">
             {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[9px] tracking-[0.5em] font-medium uppercase transition-all duration-500 hover:text-gold",
                  pathname === link.href ? "text-gold" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/glow-co" className="ml-8">
               <button className="btn-gold !px-8 !py-2.5 !text-[8px] whitespace-nowrap">
                  Join Melbee Glow Co
               </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-60 bg-rich-black/98 flex flex-col items-center justify-center gap-8 md:hidden text-white"
          >
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="mb-12 text-center">
               <h2 className="font-serif text-3xl font-bold">Melbee <span className="text-gold">Glow</span></h2>
               <p className="text-gold/60 text-xs tracking-widest uppercase mt-2">Luxury Spray Tanning</p>
            </div>
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-serif font-medium transition-colors hover:text-gold tracking-wide",
                  pathname === link.href ? "text-gold" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-8 mt-12 items-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                 <Instagram size={28} />
              </a>
              <Button size="lg" href="/glow-co" className="bg-gold text-white font-bold tracking-widest uppercase text-xs px-8">
                Join Melbee Glow Co
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
