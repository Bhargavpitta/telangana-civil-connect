import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header = ({ logoUrl }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`header-container ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start py-4 gap-6">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/">
              <img 
                src={logoUrl} 
                alt="Government of Telangana" 
                className="h-20 w-auto md:h-24"
              />
            </a>
          </motion.div>

          {/* Title */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-text-dark tracking-wide leading-tight">
              CONSUMER AFFAIRS, FOOD AND CIVIL SUPPLIES DEPARTMENT
            </h1>
            <p className="text-base md:text-lg font-medium text-muted-foreground mt-1">
              <strong>GOVERNMENT OF TELANGANA - INDIA</strong>
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
