import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Calendar, Users, Star } from "lucide-react"
import { Metadata } from 'next'
import { FAQSection } from "@/components/sections/faq-section"

export const metadata: Metadata = {
  title: 'Bridal Spray Tans Riverside | Mission Grove & Orangecrest',
  description: 'Flawless bridal spray tans in Riverside, CA. Trial tans, wedding day glows, and bridal party packages available in Mission Grove, Orangecrest, and Woodcrest.',
}

export default function BridalPage() {
  return (
    <div className="bg-rich-black text-white pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <span className="text-gold tracking-[0.5em] text-[10px] font-black uppercase inline-block border-b border-gold/30 pb-2">For the Bride-to-Be</span>
          <h1 className="leading-tight tracking-tighter">
            <span className="font-luxury text-6xl md:text-8xl lg:text-9xl text-white block tracking-[0.1em] uppercase">The Bridal</span>
            <span className="font-signature text-3xl md:text-5xl lg:text-7xl text-gold-light mt-4 block -rotate-3">& glow experience</span>
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
             Your wedding is a masterpiece of planning and detail. Ensure your glow is just as perfect. We specialize in natural, photo-ready bronzing for Riverside brides.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
           <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image 
                src="/images/raw/wedding-spray-tan-golden-hour-riverside.png" 
                alt="Bridal Spray Tan Riverside" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
           </div>
           
           <div className="space-y-8">
             {/* Bridal Day Package */}
             <div className="bg-rich-black/50 p-8 rounded-none shadow-2xl border border-gold/20 hover:border-gold transition-all duration-500">
               <h3 className="font-serif italic text-2xl font-bold mb-4 text-gold">Bridal Day Package</h3>
               <p className="text-white/60 mb-6 font-serif italic text-sm">
                 Perfect for the meticulous bride. This package includes:
                 <br />• 1 Trial Session (2 weeks before) to test and figure out your custom color.
                 <br />• 1 Wedding Session (2 days before) for your final flawless glow.
               </p>
               <div className="flex items-center gap-4 mb-6">
                 <div className="flex items-center gap-2 text-[10px] tracking-widest font-black uppercase text-white/40">
                   <Calendar className="text-gold" size={14} />
                   <span>Trial: 14 Days Before</span>
                 </div>
                 <div className="w-8 h-px bg-gold/20"></div>
                 <div className="flex items-center gap-2 text-[10px] tracking-widest font-black uppercase text-gold">
                   <Star className="text-gold" size={14} fill="currentColor" />
                   <span>Glow: 2 Days Before</span>
                 </div>
               </div>
               <div className="flex items-baseline justify-between border-t border-gold/10 pt-6">
                 <span className="text-2xl font-serif font-bold text-white">$100</span>
                 <Button href="/contact" className="btn-gold !px-8 !py-3 !text-[10px]">Book Now</Button>
               </div>
             </div>
 
             {/* Bridal Party Package */}
             <div className="bg-rich-black/50 p-8 rounded-none shadow-2xl border border-gold/20 relative overflow-hidden group hover:border-gold transition-all duration-500">
               <div className="absolute top-0 right-0 bg-gold text-rich-black text-[9px] px-4 py-1.5 font-black uppercase tracking-widest">Group Deal</div>
               <h3 className="font-serif italic text-2xl font-bold mb-4 text-gold">Bridal Party Package</h3>
               <p className="text-white/80 mb-6 font-medium text-sm tracking-wide">
                 Squad Goals. Package for 5 people!
               </p>
               <p className="font-serif italic text-xs text-white/40 mb-6 leading-relaxed">
                 Same schedule as the Bride (1 trial session 14 days out, 1 final session 2 days out per person). 
                 <br /><span className="text-gold font-bold">Note: Must schedule 14 days out from your first session!</span>
               </p>
               <div className="flex items-center gap-2 text-[10px] tracking-widest font-black uppercase text-white/40 mb-6">
                  <Users className="text-gold" size={14} />
                  <span>Includes 5 Party Members</span>
               </div>
               <div className="flex items-baseline justify-between border-t border-gold/10 pt-6">
                 <span className="text-2xl font-serif font-bold text-white">$450 total</span>
                 <Button variant="outline" href="/contact" className="btn-outline !px-8 !py-3 !text-[10px]">Book Party</Button>
               </div>
             </div>
           </div>
        </div>

        {/* Timeline Tips */}
        <div className="bg-rich-black/80 border border-gold/10 text-white p-10 md:p-16 rounded-none text-center space-y-12">
          <div className="space-y-4">
            <span className="text-gold tracking-[0.4em] text-[10px] font-black uppercase">Preparation is Key</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold italic">Bridal Glow Timeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
             <div className="space-y-4 relative">
               <div className="text-gold font-bold text-lg font-serif italic">2 Weeks Before</div>
               <h4 className="font-serif text-xl text-white">The Trial Tan</h4>
               <p className="text-white/40 text-sm leading-relaxed">Vital for finding your perfect shade. We test the solution and the depth of color to ensure absolute perfection for your big day.</p>
               <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-gold/10 translate-x-6" />
             </div>
             <div className="space-y-4 relative">
               <div className="text-gold font-bold text-lg font-serif italic">48 Hours Before</div>
               <h4 className="font-serif text-xl text-white">The Wedding Tan</h4>
               <p className="text-white/40 text-sm leading-relaxed">The "Goldilocks" window. Allows time for the color to settle and any guide color to fully rinse off before you put on white.</p>
               <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-gold/10 translate-x-6" />
             </div>
             <div className="space-y-4">
               <div className="text-gold font-bold text-lg font-serif italic">Wedding Day</div>
               <h4 className="font-serif text-xl text-white">Radiance & Joy</h4>
               <p className="text-white/40 text-sm leading-relaxed">Moisturize to keep your skin glowing. Your tan will be perfectly set, transfer-resistant, and ready for every photo.</p>
             </div>
          </div>
        </div>

        {/* Bridal FAQ Section */}
        <div className="mt-32">
          <FAQSection 
            title="Bridal Tanning FAQ"
            description="Planning your wedding glow requires strategy. Here are the most common questions from our Riverside brides."
            items={[
              {
                question: "When should I book my bridal trial tan?",
                answer: "We recommend booking your trial exactly 2 weeks before your wedding. This allows us to see how the color develops and fades on your skin, and make any adjustments for the final session."
              },
              {
                question: "Will the tan transfer onto my white dress?",
                answer: "With our premium solutions and a 48-hour development window, there is minimal risk of transfer. By the time you put on your dress, the guide color has been rinsed away, leaving only the set tan."
              },
              {
                question: "Is the 14-day scheduling rule strict?",
                answer: "Yes, to ensure availability for your specific two-session timeline, we require bookings to be made at least 14 days before your first (trial) session. This ensures we can lock in both dates for you."
              },
              {
                question: "Do you offer bridal party discounts?",
                answer: "Yes! Our Bridal Party Package covers 5 people for $450 total ($90 per person), which includes both the trial and final wedding sessions for everyone."
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
