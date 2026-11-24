import { useState } from 'react';
import { LogIn, UserPlus, User, Check, AlertCircle } from 'lucide-react';
import { Reveal } from './Reveal';

type Mode = 'signin' | 'register';

export default function AccountSection() {
  const [mode, setMode] = useState<Mode>('signin');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get('email') ?? '');
    const password = String(data.get('password') ?? '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setStatus('error');
      setMessage('Password must be at least 6 characters.');
      return;
    }
    setStatus('success');
    setMessage(
      mode === 'signin'
        ? 'Accounts connect at launch — you will be able to sign in here once the store goes live.'
        : 'Account creation opens at launch. Your details have not been stored.'
    );
  };

  return (
    <section id="account" className="bg-ivory-50 py-20 lg:py-24">
      <div className="container-x max-w-md">
        <Reveal>
          <p className="eyebrow justify-center">Your Garden</p>
          <h2 className="mt-4 text-center font-display text-3xl font-semibold text-forest sm:text-4xl">Customer Account</h2>
          <p className="mt-3 text-center text-sm leading-relaxed text-charcoal/60">
            Track orders, save addresses, and manage your plant family — accounts go live at launch.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 rounded-3xl border border-forest/10 bg-white p-8 shadow-card">
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-ivory-100 p-1.5" role="tablist" aria-label="Account mode">
              {(
                [
                  { key: 'signin', label: 'Sign In', icon: LogIn },
                  { key: 'register', label: 'Register', icon: UserPlus },
                ] as const
              ).map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={mode === key}
                  onClick={() => {
                    setMode(key);
                    setStatus('idle');
                  }}
                  className={`flex items-center justify-center gap-2 rounded-lg py-2.5 font-sans text-sm font-semibold transition focus-gold ${
                    mode === key ? 'bg-forest text-ivory shadow-card' : 'text-charcoal/60 hover:text-forest'
                  }`}
                >
                  <Icon className="h-4 w-4" /> {label}
                </button>
              ))}
            </div>

            <form onSubmit={submit} className="mt-6 grid gap-3.5">
              {mode === 'register' && (
                <label className="sr-only" htmlFor="acc-name">Full name</label>
              )}
              {mode === 'register' && <input id="acc-name" name="name" placeholder="Full name" className="input-field" />}
              <label className="sr-only" htmlFor="acc-email">Email</label>
              <input id="acc-email" name="email" type="email" placeholder="Email address" required className="input-field" />
              <label className="sr-only" htmlFor="acc-pass">Password</label>
              <input id="acc-pass" name="password" type="password" placeholder="Password" required minLength={6} className="input-field" />
              <button type="submit" className="btn-forest mt-1 w-full">
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div aria-live="polite" className="mt-4 min-h-[24px] text-center">
              {status === 'success' && (
                <p className="inline-flex items-start gap-2 rounded-xl bg-sage-100 px-4 py-2 text-left font-sans text-xs leading-relaxed text-sage-600">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {message}
                </p>
              )}
              {status === 'error' && (
                <p className="inline-flex items-start gap-2 rounded-xl bg-[#F5E3DE] px-4 py-2 text-left font-sans text-xs leading-relaxed text-[#A65B45]">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {message}
                </p>
              )}
            </div>

            <p className="mt-2 flex items-center justify-center gap-2 text-xs text-charcoal/45">
              <User className="h-3.5 w-3.5" /> Guest checkout is always available — no account required to order.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
