import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="bg-rich-black min-h-screen text-white pt-40 pb-20">
      <div className="container-custom max-w-4xl space-y-12">
        <h1 className="font-luxury text-5xl md:text-7xl uppercase tracking-widest text-white">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-white/60 space-y-8 font-sans text-sm tracking-wide leading-relaxed uppercase">
          <p>By accessing Melbee Studio's services, you agree to the following terms and conditions.</p>
          <section className="space-y-4">
            <h2 className="text-gold font-serif italic text-2xl tracking-normal normal-case">Bookings & Cancellations</h2>
            <p>We require at least 24 hours notice for any cancellations. Failure to do so may result in a cancellation fee.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-gold font-serif italic text-2xl tracking-normal normal-case">Service Conduct</h2>
            <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
          </section>
        </div>
        <Link href="/" className="inline-block text-gold text-[10px] tracking-[0.4em] uppercase font-black border-b border-gold/20 pb-2 hover:text-white transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
