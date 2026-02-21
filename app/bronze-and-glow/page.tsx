import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"
import { Metadata } from 'next'
import { FAQSection } from "@/components/sections/faq-section"

export const metadata: Metadata = {
  title: 'Custom Spray Tans Riverside | Mission Grove & Orangecrest',
  description: 'Premium custom spray tanning in Riverside, CA. Serving Mission Grove, Orangecrest, and Woodcrest with rapid rinse, classic glow, and contouring options.',
}

export default function BronzePage() {
  return (
    <div className="bg-rich-black text-white pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <span className="text-gold tracking-[0.5em] text-[10px] font-black uppercase inline-block border-b border-gold/30 pb-2">Our Signature Services</span>
          <h1 className="leading-tight tracking-tighter">
            <span className="font-luxury text-6xl md:text-8xl lg:text-9xl text-white block tracking-[0.1em] uppercase">Bronze</span>
            <span className="font-signature text-3xl md:text-5xl lg:text-7xl text-gold-light mt-4 block -rotate-3">& glow menu</span>
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            Step into the light with a custom-blended airbrush tan. Our signature solutions are tailored to your unique undertones for a flawless, natural finish.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Services List */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold italic text-gold mb-10">Signature Tanning Menu</h2>
              <div className="space-y-8">
                
                {/* Item 1 */}
                <div className="bg-rich-black/50 p-8 rounded-none shadow-2xl border border-gold/10 hover:border-gold/30 transition-all duration-500">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="font-serif italic text-xl font-bold text-white">The Signature Glow</h3>
                    <span className="text-lg font-semibold text-gold font-serif italic">$55</span>
                  </div>
                  <p className="text-white/40 font-serif italic text-sm mb-6 leading-relaxed">
                    Our classic 8-hour develop rinse. Perfect for first-timers or those who want a long-lasting, natural development.
                  </p>
                  <ul className="text-[10px] tracking-widest font-black uppercase space-y-3 text-white/30">
                    <li className="flex gap-3"><Check size={14} className="text-gold" /> Custom color blend</li>
                    <li className="flex gap-3"><Check size={14} className="text-gold" /> Skin-firming additives</li>
                    <li className="flex gap-3"><Check size={14} className="text-gold" /> Drying powder finish</li>
                  </ul>
                </div>
 
                {/* Item 2 */}
                <div className="bg-rich-black/50 p-8 rounded-none shadow-2xl border border-gold/20 relative overflow-hidden group hover:border-gold transition-all duration-500">
                  <div className="absolute top-0 right-0 bg-gold text-rich-black text-[9px] px-4 py-1.5 font-black uppercase tracking-widest">Most Popular</div>
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="font-serif italic text-xl font-bold text-white">The Rapid Glow</h3>
                    <span className="text-lg font-semibold text-gold font-serif italic">$65</span>
                  </div>
                  <p className="text-white/40 font-serif italic text-sm mb-6 leading-relaxed">
                    Rinse in as little as 2-4 hours! Ideal for the busy bees or last-minute plans. Color continues to develop for 24 hours.
                  </p>
                  <ul className="text-[10px] tracking-widest font-black uppercase space-y-3 text-white/30">
                    <li className="flex gap-3"><Check size={14} className="text-gold" /> Rapid rinse (2-4 hrs)</li>
                    <li className="flex gap-3"><Check size={14} className="text-gold" /> Deep hydration boost</li>
                    <li className="flex gap-3"><Check size={14} className="text-gold" /> No sticky feeling</li>
                  </ul>
                </div>
 
                {/* Item 3 */}
                <div className="bg-rich-black/50 p-8 rounded-none shadow-2xl border border-gold/10 hover:border-gold/30 transition-all duration-500">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="font-serif italic text-xl font-bold text-white">Glow & Contour</h3>
                    <span className="text-lg font-semibold text-gold font-serif italic">$75</span>
                  </div>
                  <p className="text-white/40 font-serif italic text-sm mb-4 leading-relaxed">
                    Signature Glow + full body contouring to highlight abs, collarbones, and lift the booty appearance.
                  </p>
                </div>

                {/* Bundle Deal */}
                <div className="bg-rich-black text-white p-6 rounded-xl shadow-xl border border-gold/40 relative overflow-hidden group hover:border-gold transition-all duration-500">
                  <div className="absolute top-0 right-0 bg-gold text-rich-black text-[10px] px-3 py-1 font-black uppercase tracking-widest">Best Value</div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl font-bold text-gold">The Triple Threat Bundle</h3>
                    <span className="text-lg font-semibold text-gold">$140</span>
                  </div>
                  <p className="text-sm text-white/70 mb-4">
                    Stock up on your glow. 3 custom sessions for $140 when paid up front. 
                  </p>
                  <p className="text-[10px] text-gold/60 uppercase tracking-widest font-bold">
                    Save $25 • Pay Up Front
                  </p>
                </div>

              </div>
              
              <div className="mt-8 text-center">
                <Button size="lg" href="/contact">Book Your Appointment</Button>
              </div>
            </div>
          </div>

          {/* Sidebar / Images */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group">
               <Image 
                src="/images/raw/melbee-glow-bronzing-golden-hour-ornagecrest.png" 
                alt="Spray Tan Result Riverside" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <div className="mt-20">
          <FAQSection 
            title="Tanning & Prep FAQ"
            description="The key to a long-lasting, luxury glow lies in the preparation. Here's how to get the most out of your Melbee Glow."
            items={[
              {
                question: "How do I choose between Signature and Rapid Glow?",
                answer: "Signature is our classic develop (8+ hours) which is great if you're tanning in the evening and sleeping in it. Rapid Glow allows you to rinse in 2-4 hours, which is perfect if you have an event later that day or don't want to wait around for development."
              },
              {
                question: "What is the best way to prepare my skin?",
                answer: "Exfoliate 24 hours prior to your session, focusing on dry areas. Come to your appointment with 'naked' skin—no lotions, deodorants, perfumes, or makeup, as these can create a barrier or react with the solution."
              },
              {
                question: "Can I exercise after my spray tan?",
                answer: "We recommend avoiding exercise and heavy sweating until after your first rinse. Once the tan has developed and you've had your first shower, you can return to your normal routine, though excessive sweating and chlorine can shorten the life of your tan."
              },
              {
                question: "Do you offer mobile spray tanning in Mission Grove?",
                answer: "Currently, we focus on providing a luxury, controlled environment at our Riverside studio to ensure the most consistent results. However, we are conveniently located for all Mission Grove and Woodcrest residents."
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
