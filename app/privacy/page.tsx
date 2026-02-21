import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="bg-rich-black min-h-screen text-white pt-40 pb-20">
      <div className="container-custom max-w-4xl space-y-12">
        <h1 className="font-luxury text-5xl md:text-7xl uppercase tracking-widest text-white">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-white/60 space-y-8 font-sans text-sm tracking-wide leading-relaxed uppercase">
          <p>Your privacy is of the utmost importance to Melbee Studio. This policy outlines how we handle your personal information.</p>
          <section className="space-y-4">
            <h2 className="text-gold font-serif italic text-2xl tracking-normal normal-case">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, make a booking, or join the Melbee Glow Co.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-gold font-serif italic text-2xl tracking-normal normal-case">How We Use Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you about your appointments and special offers.</p>
          </section>
        </div>
        <Link href="/" className="inline-block text-gold text-[10px] tracking-[0.4em] uppercase font-black border-b border-gold/20 pb-2 hover:text-white transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
