import { useMemo, useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { Reveal, SectionHeading } from './Reveal';

const tabs = ['All Plants', 'Indoor', 'Outdoor', 'Flowering', 'Succulents'] as const;
const sorts = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Name: A to Z'] as const;

export default function ProductGrid() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('All Plants');
  const [sort, setSort] = useState<(typeof sorts)[number]>('Featured');
  const [maxPrice, setMaxPrice] = useState(4500);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const visible = useMemo(() => {
    let list = products.filter((p) => p.price <= maxPrice);
    if (tab !== 'All Plants') list = list.filter((p) => p.category === tab);
    switch (sort) {
      case 'Price: Low to High':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'Name: A to Z':
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [tab, sort, maxPrice]);

  return (
    <section id="shop" className="bg-ivory-50 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Customer Favorites"
          title="Our Best Sellers"
          description="Hand-picked favorites from our nursery, loved for their beauty, resilience, and effortless style."
        />

        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-2.5" role="tablist" aria-label="Filter products by category">
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2.5 font-sans text-sm font-medium transition-all duration-300 focus-gold ${
                  tab === t
                    ? 'bg-forest text-ivory shadow-card'
                    : 'border border-forest/15 bg-white text-charcoal/70 hover:border-gold hover:text-forest'
                }`}
              >
                {t}
              </button>
            ))}
            <button
              onClick={() => setFiltersOpen((o) => !o)}
              aria-expanded={filtersOpen}
              className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-5 py-2.5 font-sans text-sm font-medium text-charcoal/70 transition hover:border-gold hover:text-forest focus-gold"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
          </div>
        </Reveal>

        <div
          className={`grid overflow-hidden transition-all duration-500 ease-out ${
            filtersOpen ? 'mt-6 max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-2xl border border-forest/10 bg-white p-6 shadow-card sm:flex-row sm:items-end">
            <div className="flex-1">
              <label htmlFor="price-range" className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/60">
                Max price: Rs. {maxPrice.toLocaleString('en-US')}
                {maxPrice >= 4500 && ' (all)'}
              </label>
              <input
                id="price-range"
                type="range"
                min={899}
                max={4500}
                step={100}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-2 w-full accent-gold-600"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="sort" className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/60">
                Sort by
              </label>
              <select id="sort" value={sort} onChange={(e) => setSort(e.target.value as (typeof sorts)[number])} className="input-field mt-2">
                {sorts.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => {
                setMaxPrice(4500);
                setSort('Featured');
                setFiltersOpen(false);
              }}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 font-sans text-xs font-semibold text-forest transition hover:bg-forest-50 focus-gold"
            >
              <X className="h-3.5 w-3.5" /> Reset
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="mx-auto mt-12 max-w-md rounded-3xl border border-dashed border-forest/20 bg-white p-10 text-center">
            <p className="font-display text-xl text-forest">No plants match those filters</p>
            <p className="mt-2 text-sm text-charcoal/60">Try raising the price range or choosing another category.</p>
          </div>
        )}

        <Reveal className="mt-14 text-center">
          <a href="#shop" className="btn-outline">
            View All Products
          </a>
        </Reveal>
      </div>
    </section>
  );
}
