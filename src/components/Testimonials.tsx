import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, BadgeCheck } from 'lucide-react';
import { testimonials } from '@/data/content';
import { Reveal, SectionHeading } from './Reveal';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), 6500);
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <section aria-label="Customer testimonials" className="relative overflow-hidden bg-ivory-50 py-20 lg:py-28">
      <div className="pointer-events-none absolute left-8 top-10 opacity-[0.08]" aria-hidden="true">
        <svg width="160" height="160" viewBox="0 0 100 100"><path d="M50 90 C20 60 18 30 32 12 C58 20 62 55 52 88 Z" fill="#85977A" /></svg>
      </div>

      <div className="container-x relative">
        <SectionHeading eyebrow="Kind Words" title="From Our Plant Family" description="We are growing our reviews garden. Real customer stories will bloom here soon." />

        <Reveal delay={150}>
          <div className="relative mx-auto mt-14 max-w-3xl">
            <Quote className="mx-auto h-12 w-12 text-gold/50" strokeWidth={1.2} aria-hidden="true" />

            <div className="relative mt-6 min-h-[210px] sm:min-h-[180px]">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-700 ${
                    i === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                  }`}
                  aria-hidden={i !== index}
                >
                  <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars (placeholder rating)`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`h-4 w-4 ${s < t.rating ? 'fill-gold text-gold' : 'text-forest/20'}`} />
                    ))}
                  </div>
                  <blockquote className="mt-5 max-w-2xl font-display text-xl italic leading-relaxed text-forest/85 sm:text-2xl">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <span className="font-sans text-sm font-semibold text-forest">{t.name}</span>
                    <span className="mx-2 text-gold">•</span>
                    <span className="inline-flex items-center gap-1 font-sans text-xs text-charcoal/50">
                      Placeholder Review
                      {t.verified && (
                        <span className="inline-flex items-center gap-1 text-sage-600">
                          <BadgeCheck className="h-3.5 w-3.5" /> Verified Purchase
                        </span>
                      )}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={() => setIndex((index - 1 + total) % total)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 bg-white text-forest transition hover:border-gold focus-gold"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 focus-gold ${i === index ? 'w-7 bg-gold' : 'w-2 bg-forest/15 hover:bg-forest/30'}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIndex((index + 1) % total)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 bg-white text-forest transition hover:border-gold focus-gold"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-6 text-center font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal/35">
              Placeholder reviews — genuine testimonials will replace these
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
