export interface Category {
  id: string;
  name: string;
  count: string;
  description: string;
  art: 'indoor' | 'outdoor' | 'flowering' | 'succulents' | 'planters' | 'essentials';
  backdrop: string;
}

export const categories: Category[] = [
  { id: 'indoor', name: 'Indoor Plants', count: '42 varieties', description: 'Monstera, Snake Plant & more', art: 'indoor', backdrop: '#EDE9DB' },
  { id: 'outdoor', name: 'Outdoor Plants', count: '36 varieties', description: 'Lush ornamental garden greens', art: 'outdoor', backdrop: '#E4E8DA' },
  { id: 'flowering', name: 'Flowering Plants', count: '28 varieties', description: 'Roses & season-long color', art: 'flowering', backdrop: '#F2E6DC' },
  { id: 'succulents', name: 'Succulents & Cacti', count: '31 varieties', description: 'Premium sculptural arrangements', art: 'succulents', backdrop: '#F0ECDD' },
  { id: 'planters', name: 'Ceramic Planters', count: '24 designs', description: 'Luxury handcrafted pots', art: 'planters', backdrop: '#ECE7D9' },
  { id: 'essentials', name: 'Gardening Essentials', count: '45 products', description: 'Tools, soil & accessories', art: 'essentials', backdrop: '#E7E9DC' },
];

export interface Space {
  id: 'living' | 'bedroom' | 'office' | 'balcony' | 'garden';
  name: string;
  tagline: string;
  backdrop: string;
}

export const spaces: Space[] = [
  { id: 'living', name: 'Living Room', tagline: 'Statement greens for shared spaces', backdrop: '#EFEAD9' },
  { id: 'bedroom', name: 'Bedroom', tagline: 'Calming, air-purifying companions', backdrop: '#E9EBDE' },
  { id: 'office', name: 'Office', tagline: 'Focus-friendly desk greenery', backdrop: '#EDE8DA' },
  { id: 'balcony', name: 'Balcony & Terrace', tagline: 'Sun-lovers for outdoor corners', backdrop: '#F1EADC' },
  { id: 'garden', name: 'Garden', tagline: 'Hardy outdoor blooms & foliage', backdrop: '#E5E9D8' },
];

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  art: 'watering' | 'shelf' | 'hands';
  backdrop: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'indoor-care',
    category: 'Plant Care',
    title: 'The Ultimate Guide to Indoor Plant Care',
    excerpt: 'Light, water, humidity, and feeding — everything you need to keep your indoor jungle thriving through every season.',
    readTime: '8 min read',
    art: 'shelf',
    backdrop: '#EDE9DB',
  },
  {
    id: 'beginner-plants',
    category: 'Beginners',
    title: 'Best Low-Maintenance Plants for Beginners',
    excerpt: 'Start your plant journey with forgiving, resilient varieties that shrug off missed waterings and dim corners.',
    readTime: '5 min read',
    art: 'hands',
    backdrop: '#E8EBDD',
  },
  {
    id: 'watering-right',
    category: 'Plant Care',
    title: 'How to Water Your Plants the Right Way',
    excerpt: 'Most houseplants are killed by kindness. Learn to read the soil, water deeply, and never again fear overwatering.',
    readTime: '6 min read',
    art: 'watering',
    backdrop: '#F0ECDC',
  },
];

export const faqs = [
  {
    q: 'How are plants packaged for delivery?',
    a: 'Every plant is watered the day before dispatch, secured in a protective sleeve, and cushioned inside a rigid box with its planter. Stakes and corner guards keep stems safe in transit, and each box includes a care card for its new plant.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery takes 2–4 business days within metro areas and 4–7 business days island-wide. You will receive a tracking link by email as soon as your order leaves the nursery. (Update this to match your live delivery schedule.)',
  },
  {
    q: 'How do I care for my new plant?',
    a: 'Give your plant a few days to adjust to its new light, then follow the care card included in the box — every card covers light, water, and feeding for your specific plant. Our plant care support is one message away whenever you need help.',
  },
  {
    q: 'Which plants are suitable for beginners?',
    a: 'Snake Plants, Golden Pothos, Aloe Vera, and Jade Plants are our most forgiving varieties — they tolerate irregular watering and lower light. You can also try the Find Your Perfect Plant quiz above for a tailored match.',
  },
  {
    q: 'What if my plant arrives damaged?',
    a: 'Contact us within 48 hours with a photo of the plant and packaging, and we will arrange a free replacement or full refund. (Update this to match your live return policy.)',
  },
  {
    q: 'Do you offer Cash on Delivery?',
    a: 'Yes — Cash on Delivery is available for orders within our delivery zones. A confirmation call or WhatsApp message is made before dispatch. (Update this to match your live payment options.)',
  },
  {
    q: 'Can I order plants in bulk?',
    a: 'Absolutely. We supply offices, hotels, restaurants, and events with curated green packages. Reach us on WhatsApp or email with your space details and we will prepare a tailored quote.',
  },
  {
    q: 'How can I contact plant care support?',
    a: 'Message us on WhatsApp, email care@zamzamnursery.example, or use the contact section below. Our plant care team replies within one business day — photos of your plant always help us help you faster.',
  },
];

export const testimonials = [
  {
    name: 'Placeholder Name',
    rating: 5,
    verified: false,
    text: 'This is a placeholder testimonial. Replace this text with genuine customer reviews as they come in — customers see clearly labeled placeholders until real reviews are connected.',
  },
  {
    name: 'Placeholder Name',
    rating: 5,
    verified: false,
    text: 'This is a placeholder testimonial. Genuine reviews, star ratings, and verified purchase badges can be switched on once real customer feedback is collected.',
  },
  {
    name: 'Placeholder Name',
    rating: 5,
    verified: false,
    text: 'This is a placeholder testimonial. The carousel supports customer names, photos, star ratings, and verified purchase badges when authentic review data is available.',
  },
];
