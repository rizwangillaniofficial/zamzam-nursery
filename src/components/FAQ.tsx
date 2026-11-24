import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { faqs } from '@/data/content';
import { Reveal, SectionHeading } from './Reveal';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory-50 py-20 lg:py-28">
      <div className="container-x max-w-4xl">
        <SectionHeading
          eyebrow="Good To Know"
          title="Frequently Asked Questions"
          description="Everything you need to know about ordering, delivery, and caring for your plants."
        />

        <div className="mt-12 space-y-3.5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={Math.min(i * 60, 240)}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen ? 'border-gold/50 shadow-card' : 'border-forest/10 hover:border-forest/25'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left focus-gold"
                  >
                    <MessageCircleQuestion className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? 'text-gold-600' : 'text-forest/40'}`} />
                    <span className="flex-1 font-sans text-[15px] font-semibold text-forest">{item.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-[3.75rem] text-sm leading-relaxed text-charcoal/65">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
