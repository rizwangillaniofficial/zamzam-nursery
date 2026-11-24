import { useState } from 'react';
import { ArrowRight, Check, Heart, Leaf, RotateCcw, ShoppingBag, Sun, Droplets, PawPrint } from 'lucide-react';
import { getRecommendations, quizSteps, type QuizState } from '@/data/quiz';
import PlantArt from './PlantArt';
import ProductCard from './ProductCard';
import { Reveal } from './Reveal';
import { useShop } from '@/store/shop';

const initial: QuizState = { space: 'any', light: 'medium', experience: 'beginner', water: 'sometimes', petSafe: false };

const lightIcons: Record<string, typeof Sun> = { low: Leaf, medium: Sun, high: Sun };
const waterIcons: Record<string, typeof Droplets> = { rarely: Droplets, sometimes: Droplets, often: Droplets };

export default function PlantFinder() {
  const [step, setStep] = useState(0);
  const [quiz, setQuiz] = useState<QuizState>(initial);
  const [done, setDone] = useState(false);
  const { wishlist } = useShop();

  const current = quizSteps[step];
  const progress = Math.round((step / quizSteps.length) * 100);

  const choose = (value: string) => {
    const key = current.key;
    setQuiz((q) => ({ ...q, [key]: key === 'petSafe' ? value === 'yes' : value }));
    if (step + 1 < quizSteps.length) setStep(step + 1);
    else setDone(true);
  };

  const reset = () => {
    setQuiz(initial);
    setStep(0);
    setDone(false);
  };

  const recs = done ? getRecommendations(quiz, wishlist) : [];

  const Icon = current.key === 'light' ? lightIcons[quiz.light] ?? Sun : current.key === 'water' ? waterIcons[quiz.water] ?? Droplets : current.key === 'petSafe' ? PawPrint : Leaf;

  return (
    <section id="plant-finder" className="relative overflow-hidden bg-sage-100 py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-10 bottom-0 opacity-15" aria-hidden="true">
        <svg width="240" height="300" viewBox="0 0 100 120"><path d="M50 110 C30 80 28 40 42 12 C62 26 66 70 54 108 Z" fill="none" stroke="#526048" strokeWidth="1.5" /></svg>
      </div>
      <div className="pointer-events-none absolute -right-8 top-4 animate-sway-slow opacity-15" aria-hidden="true">
        <svg width="200" height="260" viewBox="0 0 100 120"><path d="M50 110 C70 80 72 40 58 12 C38 26 34 70 46 108 Z" fill="none" stroke="#526048" strokeWidth="1.5" /></svg>
      </div>

      <div className="container-x relative">
        {!done ? (
          <div className="mx-auto max-w-2xl">
            <Reveal className="text-center">
              <p className="eyebrow justify-center">Find Your Perfect Plant</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-4xl">
                Answer five questions.
                <br />
                Meet your perfect plant.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 rounded-3xl border border-forest/10 bg-white p-8 shadow-card sm:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage-100">
                    <Icon className="h-5 w-5 text-sage-600" />
                  </span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                    Question {step + 1} of {quizSteps.length}
                  </span>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-sage-100" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                  <div className="h-full rounded-full bg-gold transition-all duration-500" style={{ width: `${Math.max(progress, 6)}%` }} />
                </div>

                <h3 className="mt-7 font-display text-2xl font-semibold text-forest">{current.question}</h3>

                <div className="mt-6 grid gap-3">
                  {current.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => choose(opt.value)}
                      className="group flex items-center justify-between rounded-2xl border border-forest/12 bg-ivory-50 px-5 py-4 text-left font-sans text-sm font-medium text-charcoal transition-all duration-300 hover:border-gold hover:bg-gold-50 hover:pl-6 focus-gold"
                    >
                      {opt.label}
                      <ArrowRight className="h-4 w-4 text-gold-600 opacity-0 transition group-hover:opacity-100" />
                    </button>
                  ))}
                </div>

                {step > 0 && (
                  <button onClick={() => setStep(step - 1)} className="mt-6 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-charcoal/50 transition hover:text-forest focus-gold">
                    <RotateCcw className="h-3.5 w-3.5" /> Previous question
                  </button>
                )}
              </div>
            </Reveal>
          </div>
        ) : (
          <div>
            <Reveal className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                <Check className="h-6 w-6 text-gold-600" strokeWidth={3} />
              </span>
              <p className="eyebrow mt-5 justify-center">Your Green Match</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-forest sm:text-4xl">
                These plants will love your home
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-charcoal/65">
                Based on your space, light, routine, and (of course) your pets — here are our top picks for you.
              </p>
            </Reveal>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
              {recs.map((p, i) => (
                <Reveal key={p.id} delay={i * 120}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10 text-center">
              <button onClick={reset} className="btn-outline">
                <RotateCcw className="h-4 w-4" /> Retake the Quiz
              </button>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
