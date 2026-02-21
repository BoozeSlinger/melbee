"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Calendar, Gift, Star, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function GlowCoPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthday: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState('success')
  }

  const perks = [
    {
      icon: <Star className="text-gold" size={24} />,
      title: "10% Welcome Discount",
      desc: "Get a one-time 10% discount on your next tan immediately after joining."
    },
    {
      icon: <Gift className="text-gold" size={24} />,
      title: "Birthday Month Treat",
      desc: "A special surprise delivered to your inbox during your birthday month."
    },
    {
      icon: <Sparkles className="text-gold" size={24} />,
      title: "Elite Access",
      desc: "Early access to specials, model calls, and last-minute cancellation openings."
    }
  ]

  return (
    <div className="bg-rich-black min-h-screen text-white pt-32 pb-20">
      <div className="container-custom max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content side */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-gold tracking-[0.5em] text-[10px] font-black uppercase inline-block border-b border-gold/30 pb-2">
                Exclusive Community
              </span>
              <h1 className="font-luxury text-5xl md:text-7xl lg:text-8xl text-white leading-tight uppercase tracking-[0.05em]">
                Join Melbee Glow Co – <br />
                <span className="text-gold italic font-serif lowercase tracking-normal font-medium">Get 10% Off Your Glow.</span>
              </h1>
              <p className="font-sans text-white/40 text-sm md:text-base max-w-xl leading-relaxed tracking-wide mt-4">
                Drop your email and phone to get 10% off your next tan, plus early access to specials, model calls, and last‑minute openings.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 gap-8"
            >
              {perks.map((perk, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/5 transition-colors">
                    {perk.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl italic text-white group-hover:text-gold transition-colors">{perk.title}</h3>
                    <p className="text-white/30 text-xs tracking-widest leading-relaxed uppercase">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual Glassmorphism Container */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 rounded-2xl blur-xl opacity-50" />
            
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-2xl shadow-2xl">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-3xl shadow-gold/20">
                    <Check className="text-white" size={40} />
                  </div>
                  <h2 className="font-luxury text-4xl text-white uppercase tracking-widest">You're In.</h2>
                  <p className="font-serif italic text-lg text-white/60">Check your inbox for your 10% off welcome code.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-gold text-[10px] tracking-[0.4em] uppercase font-black pt-10 hover:text-white transition-colors"
                  >
                    Join Another Member?
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.3em] font-black uppercase text-gold/60">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:border-gold outline-none transition-all placeholder:text-white/10 font-serif text-xl italic"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.3em] font-black uppercase text-gold/60">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="hello@radiant.com" 
                      className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:border-gold outline-none transition-all placeholder:text-white/10 font-serif text-xl italic"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.3em] font-black uppercase text-gold/60">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(951) ___ - ____" 
                      className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:border-gold outline-none transition-all placeholder:text-white/10 font-serif text-xl italic"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.3em] font-black uppercase text-gold/60">Birthday Month & Day</label>
                    <input 
                      required
                      type="text" 
                      placeholder="MM/DD" 
                      className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:border-gold outline-none transition-all placeholder:text-white/10 font-serif text-xl italic"
                      value={formData.birthday}
                      onChange={(e) => setFormData({...formData, birthday: e.target.value})}
                    />
                    <p className="text-[10px] text-white/20 italic pt-2 tracking-widest">For your annual birthday treat.</p>
                  </div>

                  <button 
                    disabled={formState === 'loading'}
                    className="w-full bg-gold hover:bg-gold/90 text-white text-[11px] tracking-[0.5em] uppercase font-black py-8 transition-all duration-700 shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100"
                  >
                    {formState === 'loading' ? 'Processing...' : 'Join Glow Co.'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
