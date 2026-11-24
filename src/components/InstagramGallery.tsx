import { Instagram } from 'lucide-react';
import PlantArt from './PlantArt';
import { Reveal, SectionHeading } from './Reveal';
import { brand } from '@/data/brand';

const gallery = [
  { art: 'living' as const, backdrop: '#EFEAD9', alt: 'Modern green living room' },
  { art: 'planters' as const, backdrop: '#ECE7D9', alt: 'Elegant ceramic pots' },
  { art: 'indoor' as const, backdrop: '#EDE9DB', alt: 'Beautiful indoor plants' },
  { art: 'essentials' as const, backdrop: '#E7E9DC', alt: 'Home gardening essentials' },
  { art: 'shelf' as const, backdrop: '#EDE9DB', alt: 'Styling a plant shelf' },
  { art: 'balcony' as const, backdrop: '#F1EADC', alt: 'Luxury balcony garden' },
];

export default function InstagramGallery() {
  return (
    <section aria-label="Lifestyle gallery" className="bg-ivory py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="@zamzamnursery On Instagram"
          title="Life Looks Better in Green."
          description="Tag us in your plant corners — we love seeing how ZamZam greens take root in your homes."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {gallery.map((item, i) => (
            <Reveal key={i} delay={(i % 6) * 70}>
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.alt} — view on Instagram`}
                className="group relative block overflow-hidden rounded-2xl focus-gold"
              >
                <PlantArt variant={item.art} potColor="#E9E2CF" backdrop={item.backdrop} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-forest/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-gold-200" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <a href={brand.social.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-forest transition hover:text-gold-600 focus-gold">
            <Instagram className="h-4 w-4" /> Follow @zamzamnursery for daily green inspiration
          </a>
        </Reveal>
      </div>
    </section>
  );
}
