import { Button } from "@/components/ui/Button"
import { Metadata } from 'next'
import { MapPin, Mail, Phone, Instagram } from "lucide-react"

export const metadata: Metadata = {
  title: 'Book an Appointment | Melbee Glow N Sculp Riverside',
  description: 'Book your luxury spray tan or bridal glow appointment at Melbee Glow N Sculp in Riverside, CA. Contact us for availability.',
}

export default function ContactPage() {
  return (
    <div className="bg-ivory pt-24 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
             <div>
               <h1 className="text-4xl md:text-5xl font-serif font-bold text-rich-black mb-6">Get in Touch</h1>
               <p className="text-lg text-charcoal">
                 Ready to glow? Fill out the form to request an appointment, or shoot us a DM on Instagram for the fastest response.
               </p>
             </div>

             <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <h3 className="font-serif text-lg font-bold">Studio Location</h3>
                   <p className="text-charcoal/80">
                     Riverside, CA <br/>
                     (Serving Orangecrest / Woodcrest)<br/>
                     <span className="text-sm text-gray-400 mt-1 block">Full address provided upon booking confirmation.</span>
                   </p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                   <Instagram size={20} />
                 </div>
                 <div>
                   <h3 className="font-serif text-lg font-bold">Instagram</h3>
                   <p className="text-charcoal/80">
                     <a href="https://instagram.com" className="hover:text-gold transition-colors">@melbeeglow</a><br/>
                     <span className="text-sm text-gray-400">DM for bookings & questions</span>
                   </p>
                 </div>
               </div>
               
               <div className="bg-rich-black text-white p-6 rounded-xl mt-8">
                 <h3 className="font-serif text-xl font-bold mb-2">Hours By Appointment</h3>
                 <ul className="space-y-1 text-sm text-gray-300">
                   <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 7:00 PM</span></li>
                   <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
                   <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                 </ul>
               </div>
             </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gold/10">
            <h2 className="text-2xl font-serif font-bold mb-6">Request Appointment</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 bg-gray-50/50" placeholder="Jane Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 bg-gray-50/50" placeholder="(951) 555-0123" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 bg-gray-50/50" placeholder="jane@example.com" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Service</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 bg-gray-50/50">
                    <option>Bronze & Glow (Classic)</option>
                    <option>Bronze & Glow (Rapid)</option>
                    <option>Bridal Trial</option>
                    <option>Wedding Day Tan</option>
                    <option>Group Party</option>
                    <option>Other / Questions</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Preferred Day</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 bg-gray-50/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Notes / Questions</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 bg-gray-50/50 h-32" placeholder="Tell us about your event or any specific requests..."></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full mt-2">
                Send Request
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
