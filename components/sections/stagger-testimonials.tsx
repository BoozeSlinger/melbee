"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    testimonial: "The best spray tan in Riverside! I looked so natural for my wedding without any orange tones.",
    by: "Sarah M."
  },
  {
    id: 2,
    testimonial: "The 'I Do' Duo was essential. The trial gave me so much peace of mind before the big day.",
    by: "Jessica L."
  },
  {
    id: 3,
    testimonial: "I'm obsessed with the Glow & Contour. It made my confidence skyrocket for my photoshoot.",
    by: "Amanda T."
  },
  {
    id: 4,
    testimonial: "The drying powder finish is a game changer. I could get dressed immediately with no sticky feeling.",
    by: "Michelle R."
  },
  {
    id: 5,
    testimonial: "Melbee Glow is the only place I trust. The color is always perfect and lasts over a week.",
    by: "Elena G."
  }
];

export const StaggerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-20 px-4">
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Massive Background Quote Mark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="font-serif text-[40rem] text-gold opacity-[0.05] leading-none mb-40">“</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center space-y-12"
          >
            <p className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              "{testimonials[currentIndex].testimonial}"
            </p>
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.5em] text-gold font-black uppercase inline-block">
                {testimonials[currentIndex].by}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
          <button
            onClick={prev}
            className="p-4 text-white/20 hover:text-gold transition-colors pointer-events-auto"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>
          <button
            onClick={next}
            className="p-4 text-white/20 hover:text-gold transition-colors pointer-events-auto"
            aria-label="Next testimonial"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-4 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "w-1 h-1 rounded-full transition-all duration-500",
              idx === currentIndex ? "bg-gold scale-[2] w-4" : "bg-gold/20"
            )}
          />
        ))}
      </div>
    </div>
  );
};
