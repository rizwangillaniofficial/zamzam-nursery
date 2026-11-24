import { ShopProvider } from '@/store/shop';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import CategoryGrid from '@/components/CategoryGrid';
import ProductGrid from '@/components/ProductGrid';
import PromotionalBanner from '@/components/PromotionalBanner';
import ShopBySpace from '@/components/ShopBySpace';
import AboutNursery from '@/components/AboutNursery';
import PlantFinder from '@/components/PlantFinder';
import NewArrivals from '@/components/NewArrivals';
import BlogSection from '@/components/BlogSection';
import Testimonials from '@/components/Testimonials';
import InstagramGallery from '@/components/InstagramGallery';
import Newsletter from '@/components/Newsletter';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import QuickViewModal from '@/components/QuickViewModal';
import SearchOverlay from '@/components/SearchOverlay';
import Toasts from '@/components/Toasts';
import MobileNavigation from '@/components/MobileNavigation';
import WishlistSection from '@/components/WishlistSection';
import AccountSection from '@/components/AccountSection';

function App() {
  return (
    <ShopProvider>
      <a
        href="#shop"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-xl focus:bg-forest focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to shop
      </a>
      <Header />
      <main className="pb-16 lg:pb-0">
        <HeroSection />
        <TrustBar />
        <CategoryGrid />
        <ProductGrid />
        <PromotionalBanner />
        <ShopBySpace />
        <AboutNursery />
        <PlantFinder />
        <NewArrivals />
        <WishlistSection />
        <BlogSection />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
        <FAQ />
        <AccountSection />
      </main>
      <Footer />
      <CartDrawer />
      <QuickViewModal />
      <SearchOverlay />
      <Toasts />
      <MobileNavigation />
    </ShopProvider>
  );
}

export default App;
