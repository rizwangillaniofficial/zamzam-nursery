export type CareLevel = 'Easy' | 'Moderate' | 'Expert';

export type LightNeed = 'Low Light' | 'Bright Indirect' | 'Direct Sun';

export interface Product {
  id: string;
  name: string;
  category: 'Indoor' | 'Outdoor' | 'Flowering' | 'Succulents';
  price: number;
  originalPrice?: number;
  badge?: 'Best Seller' | 'New Arrival';
  care: CareLevel;
  light: LightNeed;
  petSafe?: boolean;
  water: 'Every 1–2 weeks' | 'Weekly' | 'Every 2–3 weeks' | 'Twice a week';
  spaces: Array<'living' | 'bedroom' | 'office' | 'balcony' | 'garden'>;
  description: string;
  potColor: string;
  backdrop: string;
  art: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    category: 'Indoor',
    price: 2499,
    originalPrice: 2999,
    badge: 'Best Seller',
    care: 'Easy',
    light: 'Bright Indirect',
    water: 'Every 1–2 weeks',
    petSafe: false,
    spaces: ['living', 'office'],
    description:
      'The iconic split-leaf philodendron. Bold, architectural foliage that turns any corner into a tropical statement — grown strong in our nursery and shipped in a premium ceramic planter.',
    potColor: '#E9E2CF',
    backdrop: '#F0EBDD',
    art: 'monstera',
    rating: 4.9,
    reviews: 132,
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    category: 'Indoor',
    price: 1299,
    badge: 'Best Seller',
    care: 'Easy',
    light: 'Low Light',
    water: 'Every 2–3 weeks',
    petSafe: false,
    spaces: ['bedroom', 'office', 'living'],
    description:
      'Nearly indestructible and endlessly elegant. The Snake Plant thrives on neglect, purifies your air, and brings sculptural structure to dim corners and desks alike.',
    potColor: '#D8CBB0',
    backdrop: '#EDE7D6',
    art: 'snake',
    rating: 4.8,
    reviews: 208,
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    category: 'Flowering',
    price: 1899,
    care: 'Easy',
    light: 'Low Light',
    water: 'Weekly',
    petSafe: false,
    spaces: ['bedroom', 'living'],
    description:
      'Glossy deep-green leaves crowned with serene white spathes. A classic flowering houseplant that blooms for months and signals exactly when it wants a drink.',
    potColor: '#F2EFE6',
    backdrop: '#EFEBDF',
    art: 'peacelily',
    rating: 4.7,
    reviews: 96,
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    category: 'Indoor',
    price: 2199,
    care: 'Moderate',
    light: 'Bright Indirect',
    water: 'Weekly',
    petSafe: false,
    spaces: ['living', 'office'],
    description:
      'Thick, lacquered leaves in deep botanical green. The Rubber Plant grows with you — compact on a side table, dramatic when it reaches the ceiling.',
    potColor: '#CFC5AA',
    backdrop: '#ECE6D4',
    art: 'rubber',
    rating: 4.8,
    reviews: 74,
  },
  {
    id: 'areca-palm',
    name: 'Areca Palm',
    category: 'Indoor',
    price: 3499,
    care: 'Moderate',
    light: 'Bright Indirect',
    water: 'Weekly',
    petSafe: true,
    spaces: ['living', 'balcony'],
    description:
      'Feathery, arching fronds that bring soft, resort-style calm to bright rooms. Fully pet-safe, air-purifying, and one of the most generous plants we grow.',
    potColor: '#E5DCC5',
    backdrop: '#F1ECE0',
    art: 'palm',
    rating: 4.6,
    reviews: 61,
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 899,
    badge: 'New Arrival',
    care: 'Easy',
    light: 'Direct Sun',
    water: 'Every 2–3 weeks',
    petSafe: false,
    spaces: ['balcony', 'office'],
    description:
      'Beauty with benefits. Sculptural gel-filled leaves, sun-loving and drought-tolerant — the perfect first succulent for sunny windowsills and balconies.',
    potColor: '#D9C89A',
    backdrop: '#F2EDDE',
    art: 'aloe',
    rating: 4.9,
    reviews: 154,
  },
  {
    id: 'fiddle-leaf-fig',
    name: 'Fiddle Leaf Fig',
    category: 'Indoor',
    price: 4499,
    originalPrice: 4999,
    care: 'Expert',
    light: 'Bright Indirect',
    water: 'Weekly',
    petSafe: false,
    spaces: ['living'],
    description:
      'The designer’s statement tree. Enormous violin-shaped leaves and a sculptural silhouette for bright, spacious interiors. Rewarding for attentive plant parents.',
    potColor: '#EDE6D3',
    backdrop: '#F0EBDC',
    art: 'fiddle',
    rating: 4.5,
    reviews: 43,
  },
  {
    id: 'golden-pothos',
    name: 'Golden Pothos',
    category: 'Indoor',
    price: 999,
    badge: 'Best Seller',
    care: 'Easy',
    light: 'Low Light',
    water: 'Every 1–2 weeks',
    petSafe: false,
    spaces: ['office', 'bedroom', 'living'],
    description:
      'Cascading vines variegated in gold and green. Effortless on shelves and in hanging planters — one of the most forgiving and fastest-growing plants we sell.',
    potColor: '#E3D9BF',
    backdrop: '#EEE9D8',
    art: 'pothos',
    rating: 4.9,
    reviews: 187,
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus Rosa-Sinensis',
    category: 'Outdoor',
    price: 1699,
    badge: 'New Arrival',
    care: 'Moderate',
    light: 'Direct Sun',
    water: 'Twice a week',
    petSafe: true,
    spaces: ['garden', 'balcony'],
    description:
      'Radiant tropical blooms in sunset red, flowering almost year-round in warm climates. A terrace classic that rewards sunshine with extravagance.',
    potColor: '#E0CFA6',
    backdrop: '#F1EADB',
    art: 'hibiscus',
    rating: 4.6,
    reviews: 58,
  },
  {
    id: 'desert-rose',
    name: 'Adenium Desert Rose',
    category: 'Outdoor',
    price: 2299,
    care: 'Moderate',
    light: 'Direct Sun',
    water: 'Every 1–2 weeks',
    petSafe: false,
    spaces: ['balcony', 'garden'],
    description:
      'A sculptural swollen caudex crowned with trumpet blooms. Drought-loving and bonsai-like, the Desert Rose is a collector’s outdoor showpiece.',
    potColor: '#D3C092',
    backdrop: '#EFEBDD',
    art: 'adenium',
    rating: 4.7,
    reviews: 36,
  },
  {
    id: 'jade-plant',
    name: 'Jade Plant',
    category: 'Succulents',
    price: 1099,
    care: 'Easy',
    light: 'Direct Sun',
    water: 'Every 2–3 weeks',
    petSafe: false,
    spaces: ['office', 'balcony'],
    description:
      'A symbol of prosperity with plump, glossy, tree-like branches. Lives for decades, tolerates dry air, and asks only for sun and patience.',
    potColor: '#DFD3B2',
    backdrop: '#F0EBDC',
    art: 'jade',
    rating: 4.8,
    reviews: 88,
  },
  {
    'id': 'rose-bush',
    name: 'Rose Bush',
    category: 'Flowering',
    price: 1999,
    care: 'Moderate',
    light: 'Direct Sun',
    water: 'Twice a week',
    petSafe: true,
    spaces: ['garden', 'balcony'],
    description:
      'Fragrant, layered blooms on a hardy garden bush. Grown outdoors at our nursery for strong stems and an abundance of classic roses through the season.',
    potColor: '#E6D6AE',
    backdrop: '#F1ECDC',
    art: 'rose',
    rating: 4.5,
    reviews: 52,
  },
];

export const newArrivals = products.filter((p) => p.badge === 'New Arrival' || ['hibiscus', 'desert-rose', 'jade-plant'].includes(p.id));
