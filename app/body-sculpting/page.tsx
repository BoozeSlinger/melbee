import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Body Sculpting Riverside | Mission Grove & Woodcrest',
  description: 'Non-invasive body sculpting and contouring coming soon to Melbee Glow N Sculp in Riverside, CA. Serving Mission Grove, Orangecrest, and Woodcrest. Join the waitlist.',
}

export default function SculptingPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ivory relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 rounded-l-full blur-3xl transform translate-x-1/4"></div>
      
      <div className="container-custom relative z-10 text-center space-y-8 max-w-2xl px-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-bold tracking-wider uppercase">Coming Soon</span>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-rich-black leading-tight">
          Sculpt & <br/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-gold-dark">Redefine</span>
        </h1>
        
        <p className="text-xl text-charcoal/80 leading-relaxed">
          We are expanding our services to bring the latest in non-invasive body sculpting to Riverside. 
          Target stubborn areas, tighten skin, and enhance your natural curves with our upcoming treatments—perfectly located for residents of Mission Grove, Woodcrest, and Orangecrest.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/10 mt-8">
          <h3 className="font-serif text-xl font-bold mb-4">Join the VIP Waitlist</h3>
          <p className="text-sm text-gray-500 mb-6">
            Be the first to know when we launch and receive <span className="text-gold font-bold">20% off</span> your first treatment.
          </p>
          
          <form className="flex flex-col gap-4">
             <input 
               type="text" 
               placeholder="Your Name" 
               className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
             />
             <input 
               type="email" 
               placeholder="Email Address" 
               className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
             />
             <Button type="submit" size="lg" className="w-full">
               Join Waitlist
             </Button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            We promise not to spam. You'll only hear from us about the launch.
          </p>
        </div>
      </div>
    </div>
  )
}
