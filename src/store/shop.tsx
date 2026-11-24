import { createContext, useContext, useEffect, useMemo, useReducer, useState, type ReactNode } from 'react';
import type { Product } from '@/data/products';
import { products } from '@/data/products';
import { brand } from '@/data/brand';

export interface CartLine {
  id: string;
  qty: number;
}

interface ShopState {
  cart: CartLine[];
  wishlist: string[];
}

type Action =
  | { type: 'hydrate'; state: ShopState }
  | { type: 'add'; id: string; qty: number }
  | { type: 'remove'; id: string }
  | { type: 'qty'; id: string; qty: number }
  | { type: 'toggleWish'; id: string }
  | { type: 'clearCart' };

const STORAGE_KEY = 'zamzam-shop-v1';

function reducer(state: ShopState, action: Action): ShopState {
  switch (action.type) {
    case 'hydrate':
      return action.state;
    case 'add': {
      const existing = state.cart.find((l) => l.id === action.id);
      if (existing) {
        return { ...state, cart: state.cart.map((l) => (l.id === action.id ? { ...l, qty: Math.min(l.qty + action.qty, 99) } : l)) };
      }
      return { ...state, cart: [...state.cart, { id: action.id, qty: action.qty }] };
    }
    case 'remove':
      return { ...state, cart: state.cart.filter((l) => l.id !== action.id) };
    case 'qty': {
      if (action.qty <= 0) return { ...state, cart: state.cart.filter((l) => l.id !== action.id) };
      return { ...state, cart: state.cart.map((l) => (l.id === action.id ? { ...l, qty: Math.min(action.qty, 99) } : l)) };
    }
    case 'toggleWish':
      return {
        ...state,
        wishlist: state.wishlist.includes(action.id)
          ? state.wishlist.filter((w) => w !== action.id)
          : [...state.wishlist, action.id],
      };
    case 'clearCart':
      return { ...state, cart: [] };
    default:
      return state;
  }
}

export interface Toast {
  id: number;
  message: string;
  kind: 'success' | 'error' | 'info';
}

export interface CartTotals {
  subtotal: number;
  discount: number;
  shipping: number;
  codFee: number;
  total: number;
}

interface ShopContextValue {
  cart: CartLine[];
  wishlist: string[];
  cartCount: number;
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggleWishlist: (product: Product) => void;
  clearCart: () => void;
  isWished: (id: string) => boolean;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  quickView: Product | null;
  setQuickView: (p: Product | null) => void;
  coupon: string | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  totals: (cod?: boolean) => CartTotals;
  toasts: Toast[];
  pushToast: (message: string, kind?: Toast['kind']) => void;
  dismissToast: (id: number) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

const formatRs = (n: number) => `Rs. ${n.toLocaleString('en-US')}`;

export function ShopProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { cart: [], wishlist: [] });
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ShopState;
        if (Array.isArray(parsed.cart) && Array.isArray(parsed.wishlist)) {
          dispatch({ type: 'hydrate', state: parsed });
        }
      }
    } catch {
      /* corrupted storage: start fresh */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable */
    }
  }, [state]);

  const pushToast = (message: string, kind: Toast['kind'] = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t.slice(-3), { id, message, kind }]);
    window.setTimeout(() => setToasts((t) => t.filter((toast) => toast.id !== id)), 3200);
  };

  const dismissToast = (id: number) => setToasts((t) => t.filter((toast) => toast.id !== id));

  const productById = useMemo(() => new Map(products.map((p) => [p.id, p])), []);

  const addToCart = (product: Product, qty = 1) => {
    productById.set(product.id, product);
    dispatch({ type: 'add', id: product.id, qty });
    pushToast(`${product.name} added to cart`);
    setCartOpen(true);
  };

  const toggleWishlist = (product: Product) => {
    const wished = state.wishlist.includes(product.id);
    dispatch({ type: 'toggleWish', id: product.id });
    pushToast(wished ? `${product.name} removed from wishlist` : `${product.name} added to wishlist`, wished ? 'info' : 'success');
  };

  const removeFromCart = (id: string) => dispatch({ type: 'remove', id });
  const setQty = (id: string, qty: number) => dispatch({ type: 'qty', id, qty });
  const clearCart = () => dispatch({ type: 'clearCart' });
  const isWished = (id: string) => state.wishlist.includes(id);

  const applyCoupon = (code: string) => {
    const key = code.trim().toUpperCase();
    const c = brand.coupons[key as keyof typeof brand.coupons];
    if (!c) {
      pushToast('That coupon code is not valid', 'error');
      return false;
    }
    const subtotal = state.cart.reduce((sum, line) => {
      const p = productById.get(line.id);
      return sum + (p ? p.price * line.qty : 0);
    }, 0);
    if ('minSubtotal' in c && c.minSubtotal && subtotal < c.minSubtotal) {
      pushToast(`Coupon requires a minimum subtotal of ${formatRs(c.minSubtotal)}`, 'error');
      return false;
    }
    setCoupon(key);
    pushToast(`Coupon applied — ${c.label}`);
    return true;
  };

  const removeCoupon = () => setCoupon(null);

  const totals = (cod = false): CartTotals => {
    const subtotal = state.cart.reduce((sum, line) => {
      const p = productById.get(line.id);
      return sum + (p ? p.price * line.qty : 0);
    }, 0);
    let discount = 0;
    if (coupon) {
      const c = brand.coupons[coupon as keyof typeof brand.coupons];
      if (c) {
        if (c.type === 'percent') discount = Math.round((subtotal * c.value) / 100);
        else if (!('minSubtotal' in c) || !c.minSubtotal || subtotal >= c.minSubtotal) discount = c.value;
      }
    }
    const afterDiscount = subtotal - discount;
    const shipping = subtotal === 0 || afterDiscount >= brand.freeShippingThreshold ? 0 : brand.shippingFee;
    const codFee = cod ? brand.codFee : 0;
    return { subtotal, discount, shipping, codFee, total: afterDiscount + shipping + codFee };
  };

  const cartCount = state.cart.reduce((n, l) => n + l.qty, 0);

  const value: ShopContextValue = {
    cart: state.cart,
    wishlist: state.wishlist,
    cartCount,
    addToCart,
    removeFromCart,
    setQty,
    toggleWishlist,
    clearCart,
    isWished,
    cartOpen,
    setCartOpen,
    searchOpen,
    setSearchOpen,
    quickView,
    setQuickView,
    coupon,
    applyCoupon,
    removeCoupon,
    totals,
    toasts,
    pushToast,
    dismissToast,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop(): ShopContextValue {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
}

export { formatRs };
