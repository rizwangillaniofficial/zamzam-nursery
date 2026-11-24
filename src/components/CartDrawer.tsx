import { useState, type FormEvent } from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, Truck, Tag, Check, ChevronLeft, Wallet, Banknote, MessageCircle } from 'lucide-react';
import { products } from '@/data/products';
import { brand } from '@/data/brand';
import PlantArt from './PlantArt';
import { formatRs, useShop } from '@/store/shop';

const byId = new Map(products.map((p) => [p.id, p]));

type Step = 'cart' | 'checkout' | 'placed';

export default function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    setQty,
    removeFromCart,
    cartCount,
    coupon,
    applyCoupon,
    removeCoupon,
    totals,
    clearCart,
    pushToast,
  } = useShop();

  const [step, setStep] = useState<Step>('cart');
  const [couponInput, setCouponInput] = useState('');
  const [payment, setPayment] = useState<'card' | 'cod'>('cod');
  const [placing, setPlacing] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  const t = totals(payment === 'cod');
  const lines = cart.map((l) => ({ line: l, product: byId.get(l.id) })).filter((x) => x.product);

  const close = () => {
    setCartOpen(false);
    window.setTimeout(() => {
      if (step === 'placed') {
        setStep('cart');
      }
    }, 350);
  };

  const submitCoupon = (e: FormEvent) => {
    e.preventDefault();
    if (applyCoupon(couponInput)) setCouponInput('');
  };

  const checkout = (e: FormEvent) => {
    e.preventDefault();
    setPlacing(true);
    window.setTimeout(() => {
      setPlacing(false);
      setOrderRef(`ZZ-${Math.floor(100000 + Math.random() * 900000)}`);
      clearCart();
      removeCoupon();
      setStep('placed');
    }, 900);
  };

  return (
    <div className={`fixed inset-0 z-50 ${cartOpen ? '' : 'pointer-events-none'}`} aria-hidden={!cartOpen}>
      <div
        className={`absolute inset-0 bg-forest/60 backdrop-blur-sm transition-opacity duration-300 ${cartOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={close}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-drawer transition-transform duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-forest/10 px-6 py-5">
          {step === 'checkout' ? (
            <button onClick={() => setStep('cart')} className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-forest transition hover:text-gold-600 focus-gold">
              <ChevronLeft className="h-4 w-4" /> Back to cart
            </button>
          ) : (
            <h2 className="inline-flex items-center gap-2.5 font-display text-xl font-semibold text-forest">
              <ShoppingBag className="h-5 w-5 text-gold-600" />
              {step === 'placed' ? 'Order Received' : 'Your Cart'}
              {step === 'cart' && cartCount > 0 && (
                <span className="rounded-full bg-forest px-2.5 py-0.5 font-sans text-xs font-bold text-gold-200">{cartCount}</span>
              )}
            </h2>
          )}
          <button onClick={close} aria-label="Close cart" className="rounded-full p-2 text-forest transition hover:bg-forest/5 focus-gold">
            <X className="h-5 w-5" />
          </button>
        </div>

        {step === 'cart' && (
          <>
            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-forest-50">
                  <ShoppingBag className="h-8 w-8 text-forest/30" />
                </span>
                <p className="font-display text-xl font-semibold text-forest">Your cart is empty</p>
                <p className="text-sm leading-relaxed text-charcoal/60">
                  Your green sanctuary awaits. Explore our nursery favorites and find your perfect plant.
                </p>
                <a href="#shop" onClick={close} className="btn-gold mt-2">
                  Start Shopping
                </a>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
                  {lines.map(({ line, product }) => (
                    <div key={line.id} className="flex gap-4 rounded-2xl border border-forest/8 bg-white p-3.5 shadow-card">
                      <div className="group/image h-20 w-16 shrink-0 overflow-hidden rounded-xl">
                        <PlantArt variant={product!.art} potColor={product!.potColor} backdrop={product!.backdrop} className="h-full w-full" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <p className="truncate font-display text-sm font-semibold text-forest">{product!.name}</p>
                          <button onClick={() => removeFromCart(line.id)} aria-label={`Remove ${product!.name}`} className="rounded p-1 text-charcoal/35 transition hover:text-[#A65B45] focus-gold">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="mt-0.5 font-sans text-sm font-bold text-gold-600">{formatRs(product!.price)}</p>
                        <div className="mt-auto flex items-center gap-3 pt-2">
                          <div className="flex items-center rounded-lg border border-forest/15">
                            <button onClick={() => setQty(line.id, line.qty - 1)} aria-label="Decrease quantity" className="p-1.5 text-forest transition hover:text-gold-600 focus-gold">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-8 text-center font-sans text-sm font-semibold" aria-live="polite">{line.qty}</span>
                            <button onClick={() => setQty(line.id, line.qty + 1)} aria-label="Increase quantity" className="p-1.5 text-forest transition hover:text-gold-600 focus-gold">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="font-sans text-xs text-charcoal/45">
                            {formatRs(product!.price * line.qty)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-forest/10 bg-white px-6 py-5">
                  <form onSubmit={submitCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-forest/35" />
                      <input
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Coupon code (try ZAMZAM10)"
                        aria-label="Coupon code"
                        className="input-field pl-10 text-xs"
                      />
                    </div>
                    <button type="submit" className="rounded-xl border border-forest/20 px-4 font-sans text-xs font-semibold uppercase tracking-wide text-forest transition hover:border-gold hover:bg-gold/10 focus-gold">
                      Apply
                    </button>
                  </form>
                  {coupon && (
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-sage-100 px-3 py-1 font-sans text-xs font-medium text-sage-600">
                      <Check className="h-3.5 w-3.5" /> {coupon} applied
                      <button onClick={removeCoupon} className="ml-1 underline focus-gold">remove</button>
                    </p>
                  )}

                  <dl className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-charcoal/65">
                      <dt>Subtotal</dt>
                      <dd className="font-medium">{formatRs(t.subtotal)}</dd>
                    </div>
                    {t.discount > 0 && (
                      <div className="flex justify-between text-sage-600">
                        <dt>Discount</dt>
                        <dd className="font-medium">−{formatRs(t.discount)}</dd>
                      </div>
                    )}
                    <div className="flex justify-between text-charcoal/65">
                      <dt className="inline-flex items-center gap-1.5">
                        <Truck className="h-4 w-4 text-gold-600" /> Shipping
                      </dt>
                      <dd className="font-medium">{t.shipping === 0 ? 'Free' : formatRs(t.shipping)}</dd>
                    </div>
                    {t.shipping > 0 && (
                      <p className="rounded-lg bg-gold-50 px-3 py-2 text-xs text-gold-700">
                        Add {formatRs(brand.freeShippingThreshold - (t.subtotal - t.discount))} more for free delivery.
                      </p>
                    )}
                    <div className="flex justify-between border-t border-forest/10 pt-3 font-display text-lg font-semibold text-forest">
                      <dt>Total</dt>
                      <dd>{formatRs(t.total)}</dd>
                    </div>
                  </dl>

                  <button onClick={() => setStep('checkout')} className="btn-forest mt-4 w-full">
                    Proceed to Checkout
                  </button>
                  <a href={`https://wa.me/${brand.whatsapp}`} className="mt-2.5 flex items-center justify-center gap-2 font-sans text-xs font-semibold text-sage-600 transition hover:text-forest focus-gold">
                    <MessageCircle className="h-4 w-4" /> Or order via WhatsApp
                  </a>
                </div>
              </>
            )}
          </>
        )}

        {step === 'checkout' && (
          <form onSubmit={checkout} className="flex-1 overflow-y-auto px-6 py-5">
            <h3 className="font-display text-lg font-semibold text-forest">Delivery Details</h3>
            <div className="mt-4 grid gap-3">
              <input required placeholder="Full name" aria-label="Full name" className="input-field" />
              <input required type="tel" placeholder="Phone number" aria-label="Phone number" className="input-field" />
              <input required type="email" placeholder="Email (optional, for order updates)" aria-label="Email" className="input-field" />
              <input required placeholder="Delivery address" aria-label="Delivery address" className="input-field" />
              <div className="grid grid-cols-2 gap-3">
                <input required placeholder="City" aria-label="City" className="input-field" />
                <input required placeholder="Postal code" aria-label="Postal code" className="input-field" />
              </div>
              <label className="sr-only" htmlFor="notes">Order notes</label>
              <textarea id="notes" rows={2} placeholder="Notes for delivery (optional)" className="input-field resize-none" />
            </div>

            <h3 className="mt-6 font-display text-lg font-semibold text-forest">Payment Method</h3>
            <div className="mt-3 grid gap-2.5">
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${payment === 'cod' ? 'border-gold bg-gold-50' : 'border-forest/15 bg-white'}`}>
                <input type="radio" name="payment" checked={payment === 'cod'} onChange={() => setPayment('cod')} className="accent-gold-600" />
                <Banknote className="h-5 w-5 text-gold-600" />
                <span>
                  <span className="block font-sans text-sm font-semibold text-forest">Cash on Delivery</span>
                  <span className="block text-xs text-charcoal/55">Pay when your plants arrive</span>
                </span>
              </label>
              <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${payment === 'card' ? 'border-gold bg-gold-50' : 'border-forest/15 bg-white'}`}>
                <input type="radio" name="payment" checked={payment === 'card'} onChange={() => setPayment('card')} className="accent-gold-600" />
                <Wallet className="h-5 w-5 text-gold-600" />
                <span>
                  <span className="block font-sans text-sm font-semibold text-forest">Card / Online Payment</span>
                  <span className="block text-xs text-charcoal/55">Connects to a payment provider at launch</span>
                </span>
              </label>
            </div>

            <dl className="mt-6 space-y-2 rounded-2xl bg-forest-50 p-4 text-sm">
              <div className="flex justify-between text-charcoal/65">
                <dt>Subtotal</dt><dd>{formatRs(t.subtotal)}</dd>
              </div>
              {t.discount > 0 && (
                <div className="flex justify-between text-sage-600">
                  <dt>Discount</dt><dd>−{formatRs(t.discount)}</dd>
                </div>
              )}
              <div className="flex justify-between text-charcoal/65">
                <dt>Shipping{payment === 'cod' ? ' + COD handling' : ''}</dt>
                <dd>{t.shipping + t.codFee === 0 ? 'Free' : formatRs(t.shipping + t.codFee)}</dd>
              </div>
              <div className="flex justify-between border-t border-forest/10 pt-2 font-display text-base font-semibold text-forest">
                <dt>Total</dt><dd>{formatRs(t.total)}</dd>
              </div>
            </dl>

            <button type="submit" disabled={placing} className="btn-gold mt-5 w-full disabled:opacity-60">
              {placing ? 'Placing order…' : payment === 'cod' ? 'Place Order (Cash on Delivery)' : 'Continue to Payment'}
            </button>
            <p className="mt-3 text-center text-xs leading-relaxed text-charcoal/45">
              Guest checkout — no account needed. Orders are confirmed by our team before dispatch.
            </p>
          </form>
        )}

        {step === 'placed' && (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-100">
              <Check className="h-9 w-9 text-sage-600" strokeWidth={2.5} />
            </span>
            <p className="font-display text-2xl font-semibold text-forest">Thank you!</p>
            <p className="text-sm leading-relaxed text-charcoal/65">
              Your order <span className="font-semibold text-forest">{orderRef}</span> has been received. Our
              team will contact you shortly to confirm delivery details.
              {payment === 'card' && ' (This storefront is not yet connected to live payments — no money has been charged.)'}
            </p>
            <a href="#shop" onClick={close} className="btn-gold mt-2">
              Continue Shopping
            </a>
          </div>
        )}
      </aside>
    </div>
  );
}
