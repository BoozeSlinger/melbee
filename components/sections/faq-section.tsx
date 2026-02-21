'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  description?: string
  items: FAQItem[]
  variant?: 'light' | 'dark'
}

export function FAQSection({ 
  title = "Frequently Asked Questions", 
  description, 
  items,
  variant = 'light'
}: FAQSectionProps) {
  const isDark = variant === 'dark'

  // Generate JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <section className={cn("py-20", isDark ? "bg-rich-black text-white" : "bg-white text-rich-black")}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className={cn("text-3xl md:text-4xl font-serif font-bold", isDark ? "text-white" : "text-rich-black")}>{title}</h2>
          {description && <p className={cn("max-w-2xl mx-auto", isDark ? "text-gray-400" : "text-charcoal/70")}>{description}</p>}
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={cn("border-b", isDark ? "border-gold/10" : "border-gray-100")}>
                <AccordionTrigger className={cn(
                  "text-left font-serif text-lg hover:text-gold hover:no-underline py-6",
                  isDark ? "text-white" : "text-rich-black"
                )}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className={cn("leading-relaxed pb-6", isDark ? "text-gray-400" : "text-charcoal/80")}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
