import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import NewsTicker from '@/components/NewsTicker/NewsTicker';
import ContactsPanel from '@/components/ContactsPanel/ContactsPanel';
import Footer from '@/components/Footer/Footer';

// Import images
import telanganaLogo from '@/assets/civilLogo.png';
import cmImage from '@/assets/revanthReddy.jpeg';
import ministerImage from '@/assets/uttam.jpeg';
import tgRisingLogo from '@/assets/risingTelangana.jpeg';
import commissionerImage from '@/assets/DS.webp';

const heroCards = [
  {
    image: cmImage,
    name: 'Sri A.Revanth Reddy',
    title: "HON'BLE CHIEF MINISTER",
    subtitle: 'Telangana',
  },
  {
    image: commissionerImage,
    name: 'Sri D.S Chouhan IPS',
    title: 'Commissioner of Civil Supplies',
    subtitle: 'Telangana',
  },
   {
    image: ministerImage,
    name: 'Sri Capt. N.Uttam Kumar Reddy',
    title: "Hon'ble Minister for Irrigation &",
    subtitle: 'CAD and Food & Civil Supplies',
  },
];

const Home = () => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Header height is approximately 100px
      if (scrollY > 100) {
        setIsNavbarSticky(true);
        setIsHeaderVisible(false);
      } else {
        setIsNavbarSticky(false);
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Header logoUrl={telanganaLogo} isVisible={isHeaderVisible} />
      <Navbar isSticky={isNavbarSticky} />
      
      {/* Spacer for when navbar becomes fixed */}
      {isNavbarSticky && <div className="h-12" />}
      
      <main className="flex-1">
        <HeroSection cards={heroCards} />
        <ServicesGrid />
        <NewsTicker />
        <ContactsPanel />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Home;