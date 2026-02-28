import Link from "next/link"
import Image from "next/image"
import { Sparkles, Heart, Clock, Star, ChevronRight } from "lucide-react"
import { StaggerTestimonials } from "@/components/sections/stagger-testimonials"
import { MasonryGallery } from "@/components/sections/masonry-gallery"
import { galleryImages } from "@/lib/gallery-data"
import { FAQSection } from "@/components/sections/faq-section"

export default function Home() {
  return (
    <div className="bg-rich-black text-white selection:bg-gold/30 selection:text-white">
      {/* Editorial Hero Section */}
      <section className="relative min-h-screen flex items-center bg-rich-black overflow-hidden pt-20">
        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="space-y-10 py-12 lg:py-0 text-left lg:-translate-x-8 xl:-translate-x-12">
            <div className="space-y-6">
              <span className="text-gold tracking-[0.5em] text-[10px] font-black uppercase inline-block border-b border-gold/30 pb-2">
                Luxury Spray Tanning
              </span>
              <h1 className="leading-none tracking-tighter relative">
                <span className="font-luxury text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white block tracking-[0.15em] uppercase">
                  BRONZED
                </span>
                <span className="font-script text-5xl md:text-7xl lg:text-[7.5rem] text-gold absolute -bottom-12 md:-bottom-20 -right-4 lg:-right-12 z-20 -rotate-2 select-none whitespace-nowrap">
                  & beautiful
                </span>
              </h1>
              <p className="font-serif italic text-base md:text-lg text-white/30 max-w-sm leading-relaxed pt-2 pl-2">
                embrace your radiance at melbee studio
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-10 pt-4 pl-2">
              <Link href="/contact">
                <button className="btn-gold group relative overflow-hidden">
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gold translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                </button>
              </Link>
              <div className="flex gap-1 text-gold/20">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={8} fill="currentColor" className="opacity-30" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image - Asymmetric & Bleeding */}
          <div className="relative h-full lg:h-[110vh] lg:-mr-[12vw] xl:-mr-[20vw] overflow-hidden lg:translate-x-12 group/hero">
            <div className="relative h-[550px] lg:h-full w-full grayscale-[0.3] transition-all duration-1000 group-hover/hero:grayscale-0">
              <Image 
                src="/images/Hero/editorial-hero-v2.png" 
                alt="Elite Spray Tan Editorial" 
                fill
                className="object-cover object-right lg:object-center scale-[1.02] transition-transform duration-1000 md:group-hover/hero:scale-110"
                priority
              />
              {/* Overlays for depth matching #1A1305 */}
              <div className="absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-rich-black via-rich-black/60 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-rich-black via-rich-black/20 to-transparent lg:hidden" />
            </div>
          </div>
        </div>

        {/* Vertical Text Accent */}
        <div className="absolute left-8 bottom-12 hidden lg:block">
           <p className="text-[10px] tracking-[0.8em] font-black uppercase text-gold/20 [writing-mode:vertical-lr] rotate-180">
             Riverside • Orangecrest • Woodcrest
           </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold/30">
           <div className="w-px h-16 bg-linear-to-b from-gold to-transparent animate-pulse" />
        </div>
      </section>

      {/* Services Section - Redesigned for Luxury */}
      <section className="py-32 bg-rich-black relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gold/5 blur-[100px] rounded-full -translate-x-1/2 pointer-events-none" />

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-gold tracking-[0.4em] text-[10px] font-black uppercase flex items-center gap-3">
                  <div className="w-8 h-px bg-gold" /> The Experience
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                  Modern Glow,<br />
                  <span className="text-gold italic font-medium">Timeless Elegance.</span>
                </h2>
                <div className="w-16 h-0.5 bg-gold mt-6" />
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl pt-6">
                  No orange tones. No harsh chemicals. Just a flawless, custom-blended bronze that radiates confidence. Our luxury Riverside studio specializes in bridal, boudoir, and everyday glows.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                 {[
                   { title: "Custom Color", icon: Sparkles, desc: "Hand-blended solutions for your skin tone." },
                   { title: "Eco-Certified", icon: Heart, desc: "Organic, paraben-free, skin-loving ingredients." },
                   { title: "Rapid Rinse", icon: Clock, desc: "Process in 1-4 hours for ultimate convenience." },
                   { title: "Bridal Expert", icon: Star, desc: "Flawless finish for your most important day." }
                 ].map((feature, idx) => (
                   <div key={idx} className="group space-y-3">
                      <div className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-rich-black transition-all duration-500">
                         <feature.icon size={20} />
                      </div>
                      <h3 className="font-serif text-lg font-bold">{feature.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                   </div>
                 ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 border border-gold/10 transition-all duration-700 group-hover:inset-0" />
              <div className="relative aspect-3/4 overflow-hidden grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/images/Hero/melbee-glow-bridal-spray-tan-backless-dress-riverside.png" 
                  alt="Melbee Bronze and Glow Service" 
                  fill
                  className="object-cover transition-transform duration-1000 md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-rich-black via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 bg-gold text-rich-black p-10 hidden md:block group-hover:scale-110 transition-transform duration-500">
                 <p className="text-[10px] tracking-[0.4em] uppercase font-black mb-1">Book Today</p>
                 <h4 className="font-serif text-2xl font-bold italic">Riverside&apos;s Best</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="bg-rich-black/50 py-12 border-y border-gold/10 overflow-hidden">
        <div className="container-custom mb-10 flex flex-col items-center text-center space-y-4">
           <span className="font-sans text-[10px] tracking-[0.5em] text-gold uppercase font-black border-b border-gold/20 pb-2">Fake Tans, Real Reviews</span>
           <h2 className="font-luxury text-4xl md:text-6xl lg:text-7xl text-white block tracking-[0.12em] uppercase leading-tight pt-4">What Radiant Women are Saying</h2>
        </div>
        <StaggerTestimonials />
      </div>

      {/* Services Menu Component Replaced by a Sleek Section */}
      <section className="py-32 bg-[#050505]">
         <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-8">
               <div className="space-y-2">
                 <h2 className="font-luxury text-6xl md:text-8xl text-white tracking-[0.1em] uppercase leading-none">Curated</h2>
                 <p className="font-script text-3xl md:text-5xl text-gold pl-2">Tanning & Glow</p>
               </div>
               <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold leading-relaxed max-w-[280px] pt-4">Professional bronzing treatments tailored to your unique skin tone. Our organic solutions ensure a natural finish.</p>
               <Link href="/contact" className="inline-flex items-center gap-4 text-gold group pt-8">
                  <span className="text-[10px] tracking-[0.4em] font-black uppercase border-b border-gold/40 pb-1 group-hover:border-gold transition-colors">Book a Service</span>
                  <ChevronRight size={16} />
               </Link>
            </div>
            
            <div className="lg:col-span-2 divide-y divide-gold/20">
               {[
                 { 
                   name: "Bronze & Glow", 
                   price: "$55+", 
                   desc: "Custom blended classic or rapid solution, customized to your skin depth and tone goals.",
                   img: "/images/raw/melbee-glow-bronzing-golden-hour-ornagecrest.png"
                 },
                 { 
                   name: "Bridal Luxe", 
                   price: "$120+", 
                   desc: "Includes trial session, wedding day tan, and a luxury aftercare kit to ensure perfection.",
                   img: "/images/raw/wedding-spray-tan-golden-hour-riverside.png"
                 },
                 { 
                   name: "Body Sculpt", 
                   price: "Waitlist", 
                   desc: "Non-invasive contouring treatments to enhance your natural shape. Coming soon.",
                   img: "/images/raw/melbee-spray-tan-fitness-woodcrest.png"
                 }
               ].map((service, idx) => (
                 <div key={idx} className="group relative py-20 px-8 transition-all duration-700 hover:px-12 overflow-hidden">
                    {/* Hover Reveal Image */}
                    <div className="absolute inset-0 z-0 opacity-10 md:opacity-0 md:group-hover:opacity-10 transition-opacity duration-1000">
                       <Image src={service.img} alt={service.name} fill className="object-cover md:grayscale brightness-50" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                       <div className="space-y-4">
                          <h3 className="font-luxury text-3xl md:text-5xl text-white tracking-widest uppercase transition-transform duration-700 group-hover:translate-x-4">{service.name}</h3>
                          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 max-w-md leading-relaxed transition-all duration-700 group-hover:text-white/50">{service.desc}</p>
                       </div>
                       <span className="font-serif italic text-3xl text-gold self-end md:self-center transition-all duration-700 group-hover:scale-110">{service.price}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Gallery Section */}
      <section className="py-40 bg-rich-black">
        <div className="container-custom">
          <div className="text-center mb-24 space-y-6">
            <span className="text-gold tracking-[0.6em] text-xs font-black uppercase">The Gallery</span>
            <h2 className="font-luxury text-5xl md:text-7xl text-white block tracking-[0.1em] uppercase leading-tight">Melbee Glow</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <MasonryGallery images={galleryImages} limit={6} showLink={true} />
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-[#050505] py-20">
        <FAQSection 
          title="Curated Questions"
          description="Insights into your luxury bronzing experience."
          variant="dark"
          items={[
            {
              question: "How long does the session take?",
              answer: "The appointment itself takes about 25-30 minutes. This includes a personal color consultation, the application, and a luxury finishing powder application."
            },
            {
              question: "Which solution is right for me?",
              answer: "During your consultation, we'll discuss your goals. We offer Classic solutions (wash in 8-12h) and Rapid solutions (wash in 1-4h)."
            },
            {
              question: "How long will my glow last?",
              answer: "With proper prep and aftercare (using our recommended oil-free moisturizers), your tan will last 7-10 days."
            },
            {
              question: "Special precautions for Brides?",
              answer: "We recommend brides book their trial at least 3-4 weeks before the wedding, and their actual wedding tan 2 days before the ceremony."
            }
          ]}
        />
      </div>

      {/* Final CTA Redesigned */}
      <section className="py-40 relative overflow-hidden text-center bg-rich-black">
         <div className="absolute inset-0 opacity-20">
            <Image src="/images/Hero/melbee-glow-spray-tan-golden-hour-beach-riverside.png" alt="Melbee Glow Backdrop" fill className="object-cover blur-sm" />
         </div>
         <div className="absolute inset-0 bg-rich-black/80" />
         
         <div className="relative z-10 container-custom space-y-12">
            <h2 className="font-luxury text-6xl md:text-[8rem] text-white leading-none uppercase tracking-[0.05em]">Radiate Confidence</h2>
            <p className="text-gold tracking-[0.4em] uppercase text-xs font-black">Experience the elite riverside glow</p>
            <div className="flex flex-col md:flex-row justify-center gap-8 pt-10">
               <Link href="/contact">
                 <button className="bg-gold hover:bg-gold-dark text-white text-[11px] tracking-[0.5em] uppercase font-black px-24 py-8 transition-all duration-700 shadow-2xl hover:scale-105 active:scale-95">
                    Reserve Your Session
                 </button>
               </Link>
            </div>
         </div>
      </section>
    </div>
  )
}
