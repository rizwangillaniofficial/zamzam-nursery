import { useEffect, useRef, useState, type ReactNode } from 'react';

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
}) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : 'text-left'}>
      <p className={`eyebrow ${light ? 'text-gold-200' : ''} justify-center`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-ivory' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
            light ? 'text-ivory/70' : 'text-charcoal/70'
          } ${align === 'left' ? 'sm:mx-0' : ''}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
