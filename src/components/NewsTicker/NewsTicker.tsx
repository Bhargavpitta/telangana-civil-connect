import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface NewsItem {
  text: string;
  href: string;
  isNew?: boolean;
}

const newsItems: NewsItem[] = [
  {
    text: 'e-Tender Notice No: PDS II(3)/ Coarse Variety (DB) / 2025-26, Dtd:20.12.25',
    href: '#',
    isNew: true,
  },
  {
    text: 'THE INDIAN EXPRESS About Telangana Rice Production',
    href: '#',
    isNew: true,
  },
  {
    text: 'The Print about Telangana Rice Production',
    href: '#',
    isNew: true,
  },
  {
    text: 'TELANGANA RICE REVOLUTION (VIDEO)',
    href: '#',
    isNew: true,
  },
  {
    text: 'Telangana at Bharat International Rice Conference 2025 held on October 30th-31st, 2025',
    href: '#',
    isNew: true,
  },
  {
    text: 'Telangana Rice Distribution in CEBU PROVINCE, PHILIPPINES',
    href: '#',
    isNew: true,
  },
];

const NewsTicker = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const tickerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const animate = () => {
      setTranslateX((prev) => {
        const newValue = prev - 1;
        const tickerWidth = tickerRef.current?.scrollWidth || 0;
        if (Math.abs(newValue) >= tickerWidth / 2) {
          return 0;
        }
        return newValue;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handlePrev = () => {
    setTranslateX((prev) => prev + 200);
  };

  const handleNext = () => {
    setTranslateX((prev) => prev - 200);
  };

  return (
    <section className="ticker-container">
      <div className="container mx-auto flex items-stretch">
        {/* Label */}
        <div className="ticker-label flex items-center flex-shrink-0">
          Latest News
        </div>

        {/* Ticker Content */}
        <div
          className="ticker-content flex-1 overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={tickerRef}
            className="flex items-center whitespace-nowrap"
            style={{ x: translateX }}
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="inline-flex items-center mx-6 hover:underline"
              >
                <span className="text-primary-foreground mr-2">▸</span>
                {item.text}
                {item.isNew && (
                  <span className="new-badge ml-2">NEW</span>
                )}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 px-2 flex-shrink-0 bg-primary/20">
          <button
            onClick={handlePrev}
            className="p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
          </button>
          <button
            onClick={handleNext}
            className="p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsTicker;
