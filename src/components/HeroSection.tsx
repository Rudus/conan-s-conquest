import heroBgAsset from "@/assets/hero-bg-new.png.asset.json";
import { trackClick } from "@/lib/trackClick";
const heroBg = heroBgAsset.url;

const STEAM_URL = "https://store.steampowered.com/app/3422000?utm_source=LandingPage";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Ward Off Evil - A warrior overlooking a dying world"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 text-gold-gradient animate-fade-in-up">
          Ward Off Evil
        </h1>
        <p className="font-body text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          An Open World Strategy RPG
        </p>
        <p className="font-body text-base md:text-lg text-gold/90 max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.4s", opacity: 0 }}>
          The world is already dead; you are just here to scavenge what's left. Lead a mercenary warband through a grueling, low-fantasy wasteland where ancient civilizations lie buried under cursed sands. There are no heroes here, no chosen ones saving the realm—only nameless wanderers, unpaid contracts, and a desperate struggle to keep your crew fed and alive. Will you build a legendary company, or become just another pile of bones in the desert?
        </p>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <a
  href={STEAM_URL}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    trackClick('wishlist_hero');
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', 'wishlist_click', {
        'button_location': 'hero_section',
        'destination': 'steam_store'
      });
    }
  }}
  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading text-lg font-semibold tracking-widest uppercase rounded-sm glow-gold transition-all duration-300 hover:scale-105 hover:brightness-110"
>
  <SteamIcon />
  Wishlist on Steam
</a>
        </div>

        <p className="mt-4 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
          Coming 2026 · By Terminal Zero
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-gold/60 rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

const SteamIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.84 4.17 10.71 9.7 11.8l3.08-4.38c-.13-.01-.26-.01-.39-.01-2.35 0-4.27-1.87-4.38-4.2L4.35 9.4a6.42 6.42 0 0 1 4.05-1.43c1.22 0 2.36.34 3.33.93l3.07-1.77A6.4 6.4 0 0 1 18.4 6c3.54 0 5.6 2.86 5.6 5.6 0 3.1-2.5 5.6-5.6 5.6-.36 0-.72-.03-1.06-.1l-2.68 3.82C20.53 20.16 24 16.5 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default HeroSection;
