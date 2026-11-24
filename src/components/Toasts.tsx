import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';
import { useShop } from '@/store/shop';

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

const styles = {
  success: 'border-sage-300 text-sage-600',
  error: 'border-[#D8A08C] text-[#A65B45]',
  info: 'border-gold/50 text-gold-700',
};

export default function Toasts() {
  const { toasts, dismissToast } = useShop();

  return (
    <div aria-live="polite" className="pointer-events-none fixed bottom-24 left-1/2 z-[60] flex w-[92%] max-w-sm -translate-x-1/2 flex-col gap-2.5 sm:bottom-8 sm:left-auto sm:right-6 sm:translate-x-0">
      {toasts.map((t) => {
        const Icon = icons[t.kind];
        return (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-center gap-3 rounded-2xl border bg-white/95 px-4 py-3.5 shadow-cardHover backdrop-blur animate-fade-up ${styles[t.kind]}`}
            role="status"
          >
            <Icon className="h-5 w-5 shrink-0" />
            <p className="flex-1 font-sans text-sm font-medium text-charcoal">{t.message}</p>
            <button onClick={() => dismissToast(t.id)} aria-label="Dismiss notification" className="rounded p-1 text-charcoal/40 transition hover:text-charcoal focus-gold">
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
