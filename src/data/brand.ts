export const brand = {
  name: 'ZAM ZAM',
  subtitle: 'Premium Plant Nursery',
  fullName: 'ZamZam Nursery',
  tagline: 'Bring Nature Home.',
  email: 'care@zamzamnursery.example',
  phone: '+94 11 000 0000',
  whatsapp: '947700000000',
  whatsappDisplay: '+94 77 000 0000',
  address: '12 Greenhouse Lane, Colombo 007, Sri Lanka',
  hours: 'Mon – Sat, 9:00 AM – 6:00 PM',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    pinterest: 'https://pinterest.com',
    youtube: 'https://youtube.com',
  },
  freeShippingThreshold: 5000,
  shippingFee: 350,
  codFee: 0,
  coupons: {
    ZAMZAM10: { type: 'percent' as const, value: 10, label: '10% off your order' },
    GREEN500: { type: 'fixed' as const, value: 500, label: 'Rs. 500 off orders above Rs. 3,000', minSubtotal: 3000 },
  },
} as const;

export const announcements = [
  'Free Delivery on Orders Above Rs. 5,000',
  'Premium Quality Plants',
  'Secure Shopping',
];

export interface PercentCoupon {
  type: 'percent';
  value: number;
  label: string;
}

export interface FixedCoupon {
  type: 'fixed';
  value: number;
  label: string;
  minSubtotal?: number;
}

export type Coupon = PercentCoupon | FixedCoupon;
