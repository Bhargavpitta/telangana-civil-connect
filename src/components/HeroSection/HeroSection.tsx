import { motion } from 'framer-motion';

interface HeroCard {
  image: string;
  name: string;
  title: string;
  subtitle?: string;
  isLogo?: boolean;
}

interface HeroSectionProps {
  cards: HeroCard[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = ({ cards }: HeroSectionProps) => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/30">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto"
      >
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="hero-card w-full sm:w-80 max-w-sm"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.name}
                  className={`hero-card-image ${card.isLogo ? 'h-52' : 'h-64 rounded-lg'}`}
                  style={card.isLogo ? {} : { objectFit: 'cover' }}
                />
              </div>
              {!card.isLogo && (
                <div className="mt-4">
                  <h3 className="hero-card-title">{card.name}</h3>
                  <p className="hero-card-subtitle">{card.title}</p>
                  {card.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1">{card.subtitle}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gradient bar */}
      <div className="gradient-bar mt-8" />
    </section>
  );
};

export default HeroSection;
