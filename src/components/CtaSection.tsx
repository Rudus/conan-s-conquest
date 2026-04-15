const STEAM_URL = "https://store.steampowered.com/app/3422000?utm_source=LandingPage";

const CtaSection = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Divider */}
      <div className="max-w-xs mx-auto mb-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
        <div className="w-2 h-2 rotate-45 bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-gold-gradient">
          The Cycle Draws Near
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Will you stand against impossible odds for the sake of all humanity, or will you abandon all hope and bring about the end times? Wishlist now and be ready when the world needs you.
        </p>

        <a
          href={STEAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-heading text-xl font-semibold tracking-widest uppercase rounded-sm glow-gold transition-all duration-300 hover:scale-105 hover:brightness-110"
        >
          Wishlist on Steam
        </a>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center text-sm text-muted-foreground">
        <p>© 2026 Terminal Zero. All rights reserved.</p>
      </div>
    </section>
  );
};

export default CtaSection;
