'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GalleryImage {
  src: string
  alt: string
  aspectRatio: 'portrait' | 'landscape' | 'square'
}

interface MasonryGalleryProps {
  images: GalleryImage[]
  limit?: number
  showLink?: boolean
}

export function MasonryGallery({ images, limit, showLink }: MasonryGalleryProps) {
  const displayImages = limit ? images.slice(0, limit) : images

  return (
    <div className="space-y-8">
      {/* We use group/gallery on the container and group/card on items to coordinate the focus effect */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 group/gallery">
        {displayImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl break-inside-avoid group/card"
          >
            <div className={cn(
              "relative w-full overflow-hidden transition-all duration-700 ease-in-out",
              image.aspectRatio === 'portrait' ? 'aspect-3/4' : 
              image.aspectRatio === 'landscape' ? 'aspect-4/3' : 'aspect-square'
            )}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 md:grayscale md:group-hover/gallery:grayscale md:group-hover/gallery:opacity-50 md:group-hover/card:grayscale-0 md:group-hover/card:opacity-100 md:group-hover/card:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 md:group-hover/card:bg-black/10 transition-colors duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
      
      {showLink && (
        <div className="flex justify-center pt-8">
          <Link 
            href="/gallery" 
            className="group flex items-center gap-2 text-gold font-serif text-lg font-bold hover:text-gold-dark transition-colors"
          >
            View Full Gallery 
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              &rarr;
            </motion.span>
          </Link>
        </div>
      )}
    </div>
  )
}
