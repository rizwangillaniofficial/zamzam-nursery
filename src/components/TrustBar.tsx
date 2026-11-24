import { Flower2, Truck, ShieldCheck, Sprout } from 'lucide-react';
import { Reveal } from './Reveal';

const benefits = [
  { icon: Sprout, title: 'Healthy & Fresh Plants', text: 'Every plant leaves our nursery inspected, watered, and ready to thrive in its new home.' },
  { icon: Truck, title: 'Nationwide Delivery', text: 'Carefully packaged plants delivered safely to your doorstep, wherever you are.' },
  { icon: ShieldCheck, title: 'Secure Payments', text: 'Shop with confidence through encrypted checkout and trusted payment options.' },
  { icon: Flower2, title: 'Expert Gardening Support', text: 'Our plant care team guides you before and after your purchase — questions always welcome.' },
];

export default function TrustBar() {
  return (
    <section aria-label="Why shop with us" className="border-y border-gold/20 bg-ivory-50">
      <div className="container-x grid gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
        {benefits.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 90}>
            <div className={`flex flex-col items-start gap-3 sm:px-2 ${i > 0 ? 'lg:border-l lg:border-gold/25 lg:pl-10' : ''}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-white shadow-card">
                <Icon className="h-5 w-5 text-gold-600" strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-lg font-semibold text-forest">{title}</h3>
              <p className="text-sm leading-relaxed text-charcoal/65">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
