import heroBgAsset from "@/assets/hero-bg-new.png.asset.json";
const heroBg = heroBgAsset.url;
import featureCombat from "@/assets/feature-combat.mp4";
import featureWorld from "@/assets/feature-world.mp4";
import featureArmy from "@/assets/feature-army.mp4";

const FACTS = [
  { label: "Developer", value: "Terminal Zero" },
  { label: "Publisher", value: "Terminal Zero" },
  { label: "Release", value: "2026" },
  { label: "Platforms", value: "PC (Steam, GOG)" },
  { label: "Genre", value: "Open World Strategy RPG" },
  { label: "Engine", value: "Unity" },
  { label: "Players", value: "Single-player" },
  {
    label: "Steam Store",
    value: (
      <a
        href="https://store.steampowered.com/app/3422000/Ward_Off_Evil/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold hover:underline"
      >
        View page
      </a>
    ),
  },
];

const PRESS_EMAIL = "terminal.zero.games@proton.me";

const PresskitSection = () => {
  return (
    <section className="py-24 px-6 relative" id="presskit">
      {/* Section divider */}
      <div className="max-w-xs mx-auto mb-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
        <div className="w-2 h-2 rotate-45 bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4 text-gold-gradient">
          Press Kit
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
          Resources for press, content creators, and partners
        </p>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Fact sheet */}
          <div className="lg:col-span-1 relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/40" />
            <div className="border border-border bg-card/40 p-8 rounded-sm h-full">
              <h3 className="font-heading text-xl font-semibold mb-6 text-gold-gradient">
                Fact Sheet
              </h3>
              <dl className="space-y-3 text-sm">
                {FACTS.map((f) => (
                  <div
                    key={f.label}
                    className="flex justify-between gap-4 border-b border-border/50 pb-2"
                  >
                    <dt className="text-muted-foreground uppercase tracking-wider text-xs">
                      {f.label}
                    </dt>
                    <dd className="text-foreground text-right font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Description + assets */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-gold-gradient">
                About the Game
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <span className="text-foreground font-semibold">Ward Off Evil</span> is a dark, tactical RPG where you lead a mercenary warband across a grueling, post-apocalyptic wasteland. Every turn, food ration, and paid wage dictates your survival, while dark mysteries are uncovered through classic, text-based lore.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hardcore Tactical Combat: Face your foes in unforgiving, grid-based battles. Master the strengths and weaknesess of units, time your attack and defence, and utilize different skills to survive.
              </p>
            </div>

            {/* Screenshots */}
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-gold-gradient">
                Screenshots & Media
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <a
                  href={heroBg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-sm border border-border hover:border-gold/60 transition-colors"
                >
                  <img src={heroBg} alt="Hero key art" className="w-full h-24 object-cover" />
                </a>
                {[featureCombat, featureWorld, featureArmy].map((src, i) => (
                  <a
                    key={i}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-sm border border-border hover:border-gold/60 transition-colors"
                  >
                    <video
                      src={src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-24 object-cover"
                    />
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Click any thumbnail to open the full asset. For the complete media pack,
                contact us below.
              </p>
            </div>

            {/* Contact */}
            <div className="border border-gold/30 bg-card/40 p-6 rounded-sm">
              <h3 className="font-heading text-xl font-semibold mb-3 text-gold-gradient">
                Press Contact
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                For interviews, review copies, or additional assets, reach out directly.
              </p>
              <a
                href={`mailto:${PRESS_EMAIL}?subject=Ward Off Evil — Press Inquiry`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-widest uppercase rounded-sm glow-gold transition-all duration-300 hover:scale-105 hover:brightness-110"
              >
                {PRESS_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresskitSection;
