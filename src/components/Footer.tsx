import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone, Clock, Youtube } from 'lucide-react';
import LogoMark from './LogoMark';
import { brand } from '@/data/brand';
import { formatRs } from '@/store/shop';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#footer' },
  { label: 'Plant Care Guide', href: '#plant-care' },
];

const supportLinks = [
  { label: 'Shipping Policy', href: '#faq' },
  { label: 'Return Policy', href: '#faq' },
  { label: 'Privacy Policy', href: '#footer' },
  { label: 'Terms & Conditions', href: '#footer' },
  { label: 'FAQs', href: '#faq' },
];

const socials = [
  { icon: Instagram, href: brand.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: brand.social.facebook, label: 'Facebook' },
  { icon: Youtube, href: brand.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-forest-900 text-ivory">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <a href="#home" className="flex items-center gap-3 focus-gold rounded-lg">
            <LogoMark className="h-11 w-11" />
            <span className="leading-tight">
              <span className="block font-display text-xl font-bold tracking-[0.14em]">ZAMZAM</span>
              <span className="block font-sans text-[10px] uppercase tracking-[0.28em] text-gold-300">{brand.subtitle}</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
            {brand.tagline} Thoughtfully grown plants, elegant planters, and everything you need to make
            your space bloom.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition hover:border-gold hover:text-gold-200 focus-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-gold-300">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-ivory/65 transition hover:text-gold-200 focus-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Customer support">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-gold-300">Customer Support</h3>
          <ul className="mt-5 space-y-3">
            {supportLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-ivory/65 transition hover:text-gold-200 focus-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-gold-300">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-ivory/65">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{brand.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {brand.phone}
                <br />
                <a href={`https://wa.me/${brand.whatsapp}`} className="transition hover:text-gold-200 focus-gold">
                  WhatsApp: {brand.whatsappDisplay}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${brand.email}`} className="transition hover:text-gold-200 focus-gold">
                {brand.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{brand.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-x flex flex-col items-center justify-between gap-5 py-7 sm:flex-row">
          <p className="text-xs text-ivory/45">
            © {new Date().getFullYear()} {brand.name}. All rights reserved. Free delivery above{' '}
            {formatRs(brand.freeShippingThreshold)}.
          </p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['Visa', 'Mastercard', 'Amex', 'COD'].map((m) => (
              <span
                key={m}
                className="rounded-md border border-ivory/15 bg-ivory/5 px-2.5 py-1.5 font-sans text-[10px] font-semibold tracking-wide text-ivory/60"
              >
                {m}
              </span>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-300 transition hover:bg-gold hover:text-forest focus-gold"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
