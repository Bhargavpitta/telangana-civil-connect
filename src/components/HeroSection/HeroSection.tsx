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
    <section className="py-12 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-full max-w-sm"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className={`w-full h-full ${
                      card.isLogo 
                        ? 'object-contain p-8' 
                        : 'object-cover object-top'
                    }`}
                  />
                </div>
              </div>
              
              {/* Information Below Card */}
              {!card.isLogo && (
                <div className="mt-6 text-center px-2">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {card.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-700 mb-1">
                    {card.title}
                  </p>
                  {card.subtitle && (
                    <p className="text-sm text-slate-600">
                      {card.subtitle}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;