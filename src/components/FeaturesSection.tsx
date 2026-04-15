import featureCombat from "@/assets/feature-combat.jpg";
import featureWorld from "@/assets/feature-world.jpg";
import featureArmy from "@/assets/feature-army.jpg";
import featureRpg from "@/assets/feature-rpg.jpg";

const FEATURES = [
  {
    title: "Turn-Based Tactical Combat",
    description: "Choose your engagements carefully, then face your foes in tactical, turn-based battles. Equip powerful Relics that can rewrite the rules of war.",
    image: featureCombat,
    alt: "Turn-based tactical combat on a fantasy battlefield",
  },
  {
    title: "Explore a Dying World",
    description: "Carve your path through an open world of crumbling civilizations. Trade between settlements, fight as a mercenary, or delve into mysterious dungeons.",
    image: featureWorld,
    alt: "Open world map with ancient ruins and settlements",
  },
  {
    title: "Build Your Army",
    description: "Recruit from four major factions — Lemurians, Thuleans, Hyperboreans, and Agarthans. Tame beasts, conjure Elementals, and command Thoughtforms.",
    image: featureArmy,
    alt: "Diverse fantasy army with warriors from different factions",
  },
  {
    title: "Deep RPG Character System",
    description: "Choose your tribe and background. Develop your character with active skills, passive perks, and otherworldly powers discovered across the wastes.",
    image: featureRpg,
    alt: "RPG character sheet with stats and skills",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative" id="features">
      {/* Section divider */}
      <div className="max-w-xs mx-auto mb-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
        <div className="w-2 h-2 rotate-45 bg-gold/60" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4 text-gold-gradient">
          Forge Your Legend
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-20 max-w-xl mx-auto">
          A sword & sorcery world awaits — where strategy meets story
        </p>

        <div className="space-y-32">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="overflow-hidden rounded-sm border border-border">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Gold corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/40" />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
