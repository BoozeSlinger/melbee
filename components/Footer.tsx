import Link from "next/link"
import { Instagram, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-16 border-t border-gold/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-2">
              <h3 className="font-serif text-3xl font-bold tracking-tighter">
                Melbee <span className="text-gold italic">Glow N Sculp</span>
              </h3>
              <p className="text-gold/40 text-[10px] tracking-[0.4em] uppercase font-black">Luxury Spray Tanning</p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              We provide an elevated bronzing experience for the modern woman. Our custom-blended solutions ensure a flawless, natural-looking glow every time.
            </p>
            <div className="flex gap-6 items-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-rich-black transition-all duration-500" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <span className="text-xs tracking-widest text-gold font-bold uppercase">Follow Our Glow</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] font-black uppercase text-gold">Curation</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link href="/" className="hover:text-gold transition-colors flex items-center gap-2 group">Home <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors flex items-center gap-2 group">Gallery <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/prep-aftercare" className="hover:text-gold transition-colors flex items-center gap-2 group">Prep & Aftercare <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/bronze-and-glow" className="hover:text-gold transition-colors flex items-center gap-2 group">Bronze & Glow <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors flex items-center gap-2 group">Book Now <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] font-black uppercase text-gold">Coordinates</h4>
            <ul className="space-y-6 text-sm text-gray-500">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span className="leading-relaxed">Riverside, California<br/><span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Mission Grove / Orangecrest</span></span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-gold shrink-0" size={18} />
                <a href="mailto:hello@melbeeglow.com" className="hover:text-white transition-colors">hello@melbeeglow.com</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-gold shrink-0" size={18} />
                <a href="tel:+19515550123" className="hover:text-white transition-colors">(951) 555-0123</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.2em] uppercase font-bold text-gray-600">
          <p>&copy; {currentYear} Melbee Glow N Sculp. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
