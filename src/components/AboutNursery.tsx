import { ArrowRight, Check } from 'lucide-react';
import PlantArt from './PlantArt';
import { Reveal } from './Reveal';

const highlights = [
  'Carefully nurtured plants',
  'Responsible growing practices',
  'Quality-focused selection',
  'Personal plant care guidance',
];

export default function AboutNursery() {
  return (
    <section id="about" className="bg-ivory-50 py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" aria-hidden="true" />
          <PlantArt
            variant="outdoor"
            potColor="#E9E2CF"
            backdrop="#E8EBDA"
            className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-cardHover"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-gold/40 bg-forest p-5 shadow-cardHover sm:block lg:-right-8">
            <p className="font-display text-2xl italic text-gold-200">Grown by hand,</p>
            <p className="font-display text-2xl italic text-ivory">delivered with care.</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Grown With Love</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              More Than Plants.
              <br />
              A Greener Way of Living.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl leading-relaxed text-charcoal/70">
              At ZamZam Nursery, we believe that nature belongs in every home. Our mission is to make beautiful,
              healthy plants accessible while helping people create greener, calmer, and more inspiring spaces.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-3.5 w-3.5 text-gold-600" strokeWidth={3} />
                  </span>
                  <span className="font-sans text-sm font-medium text-charcoal/80">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={400}>
            <a href="#footer" className="btn-forest mt-10">
              Discover Our Story <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
