import { useState, type FormEvent } from 'react';
import { Mail, Leaf, Check, AlertCircle } from 'lucide-react';
import { Reveal } from './Reveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!valid) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('success');
    setMessage('Welcome to the green side — check your inbox soon.');
    setEmail('');
  };

  return (
    <section aria-label="Newsletter" className="bg-forest py-20 lg:py-24">
      <div className="container-x relative">
        <div className="pointer-events-none absolute -left-6 top-0 animate-sway-slow opacity-10" aria-hidden="true">
          <svg width="140" height="180" viewBox="0 0 100 120"><path d="M50 110 C30 80 28 40 42 12 C62 26 66 70 54 108 Z" fill="none" stroke="#C9A35C" strokeWidth="2" /></svg>
        </div>
        <div className="pointer-events-none absolute -right-4 bottom-0 animate-sway-slow opacity-10" aria-hidden="true">
          <svg width="120" height="160" viewBox="0 0 100 120"><path d="M50 110 C70 80 72 40 58 12 C38 26 34 70 46 108 Z" fill="none" stroke="#C9A35C" strokeWidth="2" /></svg>
        </div>

        <Reveal className="relative mx-auto max-w-2xl text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-forest-800">
            <Leaf className="h-6 w-6 text-gold" />
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold text-ivory sm:text-4xl">
            A Little More Green in Your Inbox.
          </h2>
          <p className="mt-4 leading-relaxed text-ivory/70">
            Receive plant care tips, new arrivals, gardening inspiration, and exclusive offers.
          </p>

          <form onSubmit={submit} noValidate className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-forest/40" />
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus('idle');
                }}
                placeholder="Your email address"
                className="w-full rounded-xl border border-ivory/20 bg-ivory/10 py-3.5 pl-11 pr-4 font-body text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
            </div>
            <button type="submit" className="btn-gold shrink-0">
              Subscribe
            </button>
          </form>

          <div aria-live="polite" className="mt-4 min-h-[24px]">
            {status === 'success' && (
              <p className="inline-flex items-center gap-2 rounded-full bg-sage-500/20 px-4 py-1.5 font-sans text-sm text-gold-200">
                <Check className="h-4 w-4" /> {message}
              </p>
            )}
            {status === 'error' && (
              <p className="inline-flex items-center gap-2 rounded-full bg-[#A65B45]/25 px-4 py-1.5 font-sans text-sm text-[#F0C5B4]">
                <AlertCircle className="h-4 w-4" /> {message}
              </p>
            )}
          </div>

          <p className="mt-2 text-xs leading-relaxed text-ivory/45">
            By subscribing you agree to receive plant care tips and offers from ZamZam Nursery. Unsubscribe anytime.
            We respect your privacy — your details are never shared.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
