import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/content';
import PlantArt from './PlantArt';
import { Reveal, SectionHeading } from './Reveal';

export default function BlogSection() {
  return (
    <section id="plant-care" className="bg-ivory-50 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Plant Care Guide"
          title="Grow With Confidence"
          description="Practical guidance from our nursery team, so every plant you bring home keeps thriving."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 110}>
              <a href="#plant-care" className="group block overflow-hidden rounded-3xl border border-forest/5 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-cardHover focus-gold">
                <div className="overflow-hidden">
                  <PlantArt
                    variant={post.art}
                    potColor="#E9E2CF"
                    backdrop={post.backdrop}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-sage-100 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-sage-600">
                      {post.category}
                    </span>
                    <span className="font-sans text-xs text-charcoal/45">{post.readTime}</span>
                  </div>
                  <h3 className="mt-3.5 font-display text-xl font-semibold leading-snug text-forest transition group-hover:text-gold-600">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold text-forest">
                    Read Article
                    <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <a href="#plant-care" className="btn-outline">
            View All Guides
          </a>
        </Reveal>
      </div>
    </section>
  );
}
