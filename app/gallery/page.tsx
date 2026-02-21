import { MasonryGallery } from "@/components/sections/masonry-gallery"
import { galleryImages } from "@/lib/gallery-data"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spray Tan Gallery Riverside | Real Results & Happy Clients',
  description: 'Explore our gallery of luxury spray tans in Riverside, Mission Grove, Orangecrest, and Woodcrest. See real bridal, fitness, and lifestyle results.',
  keywords: ['Spray Tan Gallery', 'Riverside Spray Tan Results', 'Bridal Tan Photos', 'Mission Grove', 'Orangecrest', 'Woodcrest']
}

export default function GalleryPage() {
  return (
    <div className="bg-ivory pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold tracking-widest text-sm font-semibold uppercase">Real Results</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-rich-black">The Glow Gallery</h1>
          <p className="text-lg text-charcoal leading-relaxed">
            From bridal radiance to fitness-ready bronze, see how a custom Melbee Glow transforms and enhances your natural beauty. 
            Serving Riverside, Mission Grove, Woodcrest and Orangecrest.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        <MasonryGallery images={galleryImages} />
        
        <div className="mt-20 text-center bg-white p-12 rounded-3xl shadow-sm border border-gold/10">
          <h2 className="text-3xl font-serif font-bold mb-4">Inspired by these results?</h2>
          <p className="text-charcoal/80 mb-8 max-w-xl mx-auto">
            Book your session today and let's craft your perfect custom shade together.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="btn-gold">Book Your Glow</a>
            <a href="/bronze-and-glow" className="btn-outline">View Pricing</a>
          </div>
        </div>
      </div>
    </div>
  )
}
