import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PresskitSection from "@/components/PresskitSection";
import CtaSection from "@/components/CtaSection";
import { trackClick } from "@/lib/trackClick";

const STEAM_URL = "https://store.steampowered.com/app/3422000?utm_source=LandingPage";

const SteamIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.84 4.17 10.71 9.7 11.8l3.08-4.38c-.13-.01-.26-.01-.39-.01-2.35 0-4.27-1.87-4.38-4.2L4.35 9.4a6.42 6.42 0 0 1 4.05-1.43c1.22 0 2.36.34 3.33.93l3.07-1.77A6.4 6.4 0 0 1 18.4 6c3.54 0 5.6 2.86 5.6 5.6 0 3.1-2.5 5.6-5.6 5.6-.36 0-.72-.03-1.06-.1l-2.68 3.82C20.53 20.16 24 16.5 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <section className="py-16 px-6 text-center">
        <a
          href={STEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackClick('wishlist_pre_presskit');
            // @ts-ignore
            if (window.gtag) {
              // @ts-ignore
              window.gtag('event', 'wishlist_click', {
                'button_location': 'pre_presskit',
                'destination': 'steam_store',
              });
            }
          }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading text-lg font-semibold tracking-widest uppercase rounded-sm glow-gold transition-all duration-300 hover:scale-105 hover:brightness-110"
        >
          <SteamIcon />
          Wishlist on Steam
        </a>
      </section>
      <PresskitSection />
      <CtaSection />
    </main>
  );
};

export default Index;
