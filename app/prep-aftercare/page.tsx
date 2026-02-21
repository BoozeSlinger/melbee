import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Sparkles, Calendar, ShowerHead, Heart, CheckCircle2, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Prep & Aftercare | Melbee Glow N Sculp Riverside",
  description: "How to prepare for and maintain your luxury spray tan in Riverside. Follow our guide for a flawless, long-lasting glow.",
}

export default function PrepAftercarePage() {
  return (
    <div className="pt-24 min-h-screen bg-ivory">
      {/* Header */}
      <section className="py-16 bg-rich-black text-white text-center">
        <div className="container-custom max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">The Science of a Flawless Glow</h1>
          <p className="text-lg text-gray-400 font-light">
            Preparation and maintenance are 50% of your results. Follow this guide to ensure your custom tan looks perfect and lasts 7-10 days.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Preparation Side */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-gold/20 pb-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Calendar size={24} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-rich-black">Before Your Session</h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">24 Hours Prior: Exfoliate</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Exfoliate entire body with an exfoliation mitt or oil-free scrub. Pay special attention to dry areas like elbows, knees, and ankles.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Hair Removal</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Any shaving or waxing should be done at least 24 hours before your appointment to allow pores to close.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Day of: Clean Skin</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Do not apply lotions, oils, perfumes, or deodorant the day of your tan. These can create a barrier and cause an uneven tan.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">What to Wear</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Wear dark, loose-fitting clothing and flip-flops to your appointment. Avoid leggings, jeans, or tight bras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Aftercare Side */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-gold/20 pb-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <ShowerHead size={24} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-rich-black">Aftercare & Maintenance</h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">The First Rinse</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Wait the recommended time (provided at session) before rinsing. Use lukewarm water only—no soap, shampoo, or scrubbing.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Pat Dry</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    After your first rinse, gently pat your skin dry with a towel. Do not rub.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Hydrate & Moisturize</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Wait until after your second shower (with soap) to begin moisturizing. Use a tan-safe, oil-free moisturizer twice daily.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Avoid These</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Avoid swimming, long hot baths, saunas, and excessive sweating for the first 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips Section */}
        <section className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gold/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold flex-shrink-0">
              <Sparkles size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Melbee's Pro Glow Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold mt-1" />
                  <p className="text-sm text-charcoal/80">Drink plenty of water to keep skin hydrated from the inside out.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold mt-1" />
                  <p className="text-sm text-charcoal/80">Use a fresh razor if you must shave while tanned.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold mt-1" />
                  <p className="text-sm text-charcoal/80">Bring an umbrella if rain is in the forecast on your appointment day.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold mt-1" />
                  <p className="text-sm text-charcoal/80">Sleep on dark sheets the first night of your tan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <div className="mt-12 bg-red-50 rounded-2xl p-6 border border-red-100 flex items-start gap-4">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-1" />
          <p className="text-sm text-red-800">
            <strong>Disclaimer:</strong> Spray tans do not contain SPF and do not protect you from UV rays. Please continue to wear sunscreen! (Oil-free recommended).
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center space-y-8">
          <h2 className="text-3xl font-serif font-bold">Ready for your glow?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/contact">
              Book Your Appointment
            </Button>
            <Button size="lg" variant="outline" href="/gallery">
              View Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
